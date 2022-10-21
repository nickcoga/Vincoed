function DishesServices() {
  if (!DishesServices.instance) {
    DishesServices.instance = this;
  }
  return DishesServices.instance;
}

DishesServices.prototype.show = (id) => {
  return fetch(`/restaurants/${id}/dishes`).then((response) => response.json());
};

export default DishesServices;
