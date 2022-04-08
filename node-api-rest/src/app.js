const express = require("express");

// server application
// app.listen(3000, () => console.log("server is running at port 3000"));

//import our local router file
const routes = require('./routes')

//init express
const app = express();

// allow expres to work with json
app.use(express.json())

//router
app.use(routes)

//export app to import  into server js
module.exports = app
