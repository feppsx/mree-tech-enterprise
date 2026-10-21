-- =====================================================================
-- M.REE TECH ENTERPRISE — Leads table for "Request a Quote" form
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- =====================================================================

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 2 and 100),
  phone       text not null check (char_length(phone) between 7 and 20),
  email       text check (email is null or email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  service     text not null check (service in (
                'Plumbing',
                'CCTV Installing',
                'Painting',
                'Partition Works',
                'Aircond Service',
                'Wiring',
                'Renovation',
                'Other'
              )),
  message     text check (message is null or char_length(message) <= 2000),
  status      text not null default 'new'
                check (status in ('new', 'contacted', 'quoted', 'won', 'lost'))
);

-- Newest leads first when you browse them in the dashboard
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- ---------------------------------------------------------------------
-- Row Level Security
-- The public website may only INSERT. Nobody using the public key can
-- read, edit or delete leads. You view them in the Supabase dashboard
-- (which bypasses RLS) or from a server using the service_role key.
-- ---------------------------------------------------------------------
alter table public.leads enable row level security;

drop policy if exists "Public can submit leads" on public.leads;
create policy "Public can submit leads"
  on public.leads
  for insert
  to anon, authenticated
  with check (status = 'new');   -- visitors can't pre-set a status

-- Make sure the API roles can only insert (no select/update/delete)
revoke all on public.leads from anon, authenticated;
grant insert on public.leads to anon, authenticated;
