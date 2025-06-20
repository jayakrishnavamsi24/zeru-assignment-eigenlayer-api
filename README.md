
# Zeru Assignment – EigenLayer Restaking Info API

## 🚀 Overview

This is a RESTful API built with **Node.js + Express**, designed for the Zeru assignment on the Nxtwave job board. It simulates a backend service that exposes restaking data from EigenLayer.

Instead of fetching live data from subgraphs or on-chain, this project uses mock JSON files to simulate the expected data. It fulfills all functional requirements and endpoints as defined in the assignment.

## 🌐 Live API

Backend URL: [https://zeru-assignment-eigenlayer-api.onrender.com](https://zeru-assignment-eigenlayer-api.onrender.com)

---

## 📦 Endpoints

### 1. `GET /restakers`

Returns a list of users who restaked stETH.

#### ✅ Sample Response
```json
[
  {
    "userAddress": "0xUser123",
    "amountRestakedStETH": "100.5",
    "targetAVSOperatorAddress": "0xOperatorABC"
  }
]
```

---

### 2. `GET /validators`

Returns metadata for validators.

#### ✅ Sample Response
```json
[
  {
    "operatorAddress": "0xOperatorABC",
    "totalDelegatedStakeStETH": "5000",
    "slashHistory": [
      {
        "timestamp": 1678886400,
        "amountStETH": "50",
        "reason": "Misconduct X"
      }
    ],
    "status": "active"
  }
]
```

---

### 3. `GET /rewards/:address`

Returns reward information for a given wallet address.

#### ✅ Sample Response
```json
{
  "walletAddress": "0xUser123",
  "totalRewardsReceivedStETH": "75.2",
  "rewardsBreakdown": [
    {
      "operatorAddress": "0xOperatorABC",
      "amountStETH": "60.0",
      "timestamps": [1678972800, 1679059200]
    }
  ]
}
```

---

## 📁 Project Structure

```
eigenlayer-restaking-api/
├── server.js
├── .env
├── package.json
├── README.md
├── data/
│   ├── restakers.json
│   ├── validators.json
│   └── rewards.json
├── routes/
│   ├── restakers.js
│   ├── validators.js
│   └── rewards.js
├── controllers/
│   ├── restakerController.js
│   ├── validatorController.js
│   └── rewardController.js
├── config/
│   └── db.js (optional, if using MongoDB)
```

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB (optional – only `.env` contains placeholder, but mock data is used)
- JSON mock files as static data

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/eigenlayer-api.git
cd eigenlayer-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

### 4. Environment File

Create a `.env` file with the following (MongoDB not used here):

```
MONGO_URI=your_dummy_mongo_string_if_any
```

---

## 🤖 Assumptions

- Dummy static JSON is used in place of subgraph or blockchain data.
- This is only a simulation backend for the given assignment.
- Timestamps are in UNIX format.
- Addresses are assumed and not fetched from real chains.

---

## 📜 License

This project is created only for educational/evaluation purposes for Zeru x Nxtwave job board assignment.
