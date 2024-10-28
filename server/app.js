import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
// Import other dependencies

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PUT"]
}));
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/v1/user/', userRouter);
app.use('/api/v1/product/', productRouter);
app.use('/api/v1/admin/', adminRouter);
app.use('/api/v1/order/', orderDetailsRouter);
app.use('/api/v1/paymets/', paymentRouter);


app.get('/', (req, res) => {
  res.send("Working fine sir");
});


// Cloudinary Configrination

cloudinary.config({
  cloud_name: process.env.Cloudinary_cloud_name,
  api_key: process.env.Cloudinary_api_key,
  api_secret: process.env.Cloudinary_api_secret
});


// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Your routes here
// app.use('/api/v1/users', userRoutes);
// etc...

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});


// Razorpay Instance

export const instance = new Razorpay({
  key_id: process.env.Razorpay_Key_Id,
  key_secret: process.env.Razorpay_Key_Secret,
});



// Development server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;