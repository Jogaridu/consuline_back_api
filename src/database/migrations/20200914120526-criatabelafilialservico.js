'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblFilialServico", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      FilialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblFilial",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      ServicoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblServico",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblFilialServico");
  }
};
