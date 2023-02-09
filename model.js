const mongoose = require("mongoose");

const csv = new mongoose.Schema({
  id: {
    type: String,
  },
  months_balance: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("csv", csv);
