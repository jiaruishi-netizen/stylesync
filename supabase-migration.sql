alter table public.wardrobe_items
  add column if not exists season text[] not null default '{}',
  add column if not exists product_url text,
  add column if not exists source jsonb,
  add column if not exists is_test_data boolean not null default false;

create unique index if not exists wardrobe_items_user_product_url_uq
  on public.wardrobe_items(user_id, product_url)
  where product_url is not null;
