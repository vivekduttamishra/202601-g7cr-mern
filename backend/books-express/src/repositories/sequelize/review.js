import { DataTypes, Model } from 'sequelize';
import sequelize from './connect.js';

class Review extends Model {}

Review.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  reviewer: { type: DataTypes.STRING, allowNull: false },
  title: DataTypes.STRING,
  review: DataTypes.TEXT,
  rating: { type: DataTypes.INTEGER, validate: { min: 1, max: 5 } }
}, { sequelize, modelName: 'review' });

export default Review;