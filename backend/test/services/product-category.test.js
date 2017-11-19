const assert = require('assert');
const app = require('../../src/app');

describe('\'product_category\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-category');

    assert.ok(service, 'Registered the service');
  });
});
