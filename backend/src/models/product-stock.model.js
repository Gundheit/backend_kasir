// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const productStock = sequelizeClient.define('product-stock', {
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
  },{
    freezeTableName: true,
     tableName: 'product_stock',
     createdAt: false,
     updatedAt: false
 }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  productStock.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    productStock.belongsTo(models.product,{foreignKey: "idproduct",as:"product"});
  };

  return productStock;
};
