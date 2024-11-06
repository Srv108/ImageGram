import express from 'express';
import { isAuthenticated } from '../../middleWares/authMiddleware.js';
import { createComment, getCommentById } from '../../controller/commentController.js';

const router = express.Router();


router.get('/:id',getCommentById);
router.post('/',isAuthenticated,createComment);

export default router;