import { Sequelize } from "sequelize"   

export const sequelize = new Sequelize('BOOKS_DB', null, null, {
  dialect: 'mssql',
  // Use the native Windows driver module
  dialectModulePath: 'sequelize-msnodesqlv8', 
  dialectOptions: {
    connectionString: 'Driver={SQL Server};Server=localhost\\SQLEXPRESS;Database=BOOKS_DB;Trusted_Connection=yes;',
  },
  logging: false, // Set to console.log to see SQL queries in terminal
  define: {
    timestamps: true
  }
});



export default sequelize    