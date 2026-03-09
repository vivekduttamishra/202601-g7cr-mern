import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config(); //this will read all the enviorn variable and append to process.env



const sequelize = new Sequelize(
  process.env.SQUELIZE_DB_NAME, 
  process.env.SQUELIZE_DB_USER, 
  process.env.SQUELIZE_DB_PASS, 
  {
    host: process.env.SQUELIZE_DB_HOST,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        instanceName: process.env.SQUELIZE_DB_INSTANCE,
        trustServerCertificate: true, // Required for local self-signed certs
      }
    },
    logging: false
  }
);

export default sequelize;