'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblAtendimento', [
      {
        tipo: "Presencial",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipo: "Remoto",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblAtendimento', null, {});

  }
};
