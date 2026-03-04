const { Sequelize } = require('sequelize');
const mssql = require('mssql'); // Use the package that already works for you

const sequelize = new Sequelize('BOOKS_DB', null, null, {
  dialect: 'mssql',
  // Pass the working mssql object directly
  dialectModule: mssql, 
  dialectOptions: {
    connectionString: 'Driver={SQL Server};Server=localhost\\SQLEXPRESS;Database=BOOKS_DB;Trusted_Connection=yes;',
    options: {
      trustedConnection: true,
      trustServerCertificate: true
    }
  }
});

// Test
sequelize.authenticate()
  .then(() => console.log('Success!'))
  .catch(err => console.error('Error:', err));