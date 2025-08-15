create table if not exists casestudies (
    id bigint primary key generated always as identity,
    title text not null,
    category text not null,
    description text not null,
    fullDescription text not null,
    impact text not null,
    status text not null,
    duration text not null,
    team text not null,
    client text not null,
    image text not null,
    tags text not null,
    results text not null,
    technologies text not null
)