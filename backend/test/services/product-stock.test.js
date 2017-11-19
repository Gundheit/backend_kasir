const assert = require('assert');
const app = require('../../src/app');

describe('\'product_stock\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-stock');

    assert.ok(service, 'Registered the service');
  });
});
