import mongoose from "mongoose";
const SevicerSchema = new mongoose.Schema(
    {


        sevicerName: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        keyword: {
            type: String,
            required: true,

        },
        isDelete: {
            type: Boolean,
            default: false,

        }

    },
    { timestamps: true }
);

export default mongoose.model("Sevicer", SevicerSchema);