//import all the  necessary modules
const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 2323;
const cors = require("cors");

app.use(cors()); //it allows for multiple  domains requesting and requesting that are not mentioned in the the corsoptions is not accessible

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "apple_website",
});
// connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log("Database connection established");
});
// create table
const product = `CREATE TABLE IF NOT EXISTS iphone_product(
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_url VARCHAR(255) NOT NULL,
    image_size  VARCHAR(255) NOT NULL,
    product_info VARCHAR(255) NOT NULL
  )`;
const description = `CREATE TABLE IF NOT EXISTS iphone_description(
  description_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT(11),
  product_status VARCHAR(255) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_description VARCHAR(255) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES iphone_product (product_id)
  )`;
const price = `CREATE TABLE IF NOT EXISTS iphone_price(
  price_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT(11),
  price_range VARCHAR(255) NOT NULL,
  product_link VARCHAR(255) NOT NULL,
  price_link VARCHAR(255) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES iphone_product (product_id)
  )`;
const spec = `CREATE TABLE IF NOT EXISTS iphone_spec(
 spec_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT(11),
  intelligence_icon VARCHAR(255) NOT NULL,
  intelligence_description VARCHAR(255) NOT NULL,
  chip_type VARCHAR(255) NOT NULL,
  chip_description VARCHAR(255) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES iphone_product (product_id)
  )`;
const camera = `CREATE TABLE IF NOT EXISTS iphone_camera(
  camera_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  camera_feature VARCHAR(255) NOT NULL,
  feature_function VARCHAR(255) NOT NULL,
  camera_icon VARCHAR(255) NOT NULL,
  camera_description1 VARCHAR(255) NOT NULL,
  camera_description2 VARCHAR(255) NOT NULL,
  camera_description3 VARCHAR(255) NOT NULL,
  camera_description4 VARCHAR(255) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES   iphone_product (product_id)
  )`;
const battery = `CREATE TABLE IF NOT EXISTS iphone_battery(
product_id INT AUTO_INCREMENT PRIMARY KEY,
 battery_icon VARCHAR(255) NOT NULL,
 battery_info VARCHAR(255) NOT NULL,
 FOREIGN KEY (product_id) REFERENCES iphone_product(product_id)
)`;
connection.query(product, (err, results, fields) => {
  if (err) {
    console.error("could not created product table", err);
    return;
  }
  console.log("product table created successfully");
});
connection.query(description, (err, results, fields) => {
  if (err) {
    console.error("could not created description table", err);
    return;
  }
  console.log("description table created successfully");
});
connection.query(price, (err, results, fields) => {
  if (err) {
    console.error("could not create price table", err);
    return;
  }
  console.log("price table created successfully");
});
connection.query(spec, (err, results, fields) => {
  if (err) {
    console.error("could not create spec table", err);
    return;
  }
  console.log("spec table created successfully");
});
connection.query(camera, (err, results, fields) => {
  if (err) {
    console.error("could not create camera table", err);
    return;
  }
  console.log("camera table created successfully");
});
connection.query(battery, (err, results, fields) => {
  if (err) {
    console.error("could not create battery table", err);
    return;
  }
  console.log("battery table created successfully");
});

//add new column for iphone_price table
//check if the column exists
const checkColumn = `SELECT COUNT(*) AS ColumnExists FROM information_schema.columns WHERE table_name = "iphone_price" AND column_name = "singleIphone_link" AND table_schema = 'apple_website'`;

connection.query(checkColumn, (err, result) => {
  if (err) {
    console.error("could not add singleIphone_link column", err);
    return;
  }
  if (result[0].columnExists === 0) {
    //column does not exist so we need to create
    const newColumn =
      "ALTER TABLE iphone_price ADD COLUMN singleIphone_link  VARCHAR(255)";
    connection.query(newColumn, (err, results) => {
      if (err) throw err;
      console.log("singleIphone_link column added successfully", results);
    });
  } else {
    console.log("singleIphone_link column already exists, no change needed");
  }
  //close the connection
});

//  use  express to  parse  submitted data  from the  body or you can require body parser
app.use(express.urlencoded({ extended: true }));
// use express post method to post data to the server
app.post("/add-product", (req, res) => {
  const {
    product_url,
    image_size,
    product_info,
    product_status,
    product_name,
    product_description,
    price_range,
    product_link,
    price_link,
    intelligence_icon,
    intelligence_description,
    chip_type,
    chip_description,
    camera_feature,
    feature_function,
    camera_icon,
    camera_description1,
    camera_description2,
    camera_description3,
    camera_description4,
    battery_icon,
    battery_info,
  } = req.body;
  const insertProductQuery = `INSERT INTO iphone_product(product_url,image_size, product_info) VALUES (?,?,?)`;
  const insertDescriptionQuery = `INSERT INTO  iphone_description (product_id, product_status,product_name, product_description) VALUES (?,?,?,?)`;
  const insertPriceQuery = `INSERT INTO iphone_price(product_id, price_range,product_link,price_link)VALUES(?,?,?,?)`;
  const insertSpecQuery = `INSERT INTO iphone_spec (product_id, intelligence_icon,intelligence_description, chip_type, chip_description)VALUES(?,?,?,?,?)`;
  const insertCameraQuery = `INSERT INTO iphone_camera(product_id, camera_feature, feature_function,camera_icon, camera_description1, camera_description2, camera_description3, camera_description4)VALUES(?,?,?,?,?,?,?,?)`;
  const insertBatteryQuery = `INSERT INTO iphone_battery(product_id, battery_icon, battery_info) VALUES(?,?,?)`;

  connection.query(
    insertProductQuery,
    [product_url, image_size, product_info],
    (err, results, fields) => {
      if (err) {
        console.error("Error inserting products:", err.stack);
        return;
      }
      let id = results.insertId;
      connection.query(
        insertDescriptionQuery,
        [id, product_status, product_name, product_description],
        (err, results, fields) => {
          if (err) {
            console.error("inserting error description table:", err.stack);
            return;
          }
          console.log("inserting description successful:", results);
        }
      );
      connection.query(
        insertPriceQuery,
        [id, price_range, product_link, price_link],
        (err, results, fields) => {
          if (err) {
            console.error("Error inserting price table", err.stack);
            return;
          }
          console.log("Inserting price table", results);
        }
      );
      connection.query(
        insertSpecQuery,
        [
          id,
          intelligence_icon,
          intelligence_description,
          chip_type,
          chip_description,
        ],
        (err, results, fields) => {
          if (err) {
            console.error("Error inserting spec table", err.stack);
            return;
          }
          console.log("Inserting spec table", results);
          return results.insertId;
        }
      );
      connection.query(
        insertCameraQuery,
        [
          id,
          camera_feature,
          feature_function,
          camera_icon,
          camera_description1,
          camera_description2,
          camera_description3,
          camera_description4,
        ],
        (err, results, fields) => {
          if (err) {
            console.error("Error inserting camera table", err.stack);
            return;
          }
          console.log("Inserting camera table", results);
        }
      );
      connection.query(
        insertBatteryQuery,
        [id, battery_icon, battery_info],
        (err, results, fields) => {
          if (err) {
            console.error("Error inserting battery table", err.stack);
            return;
          }
          console.log("Inserting battery table", results);
        }
      );
      res.send("Product added successfully");
      res.end();
    }
  );
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});

app.get("/iphone", (req, res) => {
  const query = `SELECT * FROM iphone_product
    JOIN iphone_description ON iphone_product.product_id = iphone_description.product_id
    JOIN iphone_price ON iphone_product.product_id = iphone_price.product_id
    JOIN iphone_spec ON iphone_product.product_id =iphone_spec.product_id
    JOIN iphone_camera ON iphone_product.product_id =iphone_camera.product_id
    JOIN iphone_battery ON iphone_product.product_id =iphone_battery.product_id `;
  connection.query(query, (err, results) => {
    // let iphone = { iphone_product: [] };
    // iphone.iphone_product = rows;
    // let stringIphone = JSON.stringify(iphone);
    if (err) {
      console.error("Error fetching iphone website data: " + err);
      res.status(500).send("Data base query failed", err);
    }
    res.json(results);
  });
});
