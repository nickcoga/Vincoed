import "./Header.css";
import logo from "../../assets/logo-restaurant.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();

  const handleCreateRestaurant = () => {
    navigate("/restaurants/new");
  };

  return (
    <header>
      <div className="content">
        <img src={logo} alt="logo.jpg" />
      </div>
      <div className="content__iconNew">
        <i
          className="fa-plus-circle fas fa-plus-circle"
          onClick={handleCreateRestaurant}
        >
          Crear restaurant
        </i>
      </div>
    </header>
  );
}
