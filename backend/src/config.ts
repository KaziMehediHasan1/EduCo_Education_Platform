import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  dbUrl: process.env.EDUCO_DATABASE_URL,
  port: parseInt(process.env.PORT as string) || 5000,
  saltRounds: process.env.PASS_SALT,
  secret:process.env.TOKEN_SCREATE
};
