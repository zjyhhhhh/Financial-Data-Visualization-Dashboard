import express from "express";
import Transcation from "../models/Transcation.js";

const router = express.Router();

router.get("/transcations", async (req, res) => {
  try {
    const transcations = await Transcation.find().limit(50).sort({ createOn: -1 });
    res.status(200).json(transcations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
