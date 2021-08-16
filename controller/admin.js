const Product = require("../models/ProductsModule");

//  Get => Add-Products
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "add-product",
    path: "admin/add-product",
  });
};

// POST => Add-Prouducts
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(title, imageUrl, price, description);
  product.save();
  console.log(product);
  res.redirect("/");
};

exports.getAllProducts = (req, res, next) => {
  // Callback refers to => product function
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "all products",
      path: "admin/products",
      hasproduct: products.length > 0,
    });
  });
};

// response.sendFile(path.join(__dirname, "../", "views", "shop.html"));
