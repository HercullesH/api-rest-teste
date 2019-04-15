const db = require('../app/config/db.config.js');
const Costumer = db.customers;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
var expect = chai.expect;

const should = chai.should();

chai.use(chaiHttp)


describe('/GET customer by id', () => {
    it('return costumer by id', (done) => {
        chai.request(app)
        .get('/api/customers/1')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body)
            expect(res.body.firstname,"firstname é diferente").to.equal('Jacks');
            done();
        });
    });
});

describe('/PUT/:id costumer', () => {
    it("teste atualizar costumer", (done) => {
        const customer = {
            firstname: "Mr.",
            lastname: "Himu",
            age:10
        }
        const costumerId = 1;
         chai.request(app)
         .put('/api/customers/'+ costumerId)
         .send(customer)
         .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('object');
             expect(res.body.firstname,"firstname é diferente").to.equal('Mr.');
             expect(res.body.lastname,"lastname é diferente ").to.equal('Himu');
             expect(res.body.age,"age é diferente ").to.equal(10);
             done();
         });
    });
});

