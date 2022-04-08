const express = require("express");
const router = express.Router();

//your route paths and methods

//single basic route at the base path of the application
router.get("./", (req, res) => {
  res.send("API online");
});

module.exports = router;
