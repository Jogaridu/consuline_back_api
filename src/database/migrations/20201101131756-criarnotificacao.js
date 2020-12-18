"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblNotificacao", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      mensagem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ConsultaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblConsulta",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblNotificacao");
  },
};
