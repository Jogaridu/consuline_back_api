"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tblPaciente", [
      {
        nome: "Nicolas Santos",
        celular: "11974554723",
        login: "Nick",
        foto: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/fotoNicolas.png?alt=media&token=4cf52137-000e-45bd-985c-18ee8c84a90f",
        senha: bcrypt.hashSync("123", 10),
        dataNascimento: "2001-01-30",
        email: "ns5077900@gmail.com",
        rg: "385610082294",
        cpf: "123569104564",
        EnderecoPacienteId: 1,
        verificado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Arnaldo Silveira",
        celular: "11974554713",
        login: "Arn",
        foto: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/foto.jpg?alt=media&token=0e98854e-cb46-4be7-ba7a-aa3c80ec8c67",
        senha: bcrypt.hashSync("123", 10),
        dataNascimento: "2001-01-30",
        email: "teste2@gmail.com",
        rg: "315660282194",
        cpf: "623560111564",
        EnderecoPacienteId: 1,
        verificado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblPaciente', null, {});

  },
};
