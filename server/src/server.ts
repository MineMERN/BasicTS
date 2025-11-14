import express, { Request, Response, NextFunction } from "express";
import {logger} from "./middleware/logger";
import userRouter from "./routes/userRoutes";

const app = express();
app.use(express.json());
app.use(logger)
app.use("/users", userRouter);
const port = 3000;

app.post("/", logger, (req: Request, res: Response) => {
    res.status(200).json({message: "Express with typescript"})
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(500).json({message: "Something went wrong"});
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
