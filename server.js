import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import './config/passport.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
