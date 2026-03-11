import { useState } from 'react';
import { compareTo, email, oneOf, password, required } from '../../services/validation'
import { useForm, Form } from '../utils/Input'

const strongPassword = password({
    minLength: 6,
})

const Register = ({ id }) => {
    //component logic here
    const userSchema = {
        name: { validators: [required()], label:"Name" },
        email: { validators: [required(), email()], type: "email", label:"Email" },
        password: { type: "password", validators: [required(), strongPassword], label:"Password" },
        confirmPassword: { type: "password", validators: [required(), strongPassword, compareTo("password")], label:"Confirm Password" },
        photo: {label:"Profile Photo", placeholder:"Profile Photo URL"},
        preferredRole: { validators: [oneOf("reviewer", "author", "moderator")], label:"Preferred Role" }

    }

    const [user, errors, onChange] = useForm(userSchema)

    const register = () => {
        if (!errors) {
            console.log('user', user);

        }
    }

    return (
        <div className='Login '>
            <h2>Register</h2>
            <div className="row">
                <div className="col">
                    <Form
                        schema={userSchema}
                        model={user}
                        errors={errors?.errors}
                        onChange={onChange}
                        onSubmit={register}
                        submitOnError={true}
                    />
                </div>
                <div className="col">

                </div>
            </div>

        </div>
    );
};

export default Register;   