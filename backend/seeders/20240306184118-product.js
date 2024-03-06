'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Products', [
      // {
      //   name: '',
      //   brand: '',
      //   model: '',
      //   price: 0,
      //   color: '',
      // },
      {
        name: 'Xiaomi Redmi 9s',
        brand: 'Xiaomi',
        model: 'Redmi 9s',
        price: 1279,
        color: 'sky blue',
      },
      {
        name: 'Samsung Galaxy Note 10 Plus',
        brand: 'Samsung',
        model: 'Galaxy Note 10 Plus',
        price: 7999,
        color: 'black',
      },
      {
        name: 'Apple Iphone 14 Pro',
        brand: 'Apple',
        model: 'Iphone 14 Pro',
        price: 12999,
        color: 'white',
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
    await queryInterface.bulkDelete('Products', null, {});
  },
};
