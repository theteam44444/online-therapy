const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appointment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "client",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelname: "appointment",
  }
);

module.exports = Appointment;
