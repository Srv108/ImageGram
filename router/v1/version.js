import express from 'express';
import postRouter from './post.js';

const router = express.Router();

router.use('/posts',postRouter);


export default router;