import dotenv from 'dotenv';
import express from "express";
import connectDB from "../config/dbConfig.js"; // Adjust the path as needed

dotenv.config(); 

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    return res.send("You are at HOME");
});

app.get('/about', (req, res) => {
    return res.json({ message: "My name is Saurav" });
});

app.get('/hello', (req, res) => {
    return res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    connectDB();
});
