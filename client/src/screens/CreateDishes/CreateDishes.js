import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DishesServices from "../../services/dishes_services";
import Button from "../../shared/button/Button";
import InputText from "../../shared/inputText/inputText";
import "./CreateDishes.css";

export default function CreateDishes() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [restaurantId, setRestaurantId] = useState();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dishesService = new DishesServices();

    try {
      await dishesService.create(name, price, image, restaurantId);
      navigate(-1);
    } catch (error) {
      console.log("Error al crear nuevo plato");
    }
  };

  return (
    <div className="createDishes__Container">
      <form id="form1" onSubmit={handleSubmit}>
        <h3>Registra tu Plato</h3>
        <InputText
          required
          type="text"
          placeholder="Ingresa nombre del Plato"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          required
          type="text"
          placeholder="Ingresa precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <InputText
          required
          type="text"
          placeholder="Ingrese URL de imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <InputText
          type="text"
          placeholder="Ingrese codigo de restaurant"
          value={restaurantId}
          onChange={(e) => setRestaurantId(e.target.value)}
        />
        <div className="content__button">
          <Button type="submit" form="form1">
            Crear
          </Button>
        </div>
      </form>
    </div>
  );
}
