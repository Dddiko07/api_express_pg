CREATE DATABASE kampus;

\c kampus

CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  major VARCHAR(50),
  age INT
);
