import Contract from "../models/Contract.js";

import Sevicer from "../models/Sevicer.js";

export const createContract = async (req, res, next) => {
    const { roomid, userid, sevicers } = req.body;

    try {
        const preContract = await Contract.findOne({ userid: userid });
        const ContractDL = await Contract.findOne({ isDelete: false });
        if (preContract && ContractDL) {
            res.status(404).json("người dùng đã được thêm")
        } else {
            const addContract = new Contract({
                roomid, userid, sevicers
            });

            await addContract.save();
            res.status(200).json(addContract);
            console.log(addContract);
        }

    } catch (error) {
        next(error)
    }
}
export const getRoom = async (req, res, next) => {
    const { id } = req.body;
    try {
        const getcontract = await Contract.findOne({ _id: id })
        res.status(200).json(getcontract);
    } catch (error) {
        next(error)
    }
}

export const updateContract = async (req, res, next) => {
    try {
        const updatedContract = await Contract.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedContract);
    } catch (err) {
        next(err);
    }
};
export const deleteContractbyid = async (req, res, next) => {

    try {
        await Contract.findByIdAndDelete(req.params.id);

        res.status(200).json("Ct has been deleted.");
    } catch (err) {
        next(err);
    }
};
// export const getHome = async (req, res, next) => {
//     try {
//         const home = await Home.findById(
//             req.params.id
//         );
//         res.status(200).json(home);
//     } catch (error) {
//         next(error)
//     }
// }

export const getContract = async (req, res, next) => {

    try {
        const contract = await Contract.findById(req.params.id);
        res.status(200).json(contract);
    } catch (err) {
        next(err);
    }
};
export const getseviserbyid = async (req, res, next) => {

    try {
        const contract = await Contract.findById(req.params.id);

        const map1 = contract.sevicers.map(x => x);
        console.log(map1)
        const sevicer = await Sevicer.find({ _id: map1 });
        res.status(200).json(sevicer);

    } catch (err) {
        next(err);
    }

}
