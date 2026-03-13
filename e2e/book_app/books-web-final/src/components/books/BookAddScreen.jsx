import { useState } from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import LabeledInput, { TextArea, textAreaBuilder } from '../utils/Input';
import bookService, { bookModel } from '../../services/BookService';
import { useNavigate } from 'react-router-dom';
import {validate} from '../../services/validation';


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

    const navigate=useNavigate();

    const handleFormChange=(value,id)=>{
        
        // let newBook={...book} // create a copy of current book value
        // newBook[id]=value  //update the field by id


        let newBook = {...book, [id]:value}; //update one key

        //console.log('book updated',newBook); 

        // try{
        //     console.log('validating')
        //     validate(newBook, bookModel)
        // }catch(err){
        //     setErrors(err.info.errors)
        //     return
        // }
        
        //now update the state to make this data final
        setBook(newBook) 
        
        
    }
    const [error,setError] = useState('')



    const _handleFormSubmit=(e)=>{
        //step 1. make sure form is not auto submited to server
        e.preventDefault()

        //we already have the book with us
        //step 2. run the validation

        //step 3. if validation passes save
        //console.log('saving', book)

        try{
            bookservice.addBook(book);
            setError(null);
            navigate('/books')
        }catch(error){
            setError(`${error.key} : ${error.message}`)
        }
    }

    const [errors,setErrors]=useState({})

    const handleFormSubmit =async(e)=>{
        e.preventDefault();

        try{
            await bookService.addBook(book)
            navigate('/books')
        }catch(err){
           // console.log('error.info',err.info)
           setErrors(err.info.errors)
           //setError('validation failed')
        }

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
                    errorMessage={errors.title}
                />
                <LabeledInput id="author" value={book.author} onChange={handleFormChange}
                    label="Author" groupClassName='margin5'
                    errorMessage={errors.author}
                />
                <LabeledInput id="cover" value={book.cover} onChange={handleFormChange}
                    label="Cover" groupClassName='margin5'
                />
                <LabeledInput id="price" value={book.title} onChange={handleFormChange}
                    label="Price" groupClassName='margin5'
                    errorMessage={errors.price}
                />
                <LabeledInput id="rating" value={book.rating} onChange={handleFormChange}
                    label="Rating (Out of 5)" groupClassName='margin5'
                    errorMessage={errors.rating}
                />
                <LabeledInput id="description" value={book.description} onChange={handleFormChange}
                    
                    inputBuilder={textAreaBuilder}
                    label="Description" groupClassName='margin5'
                    errorMessage={errors.description}
                />

                
                <button type="submit"  className='btn btn-primary'>Add</button>
                <div className='text-danger'>{error}</div>
            
            </form>

        </div>
    );
};

export default withConditionalVisibility(BookAddScreen);