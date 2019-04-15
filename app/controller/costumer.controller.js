const db = require('../config/db.config.js');
const Customer = db.customers;
const Teste = db.testes;

// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	Customer.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
	  age: req.body.age
	}).then(customer => {		
		Teste.create({
			nome:'joao',
			nomeB:'Carlos',
			idade:39
		}).then(teste =>{
			customer.setTeste(teste)
		})
		res.status(201)
		res.send(customer);
	});
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Customer.findAll({
		include: [{
			model: Teste
		}]
	}).then(customers => {
		res.status(200)
	  res.send(customers);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	Customer.findById(req.params.customerId).then(customer => {
		res.status(200)
		res.send(customer)
	})
	
};
 
// Update a Customer
exports.update = (req, res) => {
	const id = req.params.customerId;
	Customer.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
					 { where: {id: req.params.customerId} }
				   ).then(() => {});
	 Customer.findById(id).then(customer => {
		res.status(200)
		res.send(customer)
						})
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a customer with id = ' + id);
	});
};