/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import User from '../models/User';

export const createUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) return res.status(500).json({ error: 'Email is already taken' });

        const result = await User(req.body).save();

        res.send(result);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};
