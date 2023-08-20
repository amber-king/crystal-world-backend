\ c crystal_world -- INSERT INTO
--   crystals (
--     name,
--     transparency,
--     luster_id INT,
--     hardness NUMERIC,
--     color
--   )
-- VALUES
--   ()
INSERT INTO
  crystals (
    name,
    transparency,
    luster_id,
    luster_name,
    hardness,
    color
  )
VALUES
  (
    'Pyrite',
    'Opaque',
    3,
    'Metallic',
    6,
    'Brassy yellow'
  ),
  (
    'Quartz',
    'Transparent',
    1,
    'Vitreous',
    7,
    'Colorless or various'
  ),
  (
    'Amber',
    'Translucent',
    7,
    'Silky',
    2,
    'Yellow to brown'
  ),
  (
    'Talc',
    'Opaque',
    5,
    'Resinous',
    1,
    'White, pale green, gray'
  ),
  (
    'Nepheline',
    'Translucent',
    6,
    'Dull',
    5,
    'White, gray, green, blue'
  ),
  (
    'Diamond',
    'Transparent',
    9,
    'Waxy',
    10,
    'Colorless'
  ),
  (
    'Gypsum',
    'Transparent',
    2,
    'Pearly',
    2,
    'Colorless, white, gray, brown'
  ),
  (
    'Apatite',
    'Transparent',
    2,
    'Pearly',
    5,
    'Blue, green, yellow, pink'
  ),
  (
    'Limonite',
    'Opaque',
    4,
    'Greasy',
    5,
    'Yellow, brown'
  );

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