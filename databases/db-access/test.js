import sql from 'mssql/msnodesqlv8.js';

const config = {
  // Use the universal {SQL Server} driver name
  connectionString: 'Driver={SQL Server};Server=localhost\\SQLEXPRESS;Database=BOOKS_DB;Trusted_Connection=yes;',
};

try {
  await sql.connect(config);
  const result = await sql.query`SELECT * FROM books`;
  console.log(result.recordset);
} catch (err) {
  console.error("❌ Connection error:", err.message);
} finally {
  await sql.close();
}