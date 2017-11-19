/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    idtransaction: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idtransaction_group: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'transaction_group',
        key: 'idtransaction_group'
      }
    },
    idproduct: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'product',
        key: 'idproduct'
      }
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    discount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sell_price: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    final_price: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
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
    tableName: 'transaction'
  });
};
