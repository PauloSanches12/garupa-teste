import { NextFunction, Request, Response } from "express";

export const auth = async (request: Request, response: Response, next: NextFunction) => {    
    const token = request.header("_token");

    if (!token || token !== process.env.TOKEN_SECRET){
        return response.status(403).send("Falha na autenticação!");
    }

    next();
}