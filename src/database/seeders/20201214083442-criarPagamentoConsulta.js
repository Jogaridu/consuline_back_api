"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tblPagamento", [
      {
        cod: "121",
        data: "2022-12-15",
        nomeCompleto: "Nicolaa",
        numero: "4646464646646464",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tblPagamento", null, {});
  },
};
