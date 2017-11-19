// Initializes the `customer` service on path `/customer`
const createService = require('feathers-sequelize');
const createModel = require('../../models/customer.model');
const hooks = require('./customer.hooks');
const filters = require('./customer.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    id:'idcustomer',
    name: 'customer',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/customer', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('customer');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
