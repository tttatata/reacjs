import Sevicer from "../models/Sevicer.js";

export const createSevicer = async (req, res, next) => {
    const newSevicer = new Sevicer(req.body);

    try {
        const savedSevicer = await newSevicer.save();
        res.status(200).json(savedSevicer);
    } catch (error) {
        next(error)
    }
}
export const updateSevicer = async (req, res, next) => {
    try {
        const updatedSevicer = await Sevicer.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedSevicer);
    } catch (error) {
        next(error)
    }
}
export const deleteSevicer = async (req, res, next) => {

    try {
        await Sevicer.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json("Sevicer has been deleted");
    } catch (error) {
        next(error)
    }
}
export const getSevicer = async (req, res, next) => {
    try {
        const sevicer = await Sevicer.findById(
            req.params.id
        );
        res.status(200).json(sevicer);
    } catch (error) {
        next(error)
    }
}


export const getSevicers = async (req, res, next) => {
    try {
        const sevicers = await Sevicer.find();
        res.status(200).json(sevicers);
    } catch (error) {
        next(error)
    }
}