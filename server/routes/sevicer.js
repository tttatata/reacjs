import express from "express";
import { createSevicer, deleteSevicer, getSevicer, getSevicers, updateSevicer } from "../controllers/sevicer.js";
import Sevicer from "../models/Sevicer.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createSevicer);

// //UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
router.put("/:id", updateSevicer);

// //DELETE
router.delete("/:id", deleteSevicer);

// //GET
router.get("/:id", getSevicer);
///

// //GET ALL
router.get("/", getSevicers);

export default router;
