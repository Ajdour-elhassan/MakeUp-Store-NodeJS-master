const path = require("path");
const express = require("express");
const router = express.Router();

const adminController = require("../controller/admin");

// Admin/add-product => GET REQUEST
router.get("/add-product", adminController.getAddProduct);

// Admin/products => GET Products
router.get("/products", adminController.getAllProducts);

// Admin/aad-product => POST REQUEST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
