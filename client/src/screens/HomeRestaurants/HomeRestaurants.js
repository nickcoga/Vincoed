import React, { useEffect } from "react";
import "./HomeRestaurants.css";
import Filter from "../../components/filter/Filter";
import Section from "../../components/section/Section";
import RestaurantsServices from "../../services/restaurants_services";
import Banner from "../../components/Banner/Banner";
import Header from "../../shared/header/Header";

export default function HomeRestaurant({ restaurants, setRestaurants }) {
  useEffect(() => {
    const restaurantService = new RestaurantsServices();
    restaurantService.show().then((data) => {
      setRestaurants(data);
    });
  }, [setRestaurants]);

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
      <Banner />
      <Filter placeholder={"Busca tu restaurante"} onChange={handleSearch} />
      <Section restaurants={restaurants} />
    </div>
  );
}
