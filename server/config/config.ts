import dotenv from "dotenv";

dotenv.config();

export const DB_CONN_STRING = process.env.DB_CONN_STRING || "";
export const DB_NAME = process.env.DB_NAME || "";

export const mongo = {
  DB_CONN_STRING,
  DB_NAME,
};
