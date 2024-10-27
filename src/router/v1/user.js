import express from 'express';
import { validate } from '../../validator/zodValidator.js';
import { zodUserSchema } from '../../validator/zodUserSchema.js';
import { createUser } from '../../controller/userController.js';

const router = express.Router();

router.post('/signup',validate(zodUserSchema),createUser);

export default router;