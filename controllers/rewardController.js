const rewards = require("../data/rewards.json");

exports.getRewardByAddress = (req, res) => {
  const { address } = req.params;
  const reward = rewards.find(r => r.walletAddress.toLowerCase() === address.toLowerCase());
  if (!reward) return res.status(404).json({ message: "Wallet not found" });
  res.json(reward);
};