function DishesServices() {
  if (!DishesServices.instance) {
    DishesServices.instance = this;
  }
  return DishesServices.instance;
}

DishesServices.prototype.show = (id) => {
  return fetch(`/restaurants/${id}/dishes`).then((response) => response.json());
};

DishesServices.prototype.update = (id, name, price, image) => {
  return fetch(`/dishes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name,
      price,
      image,
    }),
  });
};

DishesServices.prototype.create = (name, price, image, restaurantId) => {
  return fetch(`/dishes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name,
      price,
      image,
      restaurantId,
    }),
  });
};

DishesServices.prototype.delete = (id) => {
  return fetch(`/dishes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
};

export default DishesServices;
