create table if not exists advisors (
    id bigint primary key generated always as identity,
    name text not null,
    role text not null,
    expertise text not null,
    image text not null,
    achievements text not null,
    bio text not null
)