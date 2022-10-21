import "./Section.css";
import "../card/Card";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
import RestaurantsServices from "../../services/restaurants_services";

export default function Section({ restaurants }) {
  let navigate = useNavigate();

  const handleCardRestaurantDishes = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const handleEditResturant = (id) => {
    navigate(`/restaurants/${id}/edit`);
  };

  const handleDeleteCard = (id) => {
    const restaunrantService = new RestaurantsServices();

    try {
      restaunrantService.delete(id);
      navigate(0);
    } catch (error) {}
  };

  return (
    <section className="content__section">
      {!restaurants ? (
        <p> Loading...</p>
      ) : (
        restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            name={restaurant.name}
            city={restaurant.city}
            address={restaurant.address}
            image={restaurant.image}
            onEditRestaurantClick={() => handleEditResturant(restaurant.id)}
            onRestaurantClick={() => handleCardRestaurantDishes(restaurant.id)}
            onDeleteRestaurantClick={() => handleDeleteCard(restaurant.id)}
          />
        ))
      )}
    </section>
  );
}
