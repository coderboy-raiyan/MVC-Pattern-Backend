/* eslint-disable import/prefer-default-export */
export const createUser = async (req, res, next) => {
    try {
        const user = req.body;
        console.log(user.email);
    } catch (err) {
        next(err);
    }
};
