const express = require("express");
const ejs = require("ejs");

const app = express();
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
//to say that we are using static files in the public folder
app.use(express.static("public"));
