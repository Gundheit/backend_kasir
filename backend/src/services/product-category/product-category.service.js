// Initializes the `product_category` service on path `/product-category`
const createService = require('feathers-sequelize');
const createModel = require('../../models/product-category.model');
const hooks = require('./product-category.hooks');
const filters = require('./product-category.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    id:'idproduct_category',
    name: 'product-category',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-category', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-category');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
