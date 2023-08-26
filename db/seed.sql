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
    hardness,
    color,
    luster_name,
    healing_features
  )
VALUES
  (
    'Pyrite',
    'Opaque',
    6,
    'Brassy yellow',
    'Metallic',
    'Promotes confidence and self-worth. Enhances mental clarity and focus. Attracts abundance and prosperity. Shields against negative energy.'
  ),
  (
    'Quartz',
    'Transparent',
    7,
    'Colorless or various',
    'Vitreous',
    'Amplifies energy and intentions. Enhances spiritual growth and meditation. Balances and aligns chakras. Facilitates communication with higher realms.'
  ),
  (
    'Amber',
    'Translucent',
    2,
    'Yellow to brown',
    'Silky',
    'Purifies and cleanses energy. Offers protection from negative influences. Aids in emotional healing and self-expression. Enhances creativity and vitality.'
  ),
  (
    'Talc',
    'Opaque',
    1,
    'White, pale green, gray',
    'Resinous',
    'Promotes peaceful and calming energy. Supports emotional healing and self-acceptance. Aids in meditation and relaxation. Encourages sensitivity and empathy.'
  ),
  (
    'Nepheline',
    'Translucent',
    5,
    'White, gray, green, blue',
    'Dull',
    'Enhances psychic abilities and intuition. Balances and aligns energy centers. Facilitates communication and self-expression. Supports dream work and journeying.'
  ),
  (
    'Diamond',
    'Transparent',
    10,
    'Colorless',
    'Waxy',
    'Amplifies positive energy and intentions. Enhances inner strength and courage. Promotes clarity of thought and purity of intention. Balances and aligns all chakras.'
  ),
  (
    'Gypsum',
    'Transparent',
    2,
    'Colorless, white, gray, brown',
    'Pearly',
    'Promotes emotional healing and tranquility. Aids in meditation and spiritual insight. Enhances communication and intuition. Clears energy blockages and negativity.'
  ),
  (
    'Apatite',
    'Transparent',
    5,
    'Blue, green, yellow, pink',
    'Pearly',
    'Stimulates personal growth and self-expression. Enhances creativity and motivation. Supports communication and self-confidence. Aids in spiritual development and meditation.'
  ),
  (
    'Limonite',
    'Opaque',
    5,
    'Yellow, brown',
    'Greasy',
    'Promotes grounding and stability. Aids in releasing old patterns and attachments. Enhances strength and endurance. Supports manifestation and abundance.'
  );