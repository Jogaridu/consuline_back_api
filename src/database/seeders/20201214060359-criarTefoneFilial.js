'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblTelefoneFilial', [
      {
        numero: "11912341234",
        filialId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11932114567",
        filialId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11932113213",
        filialId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11932123567",
        filialId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11923344112",
        filialId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblTelefoneFilial', null, {});

  }
};
