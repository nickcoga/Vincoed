import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantsServices from "../../services/restaurants_services";
import Button from "../../shared/button/Button";
import InputText from "../../shared/inputText/inputText";
import "./CreateRestaurant.css";

export default function CreateRestaurant() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const restaunrantService = new RestaurantsServices();

    try {
      await restaunrantService.create(name, city, address, image);
      navigate(-1);
    } catch (error) {
      console.log("Error al crear nuevo restaurante");
    }
  };

  return (
    <div className="createRestaurant__Container">
      <form id="form1" onSubmit={handleSubmit}>
        <h3>Registra tu Restaurante</h3>
        <InputText
          required
          type="text"
          placeholder="Ingresa nombre del Restaurante"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          required
          type="text"
          placeholder="Ingresa la ciudad "
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <InputText
          required
          type="text"
          placeholder="Ingresa la dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <InputText
          type="text"
          placeholder="Ingrese URL de imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
