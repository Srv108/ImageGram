import express from 'express';
import versionRouter from './v1/version.js';


const router = express.Router();

router.use('/v1',versionRouter);

export default router;