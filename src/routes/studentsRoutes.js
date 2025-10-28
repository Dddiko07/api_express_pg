import express from 'express';
import {
  getStudents,
  getStudent,
  addStudent,
  editStudent,
  removeStudent
} from '../controllers/studentsController.js';

const router = express.Router();
router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', editStudent);
router.delete('/:id', removeStudent);
export default router;
