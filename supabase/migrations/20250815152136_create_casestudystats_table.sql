create table if not exists casestudystats (
    id bigint primary key generated always as identity,
    label text not null,
    value text not null
)