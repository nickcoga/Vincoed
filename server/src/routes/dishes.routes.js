import { Router } from "express";
import {
  createDishes,
  deleteDishes,
  getDishes,
  getDishesName,
  updateDishes,
} from "../controllers/dishes.controller.js";

const router = Router();

router.get("/dishes", getDishes);
router.post("/dishes", createDishes);
router.put("/dishes/:id", updateDishes);
router.delete("/dishes/:id", deleteDishes);
router.get("/dishes/:name", getDishesName);

export default router;
