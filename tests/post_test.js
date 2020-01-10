const expect = require('chai').expect;
const assert = require('assert');

const {I} = inject();

Feature('Post API Feature Testing');


Scenario('Verify a User able to add New Product - STATUS', async () => {
	const res = await I.sendPostRequest('/product', {"name": "New Test Product", "price": 9.00} );
    assert.equal(200,res.status, 'Status code actual value ' + res.status + ' is not matching with Expected value 200. Please check the Service.');
    
});

Scenario('Verify a User could not add unsuccessful call - STATUS', async () => {
	const res = await I.sendPostRequest('/product', {"name": "jai", "price": "aa"} );
     expect(res.status).to.eql(400);
     console.log(res.data.detail)
     
});