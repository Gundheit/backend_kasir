const assert = require('assert');
const app = require('../../src/app');

describe('\'transaction_group\' service', () => {
  it('registered the service', () => {
    const service = app.service('transaction-group');

    assert.ok(service, 'Registered the service');
  });
});
