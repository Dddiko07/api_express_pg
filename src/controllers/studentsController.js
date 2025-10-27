import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../models/studentsModel.js';

// GET /api/students
export const getStudents = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    console.error(error); // Penting untuk debugging
    res.status(500).json({ message: 'Error retrieving data' });
  }
};

// GET /api/students/:id
export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await getStudentById(id);
    
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }
    
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching student' });
  }
};

// POST /api/students
export const addStudent = async (req, res) => {
  try {
    const { name, major, age } = req.body;
    // Pengecekan sederhana agar data tidak kosong
    if (!name || !major || !age) {
        return res.status(400).json({ message: 'Name, major, and age are required.' });
    }
    const newStudent = await createStudent(name, major, age);
    res.status(201).json(newStudent); // 201 Created
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating student' });
  }
};

// PUT /api/students/:id
export const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, major, age } = req.body;
    
    const updatedStudent = await updateStudent(id, name, major, age);
    
    if (!updatedStudent) {
        // Jika tidak ada baris yang diperbarui (ID tidak ditemukan)
        return res.status(404).json({ message: 'Student not found or failed to update' });
    }
    
    res.json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating student' });
  }
};

// DELETE /api/students/:id
export const removeStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteStudent(id); // Asumsi model sudah mengecek dan tidak ada error
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting student' });
  }
};