import { useState } from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';

const BookAddScreen = ({ id }) => {
    //component logic here
    function handleAdd(e){
        e.preventDefault(); //don't submit to server
       
        //TODO:
        //Get values from each field
        //make sure fields pass validations
        // required information:  isbn, title, price, 
        // price: must be a number>=0
        // description: minimum length 50chars, max 2000chars

        //if validation passes
            //add the object to book service
            //return back to booklist screen
        //else
            //show the validation error on the screen
            //do not save
            //do not return

        //avoid redundant code wherever possible.
      
    }

    let [title,setTitle]=useState('Rashmirathi')


    return (
        <div className='BookAddScreen screen'>
            <h2>Add New Book</h2>
            <form onSubmit={handleAdd} className="bookForm">
                <div>
                    <label htmlFor='isbn'>ISBN</label>
                    <input type='text' id='isbn' placeholder='19393939393' />
                </div>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input type='text' value={title} onChange={e=> setTitle(e.target.value)} id='title' placeholder='The Book Title' />
                </div>
                <div>
                    <label htmlFor='author'>Author</label>
                    <input type='text' id='author' placeholder='Author Name' />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input type='text' id='price' placeholder='₹' />
                </div>
                <div>
                    <label htmlFor='cover'>Cover</label>
                    <input type='text' id='cover' placeholder='https://' />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea type='text' id='description' placeholder='' >
                    </textarea>
                </div>

                <button type="submit"  className='btn btn-primary'>Add</button>
            </form>

        </div>
    );
};

export default withConditionalVisibility(BookAddScreen);