const expect = require('chai').expect;
const assert = require('assert');
const {I} = inject();

Feature('Get All API Feature Testing');

Scenario('Verify getting All Products successful call - STATUS', async () => {
	const res = await I.sendGetRequest('/products');
    // expect(res.status).to.eql(200);
    assert.equal(200,res.status, 'Status code actual value ' + res.status + ' is not matching with Expected value 200. Please check the Service.');
});
