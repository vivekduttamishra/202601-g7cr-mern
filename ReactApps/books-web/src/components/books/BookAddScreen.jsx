import { useState } from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import LabeledInput, { TextArea, textAreaBuilder } from '../utils/Input';


const BookAddScreen = ({ id }) => {
    //component logic here
    

    let [book,setBook]=useState({
        id:'', //auto generate
        isbn:'',
        title:'',
        author:'',
        price:0,
        cover:'',
        rating:'',
        description:''
    });

    const handleFormChange=(value,id)=>{
        
        // let newBook={...book} // create a copy of current book value
        // newBook[id]=value  //update the field by id


        let newBook = {...book, [id]:value}; //update one key

        console.log('book updated',newBook); 
        
        //now update the state to make this data final
        setBook(newBook) 
        
        
    }

    const handleFormSubmit=(e)=>{
        //step 1. make sure form is not auto submited to server
        e.preventDefault()

        //we already have the book with us
        //step 2. run the validation

        //step 3. if validation passes save
        console.log('saving', book)
    }


    return (
        <div className='BookAddScreen screen'>
            <h2>Add New Book</h2>
            <form onSubmit={handleFormSubmit} className="bookForm">
                <LabeledInput id="id" value={book.id} onChange={handleFormChange}
                    label="Book Id (Optional)" groupClassName='margin5'
                />
                
                <LabeledInput id="title" value={book.title} onChange={handleFormChange}
                    label="Book Title" groupClassName='margin5'
                />
                <LabeledInput id="author" value={book.author} onChange={handleFormChange}
                    label="Author" groupClassName='margin5'
                />
                <LabeledInput id="price" value={book.title} onChange={handleFormChange}
                    label="Price" groupClassName='margin5'
                />
                <LabeledInput id="rating" value={book.rating} onChange={handleFormChange}
                    label="Rating (Out of 5)" groupClassName='margin5'
                />
                <LabeledInput id="description" value={book.description} onChange={handleFormChange}
                    
                    inputBuilder={textAreaBuilder}
                    label="Description" groupClassName='margin5'
                />

                
                <button type="submit"  className='btn btn-primary'>Add</button>
            </form>

        </div>
    );
};

export default withConditionalVisibility(BookAddScreen);