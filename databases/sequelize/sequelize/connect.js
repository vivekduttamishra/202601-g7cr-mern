import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config(); //this will read all the enviorn variable and append to process.env



const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        instanceName: process.env.DB_INSTANCE,
        trustServerCertificate: true, // Required for local self-signed certs
      }
    },
    logging: false
  }
);

export default sequelize;