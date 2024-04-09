import express from "express";
import "./database/runMigrations";

const app = express();
const PORT = 3001;

app.listen( PORT, () => {
    console.log(`Servidor esta rodando em http://localhost${PORT}`);
});