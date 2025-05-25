import express from "express";
import cors from "cors";
import "dotenv/config";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionRoute from "./routes/transactionRoute.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Hello from the backend"));
app.use("/api/transactions", transactionRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
