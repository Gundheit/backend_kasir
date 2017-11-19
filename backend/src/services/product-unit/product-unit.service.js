// Initializes the `product_unit` service on path `/product-unit`
const createService = require('feathers-sequelize');
const createModel = require('../../models/product-unit.model');
const hooks = require('./product-unit.hooks');
const filters = require('./product-unit.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    id:'idproduct_unit',
    name: 'product-unit',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-unit', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-unit');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
