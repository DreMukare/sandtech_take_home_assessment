import express, { Express, Request, Response } from "express";
import { initExternalServices } from "./handlers/init-external-services";
import routes from "./routes/routes";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

async function startServer() {
  try {
    await initExternalServices();

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (err: unknown) {
    console.error("Unable to init services: ", err);
  }
}

startServer();
