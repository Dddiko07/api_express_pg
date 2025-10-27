import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'kampus',
  password: process.env.DB_PASSWORD || 'Uswa081004',
  port: process.env.DB_PORT || 5432,
});

pool.connect()
  .then(() => console.log('✅ Terhubung ke PostgreSQL'))
  .catch((err) => console.error('❌ Gagal koneksi ke PostgreSQL:', err));

export default pool;
