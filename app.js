const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Working with Template Engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
// Get to Static Files
app.use(express.static(path.join(__dirname, "public")));

const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop");

const errorController = require("./controller/error");

// Add Product
app.use("/admin", adminRouter);

// Home Pages
app.use(shopRouter);

// // Products Page :
// app.use(productsRouter);

// GET 404 PAGE;
app.use(errorController.get404);

const PORT = 5000;

app.listen(PORT, console.log(`Server is Running in PORT ${PORT}`));
