const assert = require('assert');
const app = require('../../src/app');

describe('\'product_unit\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-unit');

    assert.ok(service, 'Registered the service');
  });
});
