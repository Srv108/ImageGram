import express from 'express';
import connectDB from './src/config/dbConfig.js';
import apiRouter from './src/router/apiRouter.js';
import { isAuthenticated } from './src/middleWares/authMiddleware.js';
// import bodyParser from 'body-parser';
import { options } from './src/utils/swaggerDocs.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { rateLimit } from 'express-rate-limit';

const PORT = 3300;

const app = express();

const limiter = rateLimit({
    windowMs: 0.5 * 60 * 1000,
    limit: 5,
    message: "You have crossed your limit !"
})

app.use(limiter);

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));


const swaggerdoc = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerdoc));

app.use('/api',apiRouter);


app.get('/ping',(req,res) => {
    console.log(req.query);
    console.log(req.body);
    console.log(req.user);
    return res.json({ message: 'Hui Hui!'});
})



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})