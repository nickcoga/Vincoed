import "./Header.css";
import logo from "../../assets/logo-restaurant.jpg";

export default function Header() {
  return (
    <header>
      <div className="content">
        <img src={logo} alt="logo.jpg" />
      </div>
    </header>
  );
}
