const assert = require('assert');
const {I} = inject();

Feature('Put API Feature Testing');


Scenario('Verify User able to update existing record - successful call - STATUS', async () => {
	const res = await I.sendPutRequest('/product/3', {"price": 10.00} );
    assert.equal(200,res.status, 'Status code actual value ' + res.status + ' is not matching with Expected value 200. Please check the Service.');
    
});

Scenario('Verify User NOT able to update existing record - unsuccessful call - STATUS', async () => {
	const res = await I.sendPutRequest('/product/10', {"price": 10.00} );
    assert.equal(404,res.status, 'Status code actual value ' + res.status + ' is not matching with Expected value 404. Please check the Service.');
    
});

