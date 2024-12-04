const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate(models) {
      // define association here
    }
  };
  Color.init({
    name: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: 'Name cannot be null'
      },
      notEmpty: {
        msg: 'Name cannot be empty'
      }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
