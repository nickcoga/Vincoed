import "./CardDishes.css";
export default function CardDishes({
  name,
  price,
  image,
  onEditDishes,
  onDeleteDishes,
}) {
  return (
    <div className="container__cardDishes">
      <img
        src={
          image | (image.length > 25)
            ? image
            : "https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg"
        }
        alt="No_image_avaible"
      />
      <div className="content__text">
        <h1 className="content__title">{name} </h1>
        <p>Precio: S./{price} </p>
        <div className="content__icons">
          <i className="fa-edit far fa-edit" onClick={onEditDishes}></i>
          <i className="fa-trash fas fa-trash" onClick={onDeleteDishes}></i>
        </div>
      </div>
    </div>
  );
}
