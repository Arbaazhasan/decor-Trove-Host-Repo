import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
// Import your other dependencies

dotenv.config();

const createServer = () => {
  const app = express();

  // Middleware
  app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Your routes here
  // app.use("/api/v1", userRouter);
  // Other route configurations...

  // Add a test route
  app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
  });

  // Error handling middleware
  app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ success: false, message });
  });

  return app;
};

// For local development
if (process.env.NODE_ENV !== 'production') {
  const app = createServer();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the function for Vercel
export default createServer;