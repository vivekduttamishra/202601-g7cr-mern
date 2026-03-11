import { useState } from 'react';
import { textAreaBuilder, useForm } from '../utils/Input';
import { maxLength, minLength, required, throwOnError } from '../../services/validation';
import { Form } from "../utils/Input";
//import withConditionalVisibility from '../../hocs/withConditionalVisibility';

const maxTags = (count) => (value, key, context) => {
    if (!value)
        return;
    const tags = value.split(',').filter(tag => tag.trim())


    throwOnError(tags.length > count, `Max Tags allowed : ${count}. Provided: ${tags.length}`, key, context)
}

const AuthorAddScreen = ({ id }) => {
    //component logic here  

    const schema = {
        name: { value: "", validators: [required()], label: "Name" },
        biography: { value: "", validators: [required(), minLength(20), maxLength(2000)], inputBuilder: textAreaBuilder, label: "Biography" },
        photo: { value: "", label: "Photo" },
        tags: { value: "", validators: [maxTags(5)], label: "Tags" }
    }

    const defaults = {
        name: "Vivek Dutta Mishra",
        photo: "vivek.jpg"
    }
    const [author, error, onChange] = useForm(schema, defaults);

    const handleAddAuthor = () => {
        if (!error) {
            let newAuthor = {
                id: author.name.toLowerCase().split(' ').join('-'),
                ...author,
                tags: author.tags.split(',').map(a => a.trim()).filter(a => a).map(a => a.toLowerCase())

            }
            console.log('newAuthor', newAuthor);

        } else {
            console.log('error', error);

        }
    }



    return (
        <div>
            <h2>New Author</h2>

            <Form
                schema={schema}
                model={author}
                errors={error?.errors}
                onChange={onChange}
                onSubmit={handleAddAuthor}
                submitLabel="Add Author"
                submitOnError={true}
            />

        </div>
    );
};

//export default withConditionalVisibility( AuthorAddScreen );
export default AuthorAddScreen