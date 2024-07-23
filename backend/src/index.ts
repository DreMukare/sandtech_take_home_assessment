import { initExternalServices } from "./handlers/init-external-services";
import app from "./app";

const port = process.env.PORT || 3000;

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
