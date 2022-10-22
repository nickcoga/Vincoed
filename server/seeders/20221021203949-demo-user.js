"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.buklInsert("restaurants", [
      {
        id: 1,
        name: "Polleria Paredes",
        city: "Lima",
        address: " Av. Universitaria 2000",
        image: "https://10619-2.s.cdn12.com/rests/original/110_505756683.jpg",
      },
      {
        id: 2,
        name: "Polleria Norkys",
        city: "Lima",
        address: "Av. Metropolitana 2000",
        image:
          "https://openplaza.com.pe/sites/default/files/Peru/Chiclayo/Tiendas/Principal/NORKYS.jpg",
      },
      {
        id: 3,
        name: "Embarcadero 41",
        city: "Lima",
        address: "Jr. Ucayali 149 15001 Perú",
        image:
          "https://elcomercio.pe/resizer/TIMXeKpYcmEHHdMWbRygPwzt5ok=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2LTAEYK4MFH5BLLZAWJQQHWXQM.jpg",
      },
      {
        id: 4,
        name: "Poke 51",
        city: "Lima",
        address: "Av. Universitaria 2000",
        image:
          "https://d212obkyu7t4mb.cloudfront.net/data/Gallery/11670/11670.jpg",
      },
      {
        id: 5,
        name: "Restaurante Test 1",
        city: "Ciudad Test 1",
        address: "Dirección Test 1",
        image: "Image Test1",
      },
      {
        id: 6,
        name: "Restaurante Test 2",
        city: "Ciudad Test 2",
        address: "Dirección Test 2",
        image: "Image Test2",
      },
    ]);

    await queryInterface.buklInsert("dishes", [
      {
        id: 1,
        name: "Pollo a la Brasa",
        price: 50,
        image:
          "https://stakeholders.com.pe/wp-content/uploads/2022/07/wklku6yqtjezjlswm3cuzz37aa.jpg",
        restaurantId: 1,
      },
      {
        id: 2,
        name: "Pollo a Parrilla",
        price: 50,
        image:
          "https://www.clarin.com/img/2022/03/21/LeCTEz82B_1200x630__1.jpg",
        restaurantId: 1,
      },
      {
        id: 3,
        name: "Arroz con Mariscos",
        price: 35,
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/17/9e/7e/30/exquisito-arroz-cremoso.jpg",
        restaurantId: 3,
      },
      {
        id: 4,
        name: "Makis",
        price: 40,
        image:
          "https://tofuu.getjusto.com/orioneat-prod/AtQcvzZKG4uzDY7qR-CALIFORNIA%20CLASSIC%20(1).JPG",
        restaurantId: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
