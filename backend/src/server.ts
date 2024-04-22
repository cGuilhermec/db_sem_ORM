import express from "express";
// import "../database/runMigrations";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import { createConnection } from "../database/connection";
import cors from "cors";

createConnection();
dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;


app.listen( PORT, () => {
    console.log(`Servidor esta rodando em http://localhost:${PORT}`);
});