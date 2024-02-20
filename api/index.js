import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB is connected');
}).catch( (err) => {
    console.log(err);
});

app.use('/api/user', userRoutes);

app.listen(2000, () => {
    console.log(`server is running on port 2000`);
});