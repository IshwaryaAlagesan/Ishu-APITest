const expect = require('chai').expect;
const assert = require('assert');
const {I} = inject();

Feature('Get API Feature Testing');

Scenario('Verify a getting a single product successful call - STATUS', async () => {
	const res = await I.sendGetRequest('/product/2');
    // expect(res.status).to.eql(200);
    assert.equal(200,res.status, 'Status code actual value ' + res.status + ' is not matching with Expected value 200. Please check the Service.');
});

Scenario('Verify a getting a single product successful call - BODY', async () => {
	const res = await I.sendGetRequest('/product/1');
    // expect(res.status).to.eql(200);
    assert.equal('Lavender heart', res.data.name, 'Product Name actual value ' + res.data.name + ' is not matching with Expected value Lavender Heart. Please check the Service.');
    assert.equal(9.25, res.data.price, 'Product Price actual value ' + res.data.price + ' is not matching with Expected value 9.25. Please check the Service.');
});

Scenario('Verify a GET a single product unsuccessful call - STATUS', async () => {
	const res = await I.sendGetRequest('/product/10');
    // expect(res.status).to.eql(404);
    assert.equal(404,res.status, 'Status code actual value ' + res.status + ' is not matching with Expected value 404. Please check the Service.');
});
