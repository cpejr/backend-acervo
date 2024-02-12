import app from "./App.js";
import mongoDB from "./Config/mongoDB.js";

mongoDB();
app.listen(8000, () => console.log("Servidor Rodando!"));
