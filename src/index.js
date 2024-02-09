const startDB = require("../config/mongodb");
const app = require("./App");
startDB();
app.listen(8000, () => console.log("Servidor Rodando!"));
