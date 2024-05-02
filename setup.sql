-- Create the shoes table in the SQLite database file
CREATE TABLE IF NOT EXISTS shoes (
    id INTEGER PRIMARY KEY,
    name TEXT,
    category TEXT,
    price REAL,
    image_url TEXT
);

-- Insert 50 sample shoes into the shoes table
INSERT INTO shoes (name, category, price, image_url)
VALUES 
    ('Nike Air Max', 'Sneakers', 120.99, 'https://example.com/nike_air_max.jpg'),
    ('Adidas Superstar', 'Sneakers', 99.99, 'https://example.com/adidas_superstar.jpg'),
    -- Add more shoes here
    ('Steve Madden Heels', 'Heels', 89.99, 'https://example.com/steve_madden_heels.jpg');
