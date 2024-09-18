import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
         password: ''
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3010/signup', values)
            .then(res => 
                navigate('/')
            )
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            name='name'
                            className='form-control rounded-0'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            name='email'
                            className='form-control rounded-0'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            className='form-control rounded-0'
                            onChange={handleChange}
                        />
                    </div>
                    <button className='btn btn-success w-100 rounded-0'>Sign up</button>
                    <p>You agree to our terms</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
