"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tblNotificacao", [
      {
        PacienteId: 1,
        ConsultaId: 1,
        data: "2020-12-18",
        mensagem: "Sua consulta está próxima",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tblNotificacao", null, {});
  },
};
