module.exports = function(router) {
    const testes = require('../controller/teste.controller.js');
 
    // Create a new Customer
    router.post('/api/testes', testes.create);
 
    // Retrieve all Customer
    router.get('/api/testes', testes.findAll);
 
    // Retrieve a single Customer by Id
   // router.get('/api/testes/:testeId', testes.findById);
 
    // Update a Customer with Id
    //router.put('/api/testes/:testeId', testes.update);
 
    // Delete a Customer with Id
    //router.delete('/api/testes/:testeId', testes.delete);

    return router;
}