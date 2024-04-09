import { Pool } from "pg";

export const createConnection = async () => {

    const client = new Pool({
        host: "localhost",
        user: "postgres",
        password: "1234",
        database: "sem_orm",
    });

    await client.connect();

    try {
        await client.connect();
        console.log("Conexão com o banco de dados estabelecida!");
        return client;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error; // Propaga o erro para quem chamou a função
    }

}