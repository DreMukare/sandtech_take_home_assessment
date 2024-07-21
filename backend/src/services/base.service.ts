import { Document } from "mongoose";
import MongoRepository from "../repositories/mongo.repo";

export class BaseService<T extends Document, M extends MongoRepository<T>> {
  protected mongoRepository: M;

  constructor(mongoRepository: M) {
    this.mongoRepository = mongoRepository;
  }

  async create(input: Partial<T>) {
    try {
    } catch (err) {}
  }
}
