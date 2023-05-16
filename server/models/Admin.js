import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,

        },
        identityId: {
            type: String,
            required: false,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

        sex: {
            type: String,
            require: false,
        },

        address: {
            type: String,
            required: false,
        },
        birth: {
            type: String,
            require: false,

        },
        phone: {
            type: String,
            required: false,
        },
        password: {

            type: String,
            required: false,


        },
        isAdmin: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);