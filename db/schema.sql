DROP DATABASE IF EXISTS crystal_world;

CREATE DATABASE crystal_world;

\c crystal_world;


  CREATE TABLE crystals (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  transparency TEXT NOT NULL,
  luster_id INT,
  hardness NUMERIC,
  color TEXT NOT NULL

);
CREATE TABLE luster_options (
  id SERIAL PRIMARY KEY,
  option_name TEXT NOT NULL
);

CREATE TABLE hardness_options (
  id SERIAL PRIMARY KEY,
  rating NUMERIC
);

ALTER TABLE crystals
ADD FOREIGN KEY (luster_id) REFERENCES luster_options(id);

ALTER TABLE hardness_options
ADD CONSTRAINT unique_rating UNIQUE (rating);


ALTER TABLE crystals
ADD FOREIGN KEY (hardness) REFERENCES hardness_options(rating);




