/* eslint-disable func-names */
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import validator from 'validator';

const User = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid');
                }
            },
        },
        password: {
            type: String,
            required: true,
            minLength: [6, 'Password must be at least 6 characters'],
        },
    },
    { timestamps: true },
);
User.pre('save', async function (next) {
    if (this.isModified('password')) {
        const hashpass = await bcrypt.hash(this.password, 10);
        this.password = hashpass;
    }
    next();
});

const model = mongoose.model('User', User);

export default model;
