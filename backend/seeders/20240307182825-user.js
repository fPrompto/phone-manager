'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Usuário Teste da silva',
        username: 'teste',
        email: 'usuario@teste.com',
        password:
          '$2b$10$ElQUGvk/Ua5oyThQZMxQNu4NdDnTE9t8UxQF5aqyQHSWQ94pKUEd26',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
