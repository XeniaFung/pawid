create extension if not exists pgcrypto;

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  id_card_no text not null unique,
  password_hash text,
  must_change_password boolean not null default true,
  full_name text,
  phone text,
  email text,
  status text not null default 'active' check (status in ('active','inactive','blocked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
