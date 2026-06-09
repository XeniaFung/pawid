-- PawID ID Card workflow schema
-- Flow: Admin creates customer profiles. Customers login with ID Card No + default password abc123.

create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password_hash text,
  full_name text,
  created_at timestamptz not null default now()
);

create table if not