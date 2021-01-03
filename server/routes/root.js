const config = require("config")
const express = require('express');
const router = express.Router();
const assetJson = require("../../assets.json");

/* GET home page. */
router.get('/', (req, res, next) => {
  const assetPrefix = config.env == "development" ? "http://localhost:5678/" : "/public/dist/";
  res.render('index', { config: { bundlePath: assetPrefix + assetJson.main.js } });
});

module.exports = router;
