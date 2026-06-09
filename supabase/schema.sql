-- PawID ID Card workflow schema
-- New flow: Admin creates customer profiles. Customers login with ID Card No + default password abc123.

create extension if not exists pgcrypto;

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  id_card_no text not null unique,
  password_hash text,
  must_change_password boolean not null default true,
  full_name text,
  phone text,
  email text,
  address text