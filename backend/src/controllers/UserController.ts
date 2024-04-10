import { Request, Response } from "express";
import { createConnection } from "../../database/connection";


export const createUser = async ( req: Request, res: Response ) => {
    
    const db = await createConnection();

    const { name, email, password, user_type } = req.body;

    try {
        await db.query('INSERT INTO users (name, email, password, user_type) VALUES ($1, $2)', [name, email, password, user_type]);
        res.status(201).json({ message: 'Usuário criado com sucesso' });

    } catch (error) {
        
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    };

}