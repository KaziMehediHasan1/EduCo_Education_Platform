import mongoose from "mongoose";
import config from "./config";
import express from "express";
const app = express();

const dbConnect = async () => {
  await mongoose.connect(config.dbUrl as string);
  await app.listen(() => {
    console.log(`${config.port},DB IS CONNECTED SUCCESSFULLY`);
  });
};
dbConnect();
