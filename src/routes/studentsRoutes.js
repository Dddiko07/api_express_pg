import express from 'express';
import {
  getStudents,
  getStudent,
  addStudent,
  editStudent,
  removeStudent
} from '../controllers/studentsController.js';

const router = express.Router();

// GET semua mahasiswa
router.get('/', getStudents);

// GET mahasiswa berdasarkan ID
router.get('/:id', getStudent);

// POST tambah mahasiswa baru
router.post('/', addStudent);

// PUT ubah data mahasiswa
router.put('/:id', editStudent);

// DELETE hapus mahasiswa
router.delete('/:id', removeStudent);

export default router;
