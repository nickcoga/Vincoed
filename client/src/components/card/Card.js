import "./Card.css";
export default function Card({
  name,
  city,
  address,
  image,
  onRestaurantClick,
  onEditRestaurantClick,
  onDeleteRestaurantClick,
}) {
  return (
    <div className="content__card">
      <img
        src={
          image | (image.length > 25)
            ? image
            : "https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg"
        }
        alt="No_image_avaible"
      />
      <div className="content__text">
        <h3 className="content__title">{name}</h3>
        <p>Ciudad: {city}</p>
        <p>Dirección: {address}</p>
      </div>
      <div className="content__icons">
        <i
          className="fa-utensils fas fa-utensils"
          onClick={onRestaurantClick}
        ></i>
        <i className="fa-edit far fa-edit" onClick={onEditRestaurantClick}></i>
        <i
          className="fa-trash fas fa-trash"
          onClick={onDeleteRestaurantClick}
        ></i>
      </div>
    </div>
  );
}
