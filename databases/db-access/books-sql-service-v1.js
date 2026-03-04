import sql from 'mssql/msnodesqlv8.js';

const _config = {
  // Use the universal {SQL Server} driver name
  connectionString: 'Driver={SQL Server};Server=localhost\\SQLEXPRESS;Database=BOOKS_DB;Trusted_Connection=yes;',
};


const config = {
  // Use the universal {SQL Server} driver name
  server: 'localhost\\SQLEXPRESS',
  database: 'BOOKS_DB',
  options: {
    //windows auth or integrated security
    trustedConnection: true,
    //trust certificate which is not from authority for encryption 
    trustCertificate: true  
  },
  driver: 'SQL Server',

};



export async function getAllBooks() {
  await sql.connect(config);
  const result = await sql.query`SELECT * FROM books`;
  await sql.close();
  console.table(result.recordset);
  return ""
}

export async function getBookById(id) {
  try {

    await sql.connect(config)
    const result = await sql.query`SELECT * from books where id=${id}`
    if (result.recordset.length)
      return result.recordset[0]
    else
      throw new Error(`No Book with id : ${id}`)
  } finally {
    await sql.close()
  }
}


export async function addBook(title, author, price) {
  try {

    await sql.connect(config)
    const result = await sql.query`INSERT INTO BOOKS(TITLE,AUTHOR,PRICE) VALUES(${title},${author},${price})`
    return result.rowsAffected ? "Book Added" : "Book Add Failed";
  } finally {

    await sql.close()
  }
}

export async function deleteBook(id) {
  try {
    await sql.connect(config)
    const result = await sql.query`DELETE FROM BOOKS WHERE ID=${id}`
    return result;

  } finally {
    await sql.close()

  }
}