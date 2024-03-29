"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblAvaliacao", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estrelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comentario: {
        type: Sequelize.TEXT,
        allowNull: false
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
    return queryInterface.dropTable("tblAvaliacao");
  },
};
