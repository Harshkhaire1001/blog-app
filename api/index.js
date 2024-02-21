import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB is connected');
}).catch( (err) => {
    console.log(err);
});

app.use('/api/user', userRoutes);

app.use('/api/auth', authRoutes);

app.use( (err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        sucess: false,
        statusCode,
        message,
    });
});

app.listen(2000, () => {
    console.log(`server is running on port 2000`);
});