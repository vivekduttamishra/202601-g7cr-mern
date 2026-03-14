import express from 'express'
import { asyncHandler } from '../utils/http.js'
import { InvalidIdError } from '../utils/exceptions.js'

let reviews = [];


(() => {
    for (let i = 1; i <= 100; i++) {
        let id= i 
        reviews.push({ id, title: `title ${id}`, text: `Review Text ${id}`, rating: 4 })
    }
})()

let lastId = 100

const router = express.Router();



export async function addReview(request, response) {
    let review = { ...request.body, id: ++lastId }
    if(!review.title)
        return response.status(400).send({title:"required"})
    if(!review.rating)
        return response.status(400).send({rating:"required"})
    reviews.push(review)
    console.log('response',response);
    
    response.status(201).send(review)

}

router
    .route("/api/reviews")
    .get(async (request, response) => {
        response.send(reviews)
    })
    .post(addReview)

const delay = time => new Promise(resolve=>setTimeout(resolve,time))

const getById = async ({ id }) => {
    await delay(0)
    const review = reviews.find(r => r.id === id)
    console.log('review',review);
    
    if (review)
        return review
    else
        throw new InvalidIdError(id, "Invalid Review Id")
}

export const getReviewById = getById

export const updateReview = async ({ id, review }) => {
    const existingReview = await getById({ id })

    existingReview.title = review.title
    existingReview.text = review.text
    existingReview.rating = review.rating

    return { update: 'done', review: existingReview }

}


export const deleteReview = async ({ id }) => {

    await getReviewById({ id })
    reviews = reviews.filter(r => r.id !== id)
}

router
    .route("/:id")
    .get(asyncHandler(getReviewById))
    .put(asyncHandler(updateReview))
    .delete(asyncHandler(deleteReview))

