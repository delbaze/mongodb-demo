import { Collection, Db, InsertOneResult } from "mongodb";
import client from "../lib/mongodb";

export class LogService {
  database: Db;
  collection: Collection;
  constructor() {
    this.database = client.db("application_demo");
    this.collection = this.database.collection("logs");
  }
  async addToLog(data: any): Promise<InsertOneResult<Document>> {
    const result = await this.collection.insertOne(data);
    return result;
  }
}
