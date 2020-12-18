"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblConsulta", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desconto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      atendida: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      notaProfissional: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      horario: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allownull: false,
      },
      sintomas: {
        type: Sequelize.STRING,
        allownull: true
      },
      PacienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblPaciente",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      ProfissionalDaSaudeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblProfissionalDaSaude",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      FilialId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "tblFilial",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      ServicoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblServico",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      PagamentoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblPagamento",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      AtendimentoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblAtendimento",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblconsulta");
  },
};
