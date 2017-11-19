// Initializes the `config` service on path `/config`
const createService = require('feathers-sequelize');
const createModel = require('../../models/config.model');
const hooks = require('./config.hooks');
const filters = require('./config.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    id:'idconfig',
    name: 'config',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/config', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('config');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
