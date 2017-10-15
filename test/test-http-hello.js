'use strict';
     
    const chai = require('chai');  
    const expect = require('chai').expect;
     
    chai.use(require('chai-http'));
     
    const app = require('../app.js'); // Our app

    //In a Mocha test, we describe our tests using the describe function,
     describe('API endpoint /v1/hello', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      //before and after blocks can be used to setup our tests before any testing begins, and cleanup after all tests have been completed.
      before(function() {
     
      });
     
      after(function() {
     
      });
     
      //individual test cases are implemented using the it function, which is where we insert our assertions.
      
      // GET - List all contacts
      it('should return hello world', function() {
        return chai.request(app)
          .get('/v1/hello')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res.text).to.be.string;
            expect(res.text).to.equal('Hello World')
            //console.log(res);
          });
      });

       it('should say hello to a specific contact', function() {
        return chai.request(app)
          .get('/V1/hello/Tom')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res.text).to.be.string;
            expect(res.text).to.equal('Hello Tom')            
          });
      });
    });

    describe('API endpoint /v1/helloGet', function() {  
      this.timeout(5000); // How long to wait for a response (ms)
     
      //before and after blocks can be used to setup our tests before any testing begins, and cleanup after all tests have been completed.
      before(function() {
     
      });
     
      after(function() {
     
      });
     
      //individual test cases are implemented using the it function, which is where we insert our assertions.
      
      // GET - List all contacts
      it('should return hello world', function() {
        return chai.request(app)
          .get('/v1/helloGet')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res.text).to.be.string;
            expect(res.text).to.equal('Hello World')
            //console.log(res);
          });
      });

       it('should say hello to a specific contact', function() {
        return chai.request(app)
          .get('/V1/helloGet?name=Tom')
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res.text).to.be.string;
            expect(res.text).to.equal('Hello Tom')            
          });
      });
    });