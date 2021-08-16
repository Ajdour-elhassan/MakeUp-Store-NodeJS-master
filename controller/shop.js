const Product = require("../models/ProductsModule");

exports.getAllProducts = (req, res, next) => {
  // Callback refers to => product function
  Product.fetchAll((products) => {
    res.render("shop/productsList", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasproduct: products.length > 0,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders",
  });
};
