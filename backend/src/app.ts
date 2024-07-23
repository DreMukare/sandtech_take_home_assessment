import express, { Express, Request, Response } from "express";
import routes from "./routes/routes";
import cors from "cors";

const app: Express = express();

app.use(cors());

app.use("/api/v1", routes);

export default app;
