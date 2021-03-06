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
      allowNull: true,
    },
    appointment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    appointment_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "client",
        key: "id",
      },
    },
    // doctor_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "doctor",
    //     key: "id",
    //   },
    // },
    doctor_name: {
      type: DataTypes.STRING,
      allowNull: false
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
