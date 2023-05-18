DROP TABLE IF EXISTS "user";

create table "user" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(300) NOT NULL
);