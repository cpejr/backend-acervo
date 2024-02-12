const app = require("./App");
const mongoDB = require("./Config/mongoDB");

mongoDB();
app.listen(8000, () => console.log("Servidor Rodando!"));
