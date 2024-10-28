import express from 'express';
import { validate } from '../../validator/zodValidator.js';
import { zodUserSchema } from '../../validator/zodUserSchema.js';
import { createUser, signin } from '../../controller/userController.js';
import { zodSigninSchema } from '../../validator/zodSigninSchema.js';

const router = express.Router();

router.post('/signup',validate(zodUserSchema),createUser);
router.post('/signin',validate(zodSigninSchema),signin);

export default router;