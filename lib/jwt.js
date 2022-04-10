/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';

export const issueToken = (user) => {
    const id = user._id;

    const payload = {
        email: user.email,
        _id: id,
    };

    const token = jwt.sign(payload, 'thesecrect');
    return `Bearer ${token}`;
};
