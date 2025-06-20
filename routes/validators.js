const express = require("express");
const router = express.Router();
const { getValidators } = require("../controllers/validatorController");

router.get("/", getValidators);
module.exports = router;