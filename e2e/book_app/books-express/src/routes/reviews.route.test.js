import { expect, should } from 'chai'
should()
import { addReview, getReviewById } from './reviews.route.js'
import { InvalidIdError } from '../utils/exceptions.js'


describe('review.route', () => {
    describe('getReviewById', () => {

        it('should return right review for valid id', async () => {
            const id = 5
            const result = await getReviewById({ id })
            console.log('result', result);

            result.title.should.include(id)
        })

        it('should throw InvalidIdException for invalid id ', async () => {
            const id = -1
            try {
                await getReviewById(id)
            } catch (err) {
                err.should.be.instanceOf(InvalidIdError)
            }

        })
    })

    describe('addReview', () => {

        it('should add and return a valid review with valid id and status 201', async () => {
            let review = { title: "New Review", rating: 3 }

            let request = { body: review }
            let response = {
                status(s) {
                    s.should.equal(201)
                    return this;
                },
                send(data) {
                    data.title.should.equal(review.title)
                    data.id.should.not.be.undefined
                }
            }


            await addReview(request, response)

        })




        it('should return 404 for invalid data without adding it', async () => {
            let review = { title: "New Review", } //bad data

            let request = { body: review }
            let response = {
                status(s) {
                    s.should.equal(400)
                    return this;
                },
                send(data) {
                    data.should.deep.equal({ rating: 'required' })
                }
            }


            await addReview(request, response)

        })

    })


})