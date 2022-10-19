import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Dish = sequelize.define("dishes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING,
  },
});
