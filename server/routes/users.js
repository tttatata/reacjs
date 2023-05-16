import express from "express";
import {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    getUserbyPhone,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

router.post("/", createUser);
//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

/////
router.get("/:phone", getUserbyPhone);
//GET ALL

router.get("/", getUsers);

export default router;