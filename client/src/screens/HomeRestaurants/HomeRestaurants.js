import React, { useEffect, useState } from "react";
import "./HomeRestaurants.css";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import Section from "../../components/section/Section";
import RestaurantsServices from "../../services/restaurants_services";

export default function HomeRestaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const restaurantService = new RestaurantsServices();
    restaurantService.show().then((data) => {
      setRestaurants(data);
    });
  }, []);

  const handleSearch = async (e) => {
    const newRestaurant = e.target.value;
    const restaurantService = new RestaurantsServices();

    if (newRestaurant) {
      restaurantService.show(newRestaurant).then((data) => {
        setRestaurants(data);
      });
    }
  };

  return (
    <div className="container">
      <Header />
      <Filter placeholder={"Busca tu restaurante"} onChange={handleSearch} />
      <Section restaurants={restaurants} />
    </div>
  );
}
