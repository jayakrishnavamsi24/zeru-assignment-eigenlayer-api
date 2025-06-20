const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const restakerRoutes = require("./routes/restakers");
const validatorRoutes = require("./routes/validators");
const rewardRoutes = require("./routes/rewards");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

app.use("/restakers", restakerRoutes);
app.use("/validators", validatorRoutes);
app.use("/rewards", rewardRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to EigenLayer API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));