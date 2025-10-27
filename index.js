import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './src/routes/studentsRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rute utama untuk testing
app.get('/', (req, res) => {
  res.send('API berjalan dengan baik 🚀');
});

// Gunakan rute mahasiswa
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di port ${PORT}`);
});
