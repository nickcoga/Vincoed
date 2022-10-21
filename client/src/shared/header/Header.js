import "./Header.css";
import Phone from "../../assets/ic_phone.svg";
import Llamanos from "../../assets/call_us.svg";
import Logo from "../../assets/logo.jpeg";

export default function Header() {
  return (
    <div className="Navbar">
      <div className="ContainerLeft">
        <img className="img__logo" src={Logo} alt="rimac_logo.svg" />
      </div>

      <div className="ContainerRight">
        <p className="text__dude">
          ¿Deseas realizar una reservación o un pedido?
        </p>
        <img src={Phone} alt="phone.svg" />
        <img src={Llamanos} alt="llamanos.svg" />
        <p className="text__phone">(01) 411 6001</p>
      </div>
    </div>
  );
}
