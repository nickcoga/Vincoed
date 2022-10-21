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

RestaurantsServices.prototype.update = (id, name, city, address, image) => {
  return fetch(`/restaurants/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name,
      city,
      address,
      image,
    }),
  });
};

RestaurantsServices.prototype.create = (name, city, address, image) => {
  return fetch(`/restaurants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name,
      city,
      address,
      image,
    }),
  });
};

RestaurantsServices.prototype.delete = (id) => {
  return fetch(`restaurants/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
};

export default RestaurantsServices;
