import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,

        },
        identityId: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

        sex: {
            type: String,
            require: true,
        },
        img: {
            type: String,
        },
        address: {
            type: String,
            required: true,
        },
        birth: {
            type: String,
            require: true,

        },
        phone: {
            type: String,
            required: true,
        },
        password: {

            type: String,
            required: false,


        },

        isDelete: {
            type: Boolean,
            default: false,

        }
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);