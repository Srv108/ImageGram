import express from 'express';
import { validate } from '../../validator/zodValidator.js';
import { zodUserSchema } from '../../validator/zodUserSchema.js';
import { createUser, signin } from '../../controller/userController.js';
import { zodSigninSchema } from '../../validator/zodSigninSchema.js';

const router = express.Router();

/**
 * @swagger
 * /users/signup:
 *  post:
 *      summary: Signup a new user
 *      description: Signup a new user
 * 
 */
router.post('/signup',validate(zodUserSchema),createUser);


/**
 * @swagger
 * /users/signin:
 *  post:
 *      summary: Signin a new user
 *      description: Signin a new user
 * 
 */
router.post('/signin',validate(zodSigninSchema),signin);

export default router;