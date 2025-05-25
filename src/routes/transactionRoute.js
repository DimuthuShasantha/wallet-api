import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getSummary,
  getTransactions,
  getUserTransactions,
} from "../controllers/transactionController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getTransactions);
router.get("/:userId", getUserTransactions);
router.get("/summary/:userId", getSummary);
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);

export default router;
