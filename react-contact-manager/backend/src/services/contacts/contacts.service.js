// Initializes the `contacts` service on path `/contacts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/contacts.model');
const hooks = require('./contacts.hooks');
const filters = require('./contacts.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'contacts',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/contacts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('contacts');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
