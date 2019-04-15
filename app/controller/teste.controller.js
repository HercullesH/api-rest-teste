const db = require('../config/db.config.js');
const Teste = db.testes;

// Post a Teste
exports.create = (req, res) => {	
	// Save to MySQL database
	Teste.create({  
	  nome: req.body.nome,
	  nomeB: req.body.nomeB,
		idade: req.body.idade
	}).then(teste => {		
		// Send created teste to client
		res.send(teste);
	});
};
 
// FETCH all Testes
exports.findAll = (req, res) => {
	teste = {
		oi:'ola'
	}
	res.send(teste)
};