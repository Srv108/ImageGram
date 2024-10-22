import express from 'express';
import connectDB from './config/dbConfig.js';
import { createPost } from './controller/postController.js';
import { uploader } from './config/multerConfig.js';

const PORT = 3300;

const app = express();

app.use(express.json());
app.use(express.text());

app.get('/ping/',(req,res) => {
    console.log(req.query);
    console.log(req.body);
    return res.json({ message: 'pong' + " " + req.query.name + " " +req.query.tittle});
})



app.post('/posts',uploader.single('image'),createPost);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})