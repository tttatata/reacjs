import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
    {
        // roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],

        roomNumbers: {
            type: String,
            required: true,

        },
        // homeid: {
        //     type: String,
        //     required: true,
        // },
        title: {
            type: String,
            enum: ["Popular", "High"],
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        contractid: {
            type: String,
            required: false,
        },
        userid: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            default: "Empty",
            enum: ["Busy", "Empty"]


        },
        isDelete: {
            type: Boolean,
            default: false,

        }


    },
    { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);