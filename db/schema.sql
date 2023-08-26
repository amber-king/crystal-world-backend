-- Create the crystal_world database
DROP DATABASE IF EXISTS crystal_world;

CREATE DATABASE crystal_world;

\ c crystal_world;

-- Create luster_options table
CREATE TABLE luster_options (
  id SERIAL PRIMARY KEY,
  option_name TEXT NOT NULL
);

-- Create hardness_options table
CREATE TABLE hardness_options (
  id SERIAL PRIMARY KEY,
  rating NUMERIC,
  CONSTRAINT unique_rating UNIQUE (rating)
);

-- Create crystals table
CREATE TABLE crystals (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  transparency TEXT NOT NULL,
  hardness NUMERIC,
  color TEXT NOT NULL,
  luster_name TEXT NOT NULL,
  healing_features TEXT NOT NULL,
  FOREIGN KEY (hardness) REFERENCES hardness_options(rating)
);