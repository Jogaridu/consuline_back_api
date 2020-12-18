'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblFilialServico', [
      {
        FilialId: 1,
        ServicoId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 1,
        ServicoId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 1,
        ServicoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        FilialId: 2,
        ServicoId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 2,
        ServicoId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 2,
        ServicoId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        FilialId: 3,
        ServicoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 3,
        ServicoId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 3,
        ServicoId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        FilialId: 4,
        ServicoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 4,
        ServicoId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 4,
        ServicoId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        FilialId: 5,
        ServicoId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 5,
        ServicoId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FilialId: 5,
        ServicoId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblFilialServico', null, {});

  }
};
