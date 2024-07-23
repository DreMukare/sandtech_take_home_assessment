import mongoose from "mongoose";
import app from "../app";
import supertest from "supertest";
import { DB_CONN_STRING } from "../config/config";
import { getCurrentDateAsString } from "../utils/helperFuncs/date";

beforeEach(async () => {
  await mongoose.connect(DB_CONN_STRING);
});

afterEach(async () => {
  await mongoose.connection.close();
});

const currentDate = getCurrentDateAsString();

describe("GET /api/v1/weather", () => {
  describe("when given an invalid string", () => {
    test("should respond with 400 status code", async () => {
      const response = await supertest(app).get(
        "/api/v1/weather?date=somedate"
      );
      expect(response.statusCode).toBe(400);
    });
  });

  describe("given a date string", () => {
    test("should respond with 200 status code", async () => {
      const response = await supertest(app).get(
        `/api/v1/weather?date=${currentDate}`
      );
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    // test("should respond with 500 status code if no data is found", async () => {
    //   const response = await supertest(app).get(
    //     "/api/v1/weather?date=2022-01-01"
    //   );
    //   expect(response.statusCode).toBe(500);
    // });
  });
});
