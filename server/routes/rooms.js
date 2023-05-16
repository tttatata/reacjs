import express from "express";
import {
    createRoom, deleteRoombyid,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability,
    getRoombyhomeid,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
// router.post("/:homeid", createRoom);
////
router.post("/", createRoom);

router.put("/:id", updateRoom);
//DELETE
router.delete("/:id/:homeid", deleteRoom);
//GET
// router.get("/:homeid", getRoombyhomeid);
router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;