import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const _dirname = path.resolve();

app.use(express.json());

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(_dirname, '../frontend/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '../frontend/dist/index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
})