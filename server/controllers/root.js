const config = require("config")
const assetJson = require("../../assets.json");

module.exports.index = async (request, res) => {
  const assetPrefix = config.env == "development" ? "http://localhost:5678/" : "/public/dist/";
  return res.view('app', { config: { data: { } ,bundlePath: assetPrefix + assetJson.main.js }})
}
