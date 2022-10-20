import { Restaurant } from "../models/Restaurant.js";
import { Op } from "sequelize";
import { sequelize } from "../database/database.js";
import { Dish } from "../models/Dish.js";

export const getRestaurants = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const restaurants = await Restaurant.findAll({
        where: {
          name: sequelize.where(
            sequelize.fn("LOWER", sequelize.col("name")),
            "LIKE",
            "%" + name.toLowerCase() + "%"
          ),
        },
      });
      res.json(restaurants);
    } else {
      const restaurants = await Restaurant.findAll();
      res.json(restaurants);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRestaurantName = async (req, res) => {
  const { name } = req.params;

  try {
    const restaurants = await Restaurant.findAll({
      where: {
        name: {
          [Op.like]: "%" + name + "%",
        },
      },
    });

    if (restaurants.length === 0)
      return res.status(404).json({ message: "Restaurant does no exists" });

    res.json(restaurants);
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
