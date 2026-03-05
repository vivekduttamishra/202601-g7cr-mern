import { DataTypes, Model } from 'sequelize';
import sequelize from './connect.js';

class Author extends Model { }

Author.init({
  id: {
    type: DataTypes.STRING, // Using slug as ID
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: DataTypes.TEXT,
  photo: DataTypes.STRING
}, { sequelize, modelName: 'author' });

export default Author;