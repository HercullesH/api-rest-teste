
var express = require('express');
var router = express.Router();
const cors = require('cors');
costumer = require('./app/route/customer.route.js')(router);
teste = require('./app/route/teste.route.js')(router);

var app = express();
var bodyParser = require('body-parser');

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log('Drop and Resync with { force: true }');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}))
app.use('/',costumer);
app.use('/api',costumer);
app.use('/api/customers',costumer);
app.use('/api/testes',teste);

module.exports = app