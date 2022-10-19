import Sequelize from "sequelize";

export const sequelize = new Sequelize("vincoeddb", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});
