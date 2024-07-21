import { Document, Model } from "mongoose";

class MongoRepository<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(input: Partial<T>): Promise<T> {
    const document = new this.model(input);
    return await document.save();
  }
}

export default MongoRepository;
