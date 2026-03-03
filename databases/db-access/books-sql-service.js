import sql from 'mssql/msnodesqlv8.js';

const config = {
  // Use the universal {SQL Server} driver name
  connectionString: 'Driver={SQL Server};Server=localhost\\SQLEXPRESS;Database=BOOKS_DB;Trusted_Connection=yes;',
};

export async function getAllBooks() {

      await sql.connect(config);
      const result = await sql.query`SELECT * FROM books`;
      await sql.close();
      return result.recordset;
}

export async function getBookById(id){
    await sql.connect(config)
    const result = await sql.query`SELECT * from books where id=${id}`
    await sql.close()
    if(result.recordset.length)
        return result.recordset[0]
    else
        throw new Error(`No Book with id : ${id}`)
}


export async function addBook(title, author, price){
    await sql.connect(config)
    const result = await sql.query`INSERT INTO BOOKS(TITLE,AUTHOR,PRICE) VALUES(${title},${author},${price})`
    await sql.close()
    return result.rowsAffected?"Book Added":"Book Add Failed";
}

export async function deleteBook(id){
    await sql.connect(config)
    const result = await sql.query`DELETE FROM BOOKS WHERE ID=${id}`
    await sql.close()
    return result;
}