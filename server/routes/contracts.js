import express from "express";



import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createContract, getseviserbyid, updateContract, deleteContractbyid, getContract, getRoom } from "../controllers/contract.js";

const router = express.Router();

//CREATE
router.post("/", createContract);

// //UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
router.put("/:id",verifyAdmin, updateContract);

// // //DELETE
router.delete("/:id",verifyAdmin, deleteContractbyid);
// router.delete("/:id", verifyAdmin, deleteHotel);
// // //GET
router.get("/getseviserbyid/:id", getseviserbyid);
// ///
router.get("/:id", getContract);
// // router.get("/find/:id", getHotel);
// // //GET ALL
// router.get("/", getHomes);

export default router;
