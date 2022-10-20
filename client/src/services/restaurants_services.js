function RestaurantsServices() {
  if (!RestaurantsServices.instance) {
    RestaurantsServices.instance = this;
  }
  return RestaurantsServices.instance;
}

RestaurantsServices.prototype.show = (name) => {
  if (name) {
    return fetch(`restaurants?name=${name}`).then((response) =>
      response.json()
    );
  } else {
    return fetch("/restaurants").then((response) => response.json());
  }
};

export default RestaurantsServices;
