import { DataTypes, Model } from 'sequelize';
import sequelize from './connect.js';

class Book extends Model { }

Book.init({
  id: {
    type: DataTypes.STRING, // Using slug as ID
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  details: DataTypes.TEXT,
  cover: DataTypes.STRING
}, { sequelize, modelName: 'book' });

export default Book;