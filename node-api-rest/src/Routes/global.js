// for basic routes 
const express = require("express")

const router = express.Router();

//your route paths and methods

const globalController = require("./controllers/global")
//your routes and methods


//single basic route at the base path of your application
router.get("/", globalController.healthyCheck)


module.exports = router
