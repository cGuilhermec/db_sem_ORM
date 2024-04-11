import express from "express";
// import "../database/runMigrations";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import { createConnection } from "../database/connection";

createConnection();
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen( PORT, () => {
    console.log(`Servidor esta rodando em http://localhost:${PORT}`);
});