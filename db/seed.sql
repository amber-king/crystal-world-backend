-- Insert data into luster_options table
INSERT INTO
  luster_options (option_name)
VALUES
  ('Vitreous'),
  ('Pearly'),
  ('Metallic'),
  ('Dull'),
  ('Adamantine'),
  ('Greasy'),
  ('Waxy'),
  ('Silky'),
  ('Resinous');

-- Insert data into hardness_options table
INSERT INTO
  hardness_options (rating)
VALUES
  (1),
  (2),
  (3),
  (4),
  (5),
  (6),
  (7),
  (8),
  (9),
  (10);

-- Insert data into crystals table
INSERT INTO
  crystals (
    name,
    transparency,
    luster_name,
    hardness,
    color
  )
VALUES
  (
    'Pyrite',
    'Opaque',
    'Metallic',
    6,
    'Brassy yellow'
  ),
  (
    'Quartz',
    'Transparent',
    'Vitreous',
    7,
    'Colorless or various'
  ),
  (
    'Amber',
    'Translucent',
    'Silky',
    2,
    'Yellow to brown'
  ),
  (
    'Talc',
    'Opaque',
    'Resinous',
    1,
    'White, pale green, gray'
  ),
  (
    'Nepheline',
    'Translucent',
    'Dull',
    5,
    'White, gray, green, blue'
  ),
  (
    'Diamond',
    'Transparent',
    'Waxy',
    10,
    'Colorless'
  ),
  (
    'Gypsum',
    'Transparent',
    'Pearly',
    2,
    'Colorless, white, gray, brown'
  ),
  (
    'Apatite',
    'Transparent',
    'Pearly',
    5,
    'Blue, green, yellow, pink'
  ),
  (
    'Limonite',
    'Opaque',
    'Greasy',
    5,
    'Yellow, brown'
  );