/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction_group', {
    idtransaction_group: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idcustomer: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'customer',
        key: 'idcustomer'
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
    code: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true
    },
    total_discount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    total_sell_price: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    total_final_price: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total_cash: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    total_change: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    payment_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    session: {
      type: DataTypes.STRING(200),
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
    tableName: 'transaction_group'
  });
};
