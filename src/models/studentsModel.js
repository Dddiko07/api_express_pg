import pool from '../config/db.js';

export const createStudent = async (name, major, age) => {
  const result = await pool.query(
    'INSERT INTO students (name, major, age) VALUES ($1, $2, $3) RETURNING *',
    [name, major, age]
  );
  return result.rows[0];
};

export const getAllStudents = async () => {
  const result = await pool.query('SELECT * FROM students ORDER BY id ASC');
  return result.rows;
};

export const getStudentById = async (id) => {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return result.rows[0];
};

export const updateStudent = async (id, name, major, age) => {
  const result = await pool.query(
    'UPDATE students SET name=$1, major=$2, age=$3 WHERE id=$4 RETURNING *',
    [name, major, age, id]
  );
  return result.rows[0];
};

export const deleteStudent = async (id) => {
  // Hanya menjalankan query DELETE, tidak perlu mengembalikan data
  await pool.query('DELETE FROM students WHERE id=$1', [id]);
};
