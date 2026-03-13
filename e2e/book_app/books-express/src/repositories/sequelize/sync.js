import sequelize from './connect.js';

 
export async function initDB() {
  try {
    // alter: true updates the tables if you change the model later
    await sequelize.sync({ alter: true });
    console.log(" Tables created/updated successfully.");
  } catch (err) {
    console.error(" Sync failed:", err);
  }
}
