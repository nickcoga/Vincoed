import express from "express";
import restaurantsRoutes from "./routes/restaurants.routes.js";
import dishesRoutes from "./routes/dishes.routes.js";

const app = express();

//midelwares
app.use(express.json());
app.use(restaurantsRoutes);
app.use(dishesRoutes);

export default app;
