create table if not exists public.pets (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  pet_name text not null,
  species text,
  breed text,
  gender text,
  birthday date,
  allergy_note text,
  public_note text
);
