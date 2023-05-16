import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newAdmin = new Admin({
            ...req.body,
            password: hash,
        });

        await newAdmin.save();
        res.status(200).send("User has been created.");
    } catch (err) {
        next(err);
    }
};
export const login = async (req, res, next) => {
    try {
        const ad = await Admin.findOne({ email: req.body.email });
        if (!ad) return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            ad.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or username!"));

        const token = jwt.sign(
            { id: ad._id, isAdmin: ad.isAdmin },
            process.env.JWT
        );

        const { password, isAdmin, ...otherDetails } = ad._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
        next(err);
    }
};
