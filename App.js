const express = require("express");

const app = express();
app.get("", (req, res) => {
  return res.json({
    message: "Hello World!",
  });
});

app.listen(8000, () => console.log("Servidor Rodando!"));
