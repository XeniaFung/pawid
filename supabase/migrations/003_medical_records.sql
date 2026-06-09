create table if not exists public.medical_records (
  id uuid primary key default gen_random_uuid(),
  pet_id uuid not null references public.pets(id) on delete cascade,
  record_type text not null,
  title text not null,
  record_date date,
  next_due_date date,
  vet_name text,
  notes text
);
