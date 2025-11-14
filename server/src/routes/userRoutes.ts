import { Router, Request, Response } from "express";
import { ApiError } from "../error/APIError";
import { createUserController } from "../controllers/userControllers";

const route = Router();

type createUser = {
  name: string;
  email: string;
};

route.post("/", (req: Request<{}, {}, createUser>, res: Response) => {
  const { name, email } = req.body;
  // if(!name || !email) res.status(400).json({error: "email & password required"})
  if (!name || !email) throw new ApiError("email & password required", 400)
  else {
    res.status(202).json({ id: "abc123", name, email });
  }
});

route.post("/c", createUserController)

export default route;
