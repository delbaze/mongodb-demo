import { MongoClient } from "mongodb";

const uri = "mongodb://user:password@mongo:27017/";
const client = new MongoClient(uri);

export default client;
