import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Dish } from "./Dish.js";

export const Restaurant = sequelize.define("restaurants", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
});

Restaurant.hasMany(Dish, {
  foreignKey: "restaurantId",
  sourceKey: "id",
});

Dish.belongsTo(Restaurant, {
  foreignKey: "restaurantId",
  targetId: "id",
});
