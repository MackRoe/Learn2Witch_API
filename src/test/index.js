const app = require("../index.js");
const mongoose = require('mongoose');
const courseRoutes = require('./courses.js');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const assert = chai.assert

chai.config.includeStack = true;

chai.use(chaiHttp);

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

// test index
describe('## Index', () => {
    it('should load homepage', function(done) {
    chai.request(app)
        .get('/about')
        .then(function(res){
            console.log(res.body);
            assert.equal(res.status, 200);
            assert.equal(res.body.message, 'Learning is FUN!!!');
            return done();
        }).catch(function(err) {
        done(err)
    })
    })
});
