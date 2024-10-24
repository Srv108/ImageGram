import express from 'express';
import { uploader } from '../../config/multerConfig.js';
import { createPost, getAllPost } from '../../controller/postController.js';

const router = express.Router();

router.post('/',uploader.single('image'),createPost);

router.get('/',getAllPost);



export default router;