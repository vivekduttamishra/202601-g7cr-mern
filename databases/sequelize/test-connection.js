import { Sequelize } from 'sequelize';
import sql from 'mssql/msnodesqlv8.js'; // Your working import

const sequelize = new Sequelize('BOOKS_DB', null, null, {
  dialect: 'mssql',
  // Tell Sequelize to use the high-level module you already configured
  dialectModule: sql, 
  dialectOptions: {
    // Use the exact connection string you verified
    connectionString: 'Driver={SQL Server};Server=localhost\\SQLEXPRESS;Database=BOOKS_DB;Trusted_Connection=yes;',
    options: {
      trustedConnection: true,
      trustServerCertificate: true
    }
  }
});

// Test the connection
try {
  await sequelize.authenticate();
  console.log('Sequelize connected successfully using Windows Auth!');
} catch (error) {
  console.error('Sequelize connection failed:', error);
}