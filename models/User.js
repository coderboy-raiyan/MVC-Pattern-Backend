/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
        status: {
            type: String,
            default: 'pending',
        },
        role: {
            type: String,
            default: 'user',
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

// methods
User.methods.isVerified = async function (password) {
    const verified = await bcrypt.compare(password, this.password);
    return verified;
};

User.methods.generateToken = async function () {
    const payload = {
        email: this.email,
        _id: this._id,
    };
    const token = await jwt.sign(payload, process.env.JWT_PRIVATE, {
        expiresIn: process.env.JWT_EXPIRES,
    });
    return `Bearer ${token}`;
};

const model = mongoose.model('User', User);

export default model;
