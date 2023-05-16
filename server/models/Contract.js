import mongoose from "mongoose";
const ContractSchema = new mongoose.Schema(
    {


        roomid: {
            type: String,
            required: true,
        },

        userid: {
            type: String,
            required: true,
        },

        sevicers: {
            type: [String]
        },

        isDelete: {
            type: Boolean,
            default: false,

        }


    },
    { timestamps: true }
);

export default mongoose.model("Contract", ContractSchema);