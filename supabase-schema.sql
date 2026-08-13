-- StyleSync: wardrobe items + style profile, scoped per-user via Row Level Security.
-- Safe to re-run: drops any existing copies of these two tables first (this project
-- has no real user data yet, so this is a clean reset, not a data-loss risk).
-- NOTE: id is text, not uuid — the app generates its own ids client-side (e.g. "w1", "u1a2b3c").

drop table if exists wardrobe_items cascade;
drop table if exists style_profiles cascade;

create table wardrobe_items (
  id text primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  cat text not null,
  sub text,
  color text,
  color_name text,
  pattern text,
  color_role text,
  formality int,
  warmth int,
  style text[],
  img text,
  created_at timestamptz default now()
);

alter table wardrobe_items enable row level security;

create policy "select own wardrobe items" on wardrobe_items
  for select using (auth.uid() = user_id);
create policy "insert own wardrobe items" on wardrobe_items
  for insert with check (auth.uid() = user_id);
create policy "update own wardrobe items" on wardrobe_items
  for update using (auth.uid() = user_id);
create policy "delete own wardrobe items" on wardrobe_items
  for delete using (auth.uid() = user_id);

create table style_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  style text[],
  color text[],
  budget text,
  updated_at timestamptz default now()
);

alter table style_profiles enable row level security;

create policy "select own style profile" on style_profiles
  for select using (auth.uid() = user_id);
create policy "insert own style profile" on style_profiles
  for insert with check (auth.uid() = user_id);
create policy "update own style profile" on style_profiles
  for update using (auth.uid() = user_id);
