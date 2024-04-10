import fs from "fs";
import path from "path";
import { createConnection } from "./connection";

(async () => { // Define uma função assíncrona imediatamente invocada

    const client = await createConnection(); // Estabelece uma conexão com o banco de dados e armazena o cliente retornado

    const fileDatabaseDir = path.join(__dirname, "migrations"); // Define o diretório onde estão localizados os arquivos de migração

    console.log('Iniciando Migrate'+ new Date());

    fs.readdir(fileDatabaseDir, (err, files) => { // Lê o conteúdo do diretório de migrações

        if (err) {
            console.error(err); 
        }
        
        files.forEach(file => { // Para cada arquivo encontrado no diretório

            fs.readFile(path.join(fileDatabaseDir, file), async (err, content) => { // Lê o conteúdo do arquivo

                if (err) { 
                    console.log(err); 
                }

                const runMigrationQuery = content.toString(); // Converte o conteúdo do arquivo para uma string

                await client.query(runMigrationQuery); // Executa a migração no banco de dados

                console.log(content.toString());
            });

        });

        console.log('Terminando Migrate'+ new Date());
    });

})();