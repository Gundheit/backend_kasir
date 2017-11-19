// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const product = sequelizeClient.define('product', {
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
  },{
    freezeTableName: true,
     tableName: 'product',
     createdAt: false,
     updatedAt: false
 }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  product.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    console.log(models);
    product.belongsTo(models['product-unit'],{foreignKey: "idproduct_unit",as:"unit"});
    product.belongsTo(models['product-category'],{foreignKey: "idproduct_category",as:"category"});
  };

  return product;
};
