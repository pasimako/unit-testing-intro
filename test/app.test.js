import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app/app.js"; // Our app

chai.use(chaiHttp);

describe("API endpoint /colors", () => {
  before(() => {

  });

  after(() => {

  });

  // GET - List all colors
  it("should return all colors", async () => {
    const res = await chai.request(app).get("/colors");
    expect(res).to.have.status(200);
    expect(res).to.be.json;
    expect(res.body).to.be.an("object");
    expect(res.body.results).to.be.an("array");
  });

  // GET - Invalid path
  it("should return Not Found", async () => {
    const res = await chai.request(app).get("/INVALID_PATH");
    expect(res).to.have.status(404);
  });

  // POST - Add new color
  it("should add new color", async () => {
    const res = await chai.request(app).post("/colors").send({
      color: "YELLOW"
    });
    expect(res).to.have.status(201);
    expect(res).to.be.json;
    expect(res.body).to.be.an("object");
    expect(res.body.results).to.be.an("array").that.includes("YELLOW");
  });

  // POST - Bad Request
  it("should return Bad Request", async () => {
    const res = await chai.request(app).post("/colors").type("form").send({
      color: "YELLOW"
    });
    expect(res).to.have.status(400);
  });
});
