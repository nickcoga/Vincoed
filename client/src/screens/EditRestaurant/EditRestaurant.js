import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantsServices from "../../services/restaurants_services";
import Button from "../../shared/button/Button";
import InputText from "../../shared/inputText/inputText";
import "./EditRestaurant.css";

export default function EditRestaurant({ restaurants }) {
  let navigate = useNavigate();
  const param = useParams();
  const [currentRestaurant, setCurrentRestaurant] = useState(
    restaurants.filter((restaurant) => restaurant.id.toString() === param.id)[0]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const restaunrantService = new RestaurantsServices();
    try {
      await restaunrantService.update(
        param.id,
        currentRestaurant.name,
        currentRestaurant.city,
        currentRestaurant.address,
        currentRestaurant.image
      );
      navigate(-1);
    } catch (error) {
      console.log("Error al actualizar");
    }
  };

  const handleReturn = () => {
    navigate(`/`);
  };

  return (
    <div className="editRestaurant__Container">
      <div className="content__form">
        <form id="form2" onSubmit={handleSubmit}>
          <h3>Edita tu Restaurante</h3>
          <InputText
            required
            type="text"
            placeholder="Nombre"
            value={currentRestaurant.name}
            onChange={(e) =>
              setCurrentRestaurant({
                ...currentRestaurant,
                name: e.target.value,
              })
            }
          />
          <InputText
            required
            type="text"
            placeholder="City"
            value={currentRestaurant.city}
            onChange={(e) =>
              setCurrentRestaurant({
                ...currentRestaurant,
                city: e.target.value,
              })
            }
          />
          <InputText
            required
            type="text"
            placeholder="Address"
            value={currentRestaurant.address}
            onChange={(e) =>
              setCurrentRestaurant({
                ...currentRestaurant,
                address: e.target.value,
              })
            }
          />
          <InputText
            required
            type="text"
            placeholder="Image"
            value={currentRestaurant.image}
            onChange={(e) =>
              setCurrentRestaurant({
                ...currentRestaurant,
                image: e.target.value,
              })
            }
          />
          <div className="content__button">
            <Button type="submit" form="form2">
              Actualizar
            </Button>
          </div>
        </form>
        <Button onClick={handleReturn}>Regresar</Button>
      </div>
    </div>
  );
}
