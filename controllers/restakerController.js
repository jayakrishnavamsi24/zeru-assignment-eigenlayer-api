const restakers = require("../data/restakers.json");

exports.getRestakers = (req, res) => {
  res.json(restakers);
};