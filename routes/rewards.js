const express = require("express");
const router = express.Router();
const { getRewardByAddress } = require("../controllers/rewardController");

router.get("/:address", getRewardByAddress);
module.exports = router;