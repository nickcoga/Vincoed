import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDishes from "../../components/cardDishes/CardDishes";
import DishesServices from "../../services/dishes_services";
import Header from "../../shared/header/Header";
import "./Dishes.css";

export default function Dishes() {
  const [dishes, setDishes] = useState([]);
  console.log(dishes);

  const params = useParams();

  useEffect(() => {
    const dishesService = new DishesServices();
    dishesService.show(params.id).then((data) => {
      console.log(data);
      setDishes(data);
    });
  }, [params]);

  return (
    <div className="container__Dishes">
      {/* <div className="content__Header">
        <Header />
      </div> */}
      <Header />
      <div className="content__Dishes">
        <div className="container__Details">
          <div className="content__Details">
            <h3>Detalles</h3>
            <h4>Tipos de Comida</h4>
            <p>Peruana, Latina, Carnes</p>
            <h4>Dietas especiales</h4>
            <p>Apto para vegetarianos, Opciones veganas, Opciones sin gluten</p>
            <h4>Comidas</h4>
            <p>Almuerzo, Cena, Brunch, Bebidas</p>
          </div>
          <div className="content__Details">
            <h3>Calificaciones y Opiniones</h3>
            <span>
              <h4>5.0</h4>
              <p>1,366 opiniones</p>
            </span>
            <h3>N° 9 de 2420, restaurants en Lima</h3>
            <h4>Calificaciones</h4>
            <p>Comida</p>
            <p>Servicio</p>
            <p>Calidad</p>
          </div>
        </div>
        <div className="content__Cards">
          {!dishes ? (
            <p>loading...</p>
          ) : (
            dishes.map((dish, i) => (
              <CardDishes
                name={dish.name}
                price={dish.price}
                image={dish.image}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
