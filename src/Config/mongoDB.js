const mongoose = require("mongoose");

async function startDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Banco de dados inicializado!");
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
  }
}

module.exports = startDB;
