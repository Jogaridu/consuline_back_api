'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tblConsulta", [
      {
        AtendimentoId: 2,
        FilialId: null,
        PacienteId: 1,
        ProfissionalDaSaudeId: 1,
        ServicoId: 3,
        data: "2020-12-18",
        desconto: "R$0,00",
        horario: "02:17",
        PagamentoId: 1,
        sintomas: "Dor",
        atendida: false,
        valor: "R$100,00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        AtendimentoId: 2,
        FilialId: null,
        PacienteId: 1,
        ProfissionalDaSaudeId: 1,
        ServicoId: 1,
        data: "2020-12-18",
        desconto: "R$0,00",
        horario: "08:00",
        PagamentoId: 1,
        sintomas: "Dor",
        valor: "R$100,00",
        atendida: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        AtendimentoId: 2,
        FilialId: null,
        PacienteId: 1,
        ProfissionalDaSaudeId: 1,
        ServicoId: 4,
        data: "2020-12-18",
        desconto: "R$0,00",
        horario: "08:00",
        PagamentoId: 1,
        sintomas: "Dor",
        valor: "R$100,00",
        atendida: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tblConsulta', null, {});
  }
};
