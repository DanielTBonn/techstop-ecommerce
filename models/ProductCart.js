// ProductCart model for our product_cart table in sql
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductCart extends Model {}

ProductCart.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      }
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cart',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'product_cart'
  }
);

module.exports = ProductCart;