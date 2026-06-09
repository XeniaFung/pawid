-- PawID ID Card workflow schema
-- Full Supabase schema will be added in smaller migration files.

create extension if not exists pgcrypto;

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  id_card_no text not null unique,
  full_name text,
  phone text,
  email text,
  status text not null default 'active',
  created_at timestamptz not null default now()
);
