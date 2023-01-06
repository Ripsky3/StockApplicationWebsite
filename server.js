const getStockPrice = require("./utils/stock");
const express = require("express");   
const app = express();
const path = require("path");
const hbs = require("hbs");

//getStockPrice("AAPL");

// Directories
const publicDirectoryPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

// Set up views
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (err, res) => {
    res.render("home", {
       title: "Home Page"
    });
})

app.get("/about", (err, res) => {
    res.render("about", {
        title: "About Page"
    });
})

app.get("/help", (err, res) => {
    res.render("help", {
        title: "Help Page"
    });
})

app.listen(3000, () => {
    console.log("Server starting on port 3000");
})