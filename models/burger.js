module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burgerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return Burger;
  };
  