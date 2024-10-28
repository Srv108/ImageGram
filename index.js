import express from 'express';
import connectDB from './src/config/dbConfig.js';
import apiRouter from './src/router/apiRouter.js';
import { isAuthenticated } from './src/middleWares/authMiddleware.js';
// import bodyParser from 'body-parser';

const PORT = 3300;

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.get('/ping',isAuthenticated,(req,res) => {
    console.log(req.query);
    console.log(req.body);
    console.log(req.user);
    return res.json({ message: 'Hui Hui!'});
})

app.use('/api',apiRouter);

// app.post('/posts',uploader.single('image'),createPost);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})