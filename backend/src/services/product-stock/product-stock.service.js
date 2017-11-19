// Initializes the `product_stock` service on path `/product-stock`
const createService = require('feathers-sequelize');
const createModel = require('../../models/product-stock.model');
const hooks = require('./product-stock.hooks');
const filters = require('./product-stock.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'product-stock',
    id: 'idproduct_stock',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-stock', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-stock');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
