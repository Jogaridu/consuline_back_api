const { DataTypes, Model } = require("sequelize");

class Notificacao extends Model {
  static init(sequelize) {
    super.init(
      {
        data: DataTypes.DATEONLY,
        mensagem: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "tblNotificacao",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Consulta, {
      foreignKey: "ConsultaId"
    });
    this.belongsTo(models.Paciente);
  }
}

module.exports = Notificacao;
