const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mssql',
  // DO NOT use dialectModule. Use dialectModulePath to load the adapter.
  dialectModulePath: 'sequelize-msnodesqlv8', 
  dialectOptions: {
    // Exact connection string you verified in your SqlManager
    connectionString: 'Driver={SQL Server};Server=localhost\\SQLEXPRESS;Database=BOOKS_DB;Trusted_Connection=yes;'
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

async function test() {
  try {
    await sequelize.authenticate();
    console.log('Connection successful!');
  } catch (err) {
    console.error('Unable to connect:', err);
  }
}
test();