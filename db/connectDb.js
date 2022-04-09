/* eslint-disable camelcase */
import mongoose from 'mongoose';

const db_uri = 'mongodb://localhost:27017/issue-tracker';

const connectDb = async () => {
    try {
        await mongoose.connect(db_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected');
    } catch (err) {
        console.log(err);
    }
};

export default connectDb;
