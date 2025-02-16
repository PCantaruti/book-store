import express from "express";
import dataBaseConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await dataBaseConnection();

connection.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

connection.once("open", () => {
  console.log("conectado ao banco de dados");
});

const app = express();
routes(app);

export default app;
