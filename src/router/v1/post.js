import express from 'express';
import { uploader } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPost, updatePost } from '../../controller/postController.js';
import { validate } from '../../validator/zodValidator.js';
import { zodPostSchema } from '../../validator/zodPostSchema.js';
import { isAuthenticated } from '../../middleWares/authMiddleware.js';

const router = express.Router();

router.post('/',isAuthenticated,uploader.single('image'),validate(zodPostSchema),createPost);

router.get('/',getAllPost);

router.delete('/:id',isAuthenticated,deletePost);

router.put('/:id',uploader.single('image'),updatePost);



export default router;