import { Router } from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurantDishes,
  getRestaurantName,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurants.controller.js";

const router = Router();

router.get("/restaurants", getRestaurants);
router.post("/restaurants", createRestaurant);
router.put("/restaurants/:id", updateRestaurant);
router.delete("/restaurants/:id", deleteRestaurant);
router.get("/restaurants/:name", getRestaurantName);
router.get("/restaurants/:id/dishes", getRestaurantDishes);

export default router;
