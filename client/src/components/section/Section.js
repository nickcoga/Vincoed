import "./Section.css";
import "../card/Card";
import Card from "../card/Card";

export default function Section({ restaurants }) {
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
          />
        ))
      )}
    </section>
  );
}
