import { Request, Response } from "express";
import * as services from "../services/userServices";

export const createUserController = (req: Request<{}, {}, {name: string, email: string}>, res: Response) => {
    const {name, email} = req.body;
    const user = services.createUser(name, email);
    res.status(201).json(user)
}
