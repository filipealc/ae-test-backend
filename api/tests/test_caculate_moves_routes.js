// Import the dependencies for testing
var chai = require("chai");
var chaiHttp = require("chai-http");
//import chai from "chai";
//import chaiHttp from "chai-http";
var app = require("../../server");

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("MovesRoutes", () => {
  describe("GET /", () => {
    it("should inform missing parameter", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("should inform unformatted parameter", done => {
      chai
        .request(app)
        .get(`/?A`)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("should get the list of moves", done => {
      chai
        .request(app)
        .get(`/?position=A1`)
        .end((err, res) => {
          res.should.have.status(200);
          const items_expected = [
            "A1",
            "A3",
            "E1",
            "E3",
            "B4",
            "D4",
            "D2",
            "A5",
            "C1",
            "C5",
            "C2",
            "B3"
          ];
          chai.expect(res.body).to.have.members(items_expected);
          chai.expect(res.body).to.have.length(items_expected.length);
          console.log(res.body);
          done();
        });
    });
  });
});
