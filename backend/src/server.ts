import express from "express";
// import "../database/runMigrations";
import dotenv from "dotenv";
import { router } from "./routes/routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen( PORT, () => {
    console.log(`Servidor esta rodando em http://localhost:${PORT}`);
});