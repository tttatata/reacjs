import Room from "../models/Room.js";

import { createError } from "../utils/error.js";


export const createRoom = async (req, res, next) => {

    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();

        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
};
export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
};
export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                },
            }
        );
        res.status(200).json("Room status has been updated.");
    } catch (err) {
        next(err);
    }
};
export const deleteRoom = async (req, res, next) => {
    const homeId = req.params.homeid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Home.findByIdAndUpdate(homeId, {
                $pull: { rooms: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted.");
    } catch (err) {
        next(err);
    }
};


export const deleteRoombyid = async (req, res, next) => {

    try {
        await Room.findByIdAndDelete(req.params.id);

        res.status(200).json("Room has been deleted.");
    } catch (err) {
        next(err);
    }
};
export const getRoombyhomeid = async (req, res, next) => {
    console.log(req.body);
    const homeId = req.params.homeid;
    try {


        const room = await Room.find({ homeid: homeId });
        console.log(room)
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
};
export const getRoom = async (req, res, next) => {

    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
};
export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};