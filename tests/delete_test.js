const assert = require('assert')
const {I} = inject();

Feature('Delete API Feature Testing');


Scenario('Verify a deleting the entry successful call - STATUS', async () => {
    const res = await I.sendDeleteRequest('/product/2');
    assert.equal(200,res.status, 'Status code actual value ' + res.status + ' is not matching with Expected value 200. Please check the Service.');
    
});
Scenario('Verify invalid deleting unsuccessful call - STATUS', async () => {
	const res = await I.sendDeleteRequest('/product/10');
     assert.equal(404,res.status, 'Status code actual value ' + res.status + ' is not matching with Expected value 200. Please check the Service.');
    
});
