import express, { Application } from "express";
import cors from "cors";
import router from "./routes/route";
const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5000", "*"],
    methods: ["GET", "PATCH", "DELETE", "POST", "PUT"],
    credentials: true,
  })
);
app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.send("Home Page");
});
export default app;
