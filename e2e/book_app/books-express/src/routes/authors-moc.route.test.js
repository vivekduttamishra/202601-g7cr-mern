import request from "supertest"
import sinon from "sinon"
import esmock from 'esmock'
import { should } from "chai"

import injector from "../utils/injector.js"
import * as jwt from "../utils/jwt.js"
import { AuthenticationError } from "../utils/exceptions.js"
import authorsService from "../services/authors.service.js"

should()

describe("Author Mock Routes", () => {

    let app
    let serviceStub
    let authenticateStub
    let authorizeStub

    beforeEach(async () => {

        injector.reset()

        serviceStub = {
            getAllAuthors: sinon.stub(),
            getAuthorById: sinon.stub(),
            addAuthor: sinon.stub(),
            updateAuthor: sinon.stub(),
            removeAuthor: sinon.stub()
        }

        const userService = {
            login: sinon.stub(),
            getUserById: sinon.stub()
        }

        injector.add("authorService", { instance: serviceStub })
        injector.add("userService", { instance: userService })

        sinon.restore()

        authenticateStub = sinon.stub().callsFake((req, res, next) => next())

        authorizeStub = sinon.stub().callsFake(
            () => (req, res, next) => next()
        )

        const mocked = await esmock("../app.js", {
            "../utils/jwt.js": {
                parseJwtToken: (req, res, next) => next(),
                authenticate: authenticateStub,
                authorize: authorizeStub
            }
        })

        app = mocked.default
    })

    afterEach(() => {
        sinon.restore()
    })

    const authors = [
        { id: "vivek", name: "Vivek" },
        { id: "shesha", name: "Shesha" }
    ]

    // ----------------------------------------------------
    // GET /api/authors
    // ----------------------------------------------------

    it("GET /api/authors returns authors", async () => {

        serviceStub.getAllAuthors.resolves(authors)

        const res = await request(app).get("/api/authors")

        res.status.should.equal(200)
        res.body.should.be.an("array")
        res.body.forEach((a, i) => a.should.include(authors[i]))

        sinon.assert.calledOnce(serviceStub.getAllAuthors)
    })

    // ----------------------------------------------------
    // GET /api/authors/:id
    // ----------------------------------------------------

    it("GET /api/authors/:id returns author", async () => {

        serviceStub.getAuthorById.resolves(authors[0])

        const res = await request(app).get("/api/authors/vivek")

        res.status.should.equal(200)
        res.body.should.deep.equal(authors[0])

        sinon.assert.calledWith(serviceStub.getAuthorById, "vivek")
    })

    // ----------------------------------------------------
    // POST /api/authors (authenticated)
    // ----------------------------------------------------

    it("POST /api/authors adds author for logged in user", async () => {

        //sinon.stub(jwt, "authenticate").callsFake((req, res, next) => next())

        serviceStub.addAuthor.resolves(authors[0])

        //authenticate is faked not to fail

        const res = await request(app)
            .post("/api/authors")
            .set("Authorization", "BEARER ANYDUMMYTOKEN")
            .send(authors[0])

        res.status.should.equal(201)

        sinon.assert.calledOnce(serviceStub.addAuthor)
    })

    // ----------------------------------------------------
    // POST /api/authors (401)
    // ----------------------------------------------------

    it("POST /api/authors returns 401 when authentication fails", async () => {

        authenticateStub.callsFake((req, res, next) => { 
            console.log('authentication called')
            throw new AuthenticationError("Token Error") 
        }) 
        serviceStub.addAuthor.callsFake(async()=>authors[0])
        const res = await request(app)
            .post("/api/authors")
            .set("Authorization","dummy token")
            .send(authors[0])

        console.log('res.body',res.body);
        
        res.status.should.equal(401)
    })

    // ----------------------------------------------------
    // PUT /api/authors/:id
    // ----------------------------------------------------

    it("PUT /api/authors updates author", async () => {

        sinon.stub(jwt, "authenticate").callsFake((req, res, next) => next())

        serviceStub.updateAuthor.resolves(authors[0])

        const res = await request(app)
            .put("/api/authors/vivek")
            .send(authors[0])

        res.status.should.equal(200)

        sinon.assert.calledOnce(serviceStub.updateAuthor)
    })

    // ----------------------------------------------------
    // DELETE /api/authors/:id (authorized)
    // ----------------------------------------------------

    it("DELETE /api/authors/:id removes author", async () => {

        sinon.stub(jwt, "authorize").returns((req, res, next) => next())

        serviceStub.removeAuthor.resolves(true)

        const res = await request(app)
            .delete("/api/authors/vivek")

        res.status.should.equal(200)

        sinon.assert.calledOnce(serviceStub.removeAuthor)
    })

    // ----------------------------------------------------
    // DELETE /api/authors/:id (403)
    // ----------------------------------------------------

    it("DELETE /api/authors/:id returns 403 when unauthorized", async () => {

        sinon.stub(jwt, "authorize").returns(() => {
            throw new Error("Forbidden")
        })

        const res = await request(app)
            .delete("/api/authors/vivek")

        res.status.should.equal(403)
    })

})