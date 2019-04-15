module.exports = (sequelize, Sequelize) => {
	const Teste = sequelize.define('teste', {
	  nome: {
		type: Sequelize.STRING
	  },
	  nomeB: {
		type: Sequelize.STRING
	  },
	  idade: {
		  type: Sequelize.INTEGER
		},

	},
	{	
		timestamps: false
	}
);
	
	return Teste;
}       