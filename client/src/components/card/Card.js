import "./Card.css";
export default function Card({ name, city, address, image }) {
  return (
    <div className="content__card">
      <img src={image} alt="" />
      <div className="content__text">
        <h3 className="content__title">{name}</h3>
        <div>Ciudad: {city}</div>
        <div>Dirección: {address}</div>
      </div>
    </div>
  );
}
