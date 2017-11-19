// Initializes the `transaction_group` service on path `/transaction-group`
const createService = require('feathers-sequelize');
const createModel = require('../../models/transaction-group.model');
const hooks = require('./transaction-group.hooks');
const filters = require('./transaction-group.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    id:'idtransaction_group',
    name: 'transaction-group',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/transaction-group', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('transaction-group');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
