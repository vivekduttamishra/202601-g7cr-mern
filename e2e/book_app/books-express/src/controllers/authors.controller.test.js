import { expect, should } from 'chai'
import { getAllAuthors, getAuthorById } from './authors.controller.js'
import injector from '../utils/injector.js'
import { InvalidIdError } from '../utils/exceptions.js'
should()

describe('Author Controller', () => {

    let service;
    let authors = [
        { id: 'vivek', name: 'Vivek' },
        { id: 'sanjay', name: 'Sanjay' }
    ]
    beforeEach(() => {
        service = {} //fake service
        injector.reset()
        injector.add("authorService", { instance: service })
    })
    describe('getAllAuthors', () => {


        it('should return all authors', async () => {

            service.getAllAuthors = async () => authors;

            let host = 'booksweb.com'

            let result = await getAllAuthors({ host }) //will get the fake service I created.

            result.should.be.instanceOf(Array)
            result.should.have.length(authors.length);
            result.forEach(author => author.photo.should.include(host))

        })

    })

    describe('get Author  Id', async () => {

        it('should return author with valid id', async () => {
            const host = "booksweb.com"
            let author = { id: 'some-name', name: 'Some Name' }

            service.getAuthorById = async () => author

            let result = await getAuthorById({host,id:author.id})

            result.name.should.equal(author.name)
            result.photo.should.include(host)

        })

        it('get Author By invalid valid Id', async () => {

            const host = "booksweb.com"


            service.getAuthorById = async (id) => { throw new InvalidIdError(id) }

            try {

                let result = await getAuthorById({id:"invalid id",host})
            } catch (err) {
                err.should.be.instanceOf(InvalidIdError)
            }



        })
    })


})