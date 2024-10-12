import mongoose from 'mongoose';
import DB_URL from './serverConfig.js';

export default async function connectDB() {
    console.log("Connecting to MongoDB with URI:", DB_URL); 
    try {
        await mongoose.connect(DB_URL);
        console.log("MongoDB connected successfully! Hurray");
    } catch (error) {
        console.log("Something went wrong in connecting the MongoDB");
        console.log(DB_URL); // Show undefined if not set
        console.log(error);
    }
}
