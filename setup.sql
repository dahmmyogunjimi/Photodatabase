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
    ('Nike Air Max Dn', 'Sneakers', 160, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6cfb4ce5-2da4-4a6d-b79d-4ae520ae5e77/air-max-dn-shoes-27XkSQ.png'),
    ('Adidas Superstar', 'Sneakers', 110, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f55efb99d6ea4948827b79c18a453168_9366/Superstar_Shoes_White_IF3637_01_standard.jpg'),
    ('MELLOW LUXE RECOVERY SLIDE', 'Sandals', 64.99, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/209413_2DT_ALT100/crocs'),
    ('Capitola Cross Slide', 'Sandals', 120, 'https://dms.deckers.com/ugg/image/upload/f_auto,q_40,dpr_2/b_rgb:eeeeee/w_483/v1700510492/catalog/images/transparent/1153076-COG_1.png?_s=RAABAB00'),
    ('SAMBA OG SHOES', 'Sneakers', 100, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9de2e3254f5a425f8482fb4afd6632be_9366/Samba_OG_Shoes_White_IF6513_01_standard.jpg'),
    ('CLASSIC WARPED LOGO CLOG', 'Clogs', 54.99, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/210805_100_ALT100/crocs'),
    ('Nike Air Force 1 07', 'Sneakers', 115, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png'),
    ('Mens Tasman Slipper', 'Slippers', 110, 'https://dms.deckers.com/ugg/image/upload/f_auto,q_40,dpr_2/b_rgb:eeeeee/w_483/v1637633033/catalog/images/transparent/5950-CHE_01.png?_s=RAABAB0'),
    ('Nike Dunk Low Retro', 'Sneakers', 115, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30ed2748-cf6a-4697-a59f-105bbc4de8dc/dunk-low-retro-mens-shoes-5FQWGR.png'),
    ('GAZELLE SHOES', 'Sneakers', 120, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e745acb29cd248e8994a6820a4ac6a29_9366/Gazelle_Shoes_Yellow_IF5937_01_standard.jpg'),
    ('ECHO MARBLED CLOG', 'Clogs', 74.99, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208454_2Y3_ALT100/crocs'),
    ('Neumel', 'Boots', 140, 'https://dms.deckers.com/ugg/image/upload/f_auto,q_40,dpr_2/b_rgb:eeeeee/w_483/v1637600175/catalog/images/transparent/3236-BLK_1.png?_s=RAABAB0');
