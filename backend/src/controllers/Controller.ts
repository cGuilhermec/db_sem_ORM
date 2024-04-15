import { Response } from "express";

export class Controller {

    protected  async handleRequest(
        promise: Promise<any>,
        successStatusCode: number,
        errorStatusCode: number,
        successMessage: string,
        errorMessage: string,
        res: Response,
    ) {
        try {
            const result = await promise;
            res.status(successStatusCode).json({ message: successMessage, data: result});
        } catch (error) {
            console.log("Error", error);
            res.status(errorStatusCode).json({ message: errorMessage });
        };
    };

};