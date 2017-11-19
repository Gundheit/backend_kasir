// Initializes the `supplier` service on path `/supplier`
const createService = require('feathers-sequelize');
const createModel = require('../../models/supplier.model');
const hooks = require('./supplier.hooks');
const filters = require('./supplier.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    id:'idsupplier',
    name: 'supplier',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/supplier', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('supplier');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
