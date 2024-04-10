import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const createConnection = async () => {

    const client = new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    });

    await client.connect();

    try {
        await client.connect();
        console.log("Conexão com o banco de dados estabelecida!");
        return client;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error; // Propaga o erro para quem chamou a função
    };

};