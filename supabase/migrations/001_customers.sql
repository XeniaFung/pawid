create extension if not exists pgcrypto;

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  id_card_no text not null unique,
  full_name text,
  phone text,
  email text,
  address text,
  password_changed boolean not null default false,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestampt