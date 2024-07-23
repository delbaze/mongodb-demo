import { MongoClient } from "mongodb";

// const uri = "mongodb://user:password@mongo:27017/";
const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export default client;
