//import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/project',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})



// const URI = "mongodb://localhost/project"
// const connectDB = async () => {
//     try {
//         const connection = await mongoose.connect(
//             URI,
//             {
//               //  useCreateIndex: true,
//                 useNewUrlParser: true,
//                // useFindAndModify: false,
//                 useUnifiedTopology: true
//             }
//         )
//         console.log(`MongoDB connected: ${connection.connection.host}`);
//     } catch (error) {
//         console.log(`MongoDB error when connecting: ${error}`);
//     }
// }
// connectDB()


// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });
app.use('/api/uploads',uploadRouter)
app.use('/api/users', userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal',(req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})
app.get('/api/config/google', (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || '');
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('/', (req, res) => {
  res.send('Server is ready');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});