import express from 'express';
import connectDB from './src/config/dbConfig.js';
import apiRouter from './src/router/apiRouter.js';
import { isAuthenticated } from './src/middleWares/authMiddleware.js';
// import bodyParser from 'body-parser';
import { options } from './src/utils/swaggerDocs.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const PORT = 3300;

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));


const swaggerdoc = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerdoc));

app.use('/api',apiRouter);


app.get('/ping',isAuthenticated,(req,res) => {
    console.log(req.query);
    console.log(req.body);
    console.log(req.user);
    return res.json({ message: 'Hui Hui!'});
})



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})