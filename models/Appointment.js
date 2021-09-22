const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Appointment extends Model {}

Appointment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});
