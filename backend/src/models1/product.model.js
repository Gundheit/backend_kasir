/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    idproduct: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproduct_unit: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'product_unit',
        key: 'idproduct_unit'
      }
    },
    idproduct_category: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'product_category',
        key: 'idproduct_category'
      }
    },
    barcode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stock: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdby: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedby: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'product'
  });
};
