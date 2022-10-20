import { Dish } from "../models/Dish.js";

export const getDishes = async (req, res) => {
  try {
    const dish = await Dish.findAll();
    res.json(dish);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDishes = async (req, res) => {
  const { name, prices, image, restaurantId } = req.body;

  try {
    const newDish = await Dish.create({
      name,
      prices,
      image,
      restaurantId,
    });

    res.json(newDish);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDishesName = async (req, res) => {
  const { name } = req.params;

  try {
    const dish = await Dish.findAll({
      where: {
        name: {
          [Op.like]: "%" + name + "%",
        },
      },
    });

    if (!dish || [])
      return res.status(404).json({ message: "Dish does no exists" });

    res.json(dish);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDishes = async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await Dish.findOne({ where: { id } });
    dish.set(req.body);
    await dish.save();
    return res.json(dish);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDishes = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Dish.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
