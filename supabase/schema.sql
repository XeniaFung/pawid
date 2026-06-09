create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role text not null default 'owner' check (role in ('owner', 'admin', 'vet', 'groomer')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  species text not null,
  breed text,
  gender text,
  birthday date,
  photo_url text,
  microchip_no text,
  allergy_note text,
  public_note text,
  lost_mode boolean not null default false,
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nfc_cards (
  id uuid primary key default gen_random_uuid(),
  public_code text not null unique,
  pet_id uuid references public.pets(id) on delete set null,
  status text not null default 'unused' check (status in ('unused', 'active', 'lost', 'replaced', 'disabled')),
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.medical_records (
  id uuid primary key default gen_random_uuid(),
  pet_id uuid not null references public.pets(id) on delete cascade,
  record_type text not null check (record_type in ('vaccination', 'deworm', 'checkup', 'allergy', 'surgery', 'medication', 'other')),
  title text not null,
  record_date date not null,
  next_due_date date,
  vet_name text,
  notes text,
  attachment_url text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pet_access (
  id uuid primary key default gen_random_uuid(),
  pet_id uuid not null references public.pets(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  access_role text not null default 'viewer' check (access_role in ('owner', 'editor', 'viewer')),
  created_at timestamptz not null default now(),
  unique (pet_id, user_id)
);

alter table public.profiles enable row level security;
alter table public.pets enable row level security;
alter table public.nfc_cards enable row level security;
alter table public.medical_records enable row level security;
alter table public.pet_access enable row level security;

create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

create policy "pets_public_select" on public.pets for select using (is_public = true);
create policy "pets_owner_all" on public.pets for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "nfc_cards_public_select_active" on public.nfc_cards for select using (status in ('active', 'lost'));
create policy "nfc_cards_admin_all" on public.nfc_cards for all using (
  exists (select 1 from public.profiles where profiles.id = auth.uid() and profiles.role = 'admin')
);

create policy "medical_records_public_select" on public.medical_records for select using (
  exists (select 1 from public.pets where pets.id = medical_records.pet_id and pets.is_public = true)
);
create policy "medical_records_owner_all" on public.medical_records for all using (
  exists (select 1 from public.pets where pets.id = medical_records.pet_id and pets.owner_id = auth.uid())
) with check (
  exists (select 1 from public.pets where pets.id = medical_records.pet_id and pets.owner_id = auth.uid())
);

create policy "pet_access_owner_select" on public.pet_access for select using (auth.uid() = user_id);
