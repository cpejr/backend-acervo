const mongoose = require("mongoose");

async function startdb() {
  await mongoose.connect();
}

module.exports = startDB;
