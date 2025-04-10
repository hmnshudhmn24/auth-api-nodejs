import express from 'express';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/profile', protect, (req, res) => {
  res.json({ message: 'User profile', user: req.user });
});

router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin area' });
});

export default router;
