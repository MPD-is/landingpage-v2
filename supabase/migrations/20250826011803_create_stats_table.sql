create table if not exists stats (
    id bigint primary key generated always as identity,
    label text not null,
    value text not null
)