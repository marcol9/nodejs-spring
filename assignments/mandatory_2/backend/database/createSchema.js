import { db } from "./createSchemaConnection.js";

const deleteMode = true;

if (deleteMode) {
  db.exec("DROP TABLE IF EXISTS users;");
  db.exec("DROP TABLE IF EXISTS items;");
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(100),
    role VARCHAR(15),
    token VARCHAR(100)
)`);
db.exec(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    price INT,
    category VARCHAR(20),
    description VARCHAR(1000),
    inStock INT,
    picture VARCHAR(1000)
)`);

//seed the database
if (deleteMode) {
  db.run(
    `INSERT INTO users (username,password,email,role,token) VALUES ('Marcelol', '$2b$10$UaHjJ6Gu3sIQU1Mr5ov9z.mRVUvjkxNz3urX2kWMfNYJq5dQfyxwK','marekslipnickis@inbox.lv','admin', null)`
  );
  db.run(
    `INSERT INTO users (username,password,email,role,token) VALUES ('Marcelol2', '$2b$10$UaHjJ6Gu3sIQU1Mr5ov9z.mRVUvjkxNz3urX2kWMfNYJq5dQfyxwK','marekslipnickis2@inbox.lv','user', null)`
  );
  db.run(
    `INSERT INTO users (username,password,email,role,token) VALUES ('Marcelol3', '$2b$10$UaHjJ6Gu3sIQU1Mr5ov9z.mRVUvjkxNz3urX2kWMfNYJq5dQfyxwK','marekslipnickis3@inbox.lv','user', null)`
  );

  db.run(
    `INSERT INTO items (name,price,category,description,inStock,picture) VALUES ('Iphone 11', 12000,'phones','Apple iPhone 11 is powered by the Apple A13 Bionic processor. The smartphone comes with a 6.1 inches Liquid Retina IPS LCD capacitive touchscreen and 828 x 1792 pixels resolution. The screen of the device is protected by Scratch-resistant glass and oleophobic coating.

    The rear camera consists of a 12 MP (wide) + 12 MP (ultrawide) lenses.
    
    The front camera has a 12 MP + TOF 3D camera sensor. The phone’s sensors include Face ID, accelerometer, gyro, proximity, compass, and barometer.
    
    The smartphone is fueled by a Non-removable Li-Ion 3110 mAh battery + Fast battery charging 18W: 50% in 30 min + USB Power Delivery 2.0 + Qi wireless charging.
    
    The phone runs on iOS 13.
    
    The Apple iPhone 11 comes in different colors like, Black, Green, Yellow, Purple, Red, and White. It features 2.0, proprietary reversible connector.', 5, 'https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg')`
  );
  db.run(
    `INSERT INTO items (name,price,category,description,inStock,picture) VALUES ('Iphone 12', 15000,'phones','The phone is powered by the new Apple A14 Bionic processor. The smartphone comes with a 6.1 inches Super Retina XDR OLED capacitive touchscreen, 1170 x 2532 pixels resolution and HDR10 display, Wide color gamut, Dolby Vision, and True-tone.

    Additionally, the screen of the device is protected by Scratch-resistant glass and oleophobic coating. The rear camera consists of 12 MP (wide) + 12 MP (ultrawide) with Quad-LED dual-tone flash, and HDR (photo/panorama).
    
    The front camera consists of 12 MP (wide) + SL 3D, (depth/biometrics sensor) with HDR. The phone’s sensors include Face ID, accelerometer, gyro, proximity, compass, barometer + Siri natural language commands, and dictation.
    
    The smartphone is fueled by a non-removable Li-Ion battery + Fast charging 18W, 50% in 30 min (advertised) + USB Power Delivery 2.0 + Qi fast wireless charging 15W. The phone runs on the iOS 14 operating system.
    
    The Apple iPhone 12 comes in different colors like Black, White, Red, Green, and Blue. The dimension of the smartphone is 146.7 x 71.5 x 7.4 mm and it weighs 164 grams. It is IP68 dust/water resistant and supports Single SIM (Nano-SIM and/or eSIM).', 20, 'https://www.gizmochina.com/wp-content/uploads/2020/10/cats-500x500.jpg')`
  );
  db.run(
    `INSERT INTO items (name,price,category,description,inStock,picture) VALUES ('iPad Air (2020)', 10000,'tablets','The tablet features True-tone, Wide color gamut, and 500 nits typ. brightness (advertised) on the display while the size of the screen is 10.9 inches Liquid Retina IPS LCD capacitive touchscreen. It is protected by Scratch-resistant glass and oleophobic coating.

    The dimension of the tablet is 247.6 x 178.5 x 6.1 mm and it weighs 458 gram (Wi-Fi) / 460 gram (3G/LTE). The resolution of the screen is 1640 x 2360 pixels and it has a density of 264 PPI.
    
    It runs on iPadOS 14 and powered by an Apple A14 Bionic Hexa-core processor. It is pack with 64 GB and 256 GB internal storage. The main camera consists of 12 MP (wide) with HDR and on the front, there is a single standard camera of 7 MP.
    
    The sensors include Fingerprint (top-mounted), accelerometer, gyro, compass, barometer, and Siri natural language commands and dictation. The tablet is fueled with Li-Po, non-removable (28.6 Wh) and the talk time is 10 hours (multimedia). It is available in various colors such as Space Gray, Silver, Rose Gold, Green, and Sky Blue.', 10, 'https://www.gizmochina.com/wp-content/uploads/2020/09/Apple-iPad-Air-2020-500x500.jpg')`
  );
}
db.close();
