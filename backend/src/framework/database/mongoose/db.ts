import mongoose, { Connection } from "mongoose";
import { mongo } from "../../../config/config";

let mongoClient: Connection | null = null;

async function connect(
  dbConnectionString: string,
  dbName: string
): Promise<void> {
  return new Promise((res, rej) => {
    mongoose
      .connect(dbConnectionString, { dbName })
      .then(() => {
        mongoClient = mongoose.connection;
        console.log("Mongoose connected to db");
        res();
      })
      .catch((err: mongoose.Error) => {
        console.error("Mongoose connection error: ", err);
        rej(err);
      });
  });
}

async function init(
  dbConnectionString: string = mongo.DB_CONN_STRING,
  dbName: string = mongo.DB_NAME
): Promise<void> {
  try {
    await connect(dbConnectionString, dbName);
    console.log("Mongodb initialized");
  } catch (err: unknown) {
    if (err instanceof mongoose.Error) {
      console.error("Error connecting to mongodb: ", err);
    } else {
      console.error("Unexpected db connection init error: ", err);
    }
    throw err;
  }
}

async function closeConnection(): Promise<void> {
  if (mongoClient) {
    await mongoose.disconnect();
    console.log("Mongoose connection disconnected");
  } else {
    console.log("No connection found to close");
  }
}

export { init, closeConnection };
