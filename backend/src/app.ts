import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "PATCH", "DELETE", "POST", "PUT"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/api/");

export default app;
