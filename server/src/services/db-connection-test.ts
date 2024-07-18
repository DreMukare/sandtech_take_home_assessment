import { mongo } from "../config/config";
import { init } from "../framework/database/mongoose/db";

export async function testDbConnection() {
  try {
    await init(mongo.DB_CONN_STRING, mongo.DB_NAME);
    console.log("Successfully connected to db");
  } catch (err: unknown) {
    console.log("Error connecting to db: ", err);
    throw err;
  }
}
