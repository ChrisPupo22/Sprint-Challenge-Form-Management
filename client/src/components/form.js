import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { Form, Field, withFormik} from 'formik';
import * as Yup from 'yup'; 

const UserForm = ({status, touched, errors, handleSubmit, values }) => {
    const[users, setUsers] = useState([]);
    console.log(users); 

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);

    return(
        <div className='user-form'>
            <h1>Please set up your username and password here!</h1>
            <Form>
                <Field className='username-input' type='text' name='username' placeholder='username' />
                {touched.username && errors.username && <p className='error'>Please enter a valid username</p>}

                <Field className='password-input' type='text' name='password' placeholder='password' />
                {touched.password && errors.password && <p className='error'>Please enter a valid password</p>}
                <button>Sign In!</button>
            </Form>
        </div>
    )
}

const SignInForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username:Yup.string().required(),
        password:Yup.string().required()
    }),
    handleSubmit(values, {setStatus}) {
        console.log('form submitted', values);
        Axios.post('http://localhost:5000/api/register', values)
        .then(res => {
            setStatus(res.data)
        })
        .catch(err => console.log(err.response));
    }

})(UserForm);

export default SignInForm; 