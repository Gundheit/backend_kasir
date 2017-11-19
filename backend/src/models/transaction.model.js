// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const transaction = sequelizeClient.define('transaction', {
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
  },{
    freezeTableName: true,
     tableName: 'transaction',
     createdAt: false,
     updatedAt: false
 }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  transaction.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return transaction;
};
