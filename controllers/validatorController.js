const validators = require("../data/validators.json");

exports.getValidators = (req, res) => {
  res.json(validators);
};
