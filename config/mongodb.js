const mongoose = require("mongoose");

async function startDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://acervodebomdespacho:hw5UFPX896oI6Ph3@acervobd.io7pudu.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Banco de dados inicializado");
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
  }
}
module.exports = startDB;
