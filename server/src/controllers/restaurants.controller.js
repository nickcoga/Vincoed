import { Restaurant } from "../models/Restaurant.js";
import { Op } from "sequelize";
import { Dish } from "../models/Dish.js";

export const getRestaurants = async (req, res) => {
  try {
    const restaurant = await Restaurant.findAll();
    res.json(restaurant);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRestaurantName = async (req, res) => {
  const { name } = req.params;

  try {
    const restaurant = await Restaurant.findAll({
      where: {
        name: {
          [Op.like]: "%" + name + "%",
        },
      },
    });

    if (!restaurant || [])
      return res.status(404).json({ message: "Restaurant does no exists" });

    res.json(restaurant);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRestaurant = async (req, res) => {
  const { name, city, address, image } = req.body;

  try {
    const newRestaurant = await Restaurant.create({
      name,
      city,
      address,
      image,
    });

    res.json(newRestaurant);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, city, address, image } = req.body;

    const restaurant = await Restaurant.findByPk(id);
    restaurant.name = name;
    restaurant.city = city;
    restaurant.address = address;
    restaurant.image = image;

    await restaurant.save();

    res.json(restaurant);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    await Restaurant.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRestaurantDishes = async (req, res) => {
  const { id } = req.params;
  const dishes = await Dish.findAll({ where: { restaurantId: id } });
  res.json(dishes);
};
