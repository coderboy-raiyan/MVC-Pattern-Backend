/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import User from '../models/User';

export const createUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) return res.status(500).send({ message: 'Email is already taken' });

        await User(req.body).save();

        res.status(200).send({ message: 'Registration successful' });
    } catch (err) {
        res.status(500).json({ message: 'Invalid user details' });
    }
};

export const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(500).json({ message: 'Email not found' });

        const verified = await user.isVerified(req.body.password);
        const token = await user.generateToken();

        if (verified) {
            user.status = 'verified';
            await user.save();
            const userInfo = {
                email: user.email,
            };
            res.send({ status: user.status, user: userInfo, token });
        } else {
            res.status(500).json({ message: 'Invalid details' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Invalid User details' });
    }
};
