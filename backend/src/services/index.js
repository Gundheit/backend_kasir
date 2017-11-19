const customer = require('./customer/customer.service.js');
const config = require('./config/config.service.js');
const group = require('./group/group.service.js');
const product = require('./product/product.service.js');
const productCategory = require('./product-category/product-category.service.js');
const productStock = require('./product-stock/product-stock.service.js');
const productUnit = require('./product-unit/product-unit.service.js');
const supplier = require('./supplier/supplier.service.js');
const transaction = require('./transaction/transaction.service.js');
const transactionGroup = require('./transaction-group/transaction-group.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(customer);
  app.configure(config);
  app.configure(group);
  app.configure(product);
  app.configure(productCategory);
  app.configure(productStock);
  app.configure(productUnit);
  app.configure(supplier);
  app.configure(transaction);
  app.configure(transactionGroup);
};
