import mongoose from "mongoose";
import config from "./config";
import app from "./app";

const dbConnect = async () => {
  await mongoose.connect(config.dbUrl as string);
  app.listen(config.port, () => {
    console.log(`http://localhost:${config.port} DB IS CONNECTED SUCCESSFULLY`);
  });
};
dbConnect();