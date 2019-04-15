module.exports = function(router) {
    const customers = require('../controller/costumer.controller.js');
 
    // Create a new Customer
    router.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    router.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    router.get('/api/customers/:customerId', customers.findById);
 
    // Update a Customer with Id
    router.put('/api/customers/:customerId', customers.update);
 
    // Delete a Customer with Id
    router.delete('/api/customers/:customerId', customers.delete);

    return router;
}