import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DishesServices from "../../services/dishes_services";
import Button from "../../shared/button/Button";
import InputText from "../../shared/inputText/inputText";
import "./EditDishes.css";

export default function EditDishes({ dishes }) {
  let navigate = useNavigate();
  const param = useParams();
  const [currentDishes, setCurrentDishes] = useState(
    dishes.filter((dish) => dish.id.toString() === param.id)[0]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dishService = new DishesServices();
    try {
      await dishService.update(
        param.id,
        currentDishes.name,
        currentDishes.price,
        currentDishes.image
      );
      navigate(-1);
    } catch (error) {
      console.log("Error al actualizar");
    }
  };

  return (
    <div className="editDishes__Container">
      <form id="form2" onSubmit={handleSubmit}>
        <h3>Edita tu Plato</h3>
        <InputText
          required
          type="text"
          placeholder="Nombre"
          value={currentDishes.name}
          onChange={(e) =>
            setCurrentDishes({ ...currentDishes, name: e.target.value })
          }
        />
        <InputText
          required
          type="text"
          placeholder="Price"
          value={currentDishes.price}
          onChange={(e) =>
            setCurrentDishes({ ...currentDishes, price: e.target.value })
          }
        />
        <InputText
          required
          type="text"
          placeholder="Image"
          value={currentDishes.image}
          onChange={(e) =>
            setCurrentDishes({
              ...currentDishes,
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
    </div>
  );
}
