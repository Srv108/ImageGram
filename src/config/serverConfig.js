import dotenv from 'dotenv';

dotenv.config();


export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;

export const AWS_REGION = process.env.AWS_REGION;

export const DB_URL = process.env.DB_TOKEN;

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;