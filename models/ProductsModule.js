const fs = require("fs");
const path = require("path");

const products = [];

// Global Variable
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductFromFiles = (callback) => {
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      callback([]);
    }
    return callback(JSON.parse(fileContent));
  });
  return products;
};

//  Product Models
module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    // products.push(this);
    getProductFromFiles((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductFromFiles(callback);
  }
};
