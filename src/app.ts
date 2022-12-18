import express from "express";
import { config } from "dotenv";
import { join } from "path";
import mongoose, { connect } from "mongoose";
import { authRoutes } from "./routes";

mongoose.set("strictQuery", false);
config({ path: join(__dirname, "..", ".env") });

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.post("/", (req, res) => {
  const { value } = req.body;
  console.log(value);
  return res.status(200).json({ status: 200, message: value });
});

app.get("/", (req, res) => {
  return res.status(200).json({ status: 200, message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connect(process.env.MONGO_URI!).then(() => {
    console.log("Connected to MongoDB");
  });
});
