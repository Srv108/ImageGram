import express from 'express';
import { uploader } from '../config/multerConfig.js';
import { createPost } from '../controller/postController.js';

const router = express.Router();

router.post('/',uploader.single('image'),createPost);



export default router;