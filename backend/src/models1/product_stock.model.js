/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_stock', {
    idproduct_stock: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproduct: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'product',
        key: 'idproduct'
      }
    },
    idtransaction_group: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'transaction_group',
        key: 'idtransaction_group'
      }
    },
    iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
    idsupplier: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'supplier',
        key: 'idsupplier'
      }
    },
    stock_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    detail: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    detail2: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    total: {
      type: DataTypes.BIGINT,
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
    tableName: 'product_stock'
  });
};
