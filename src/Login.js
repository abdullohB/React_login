import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';


function Login() {
    const [values , setValues] = useState({ 
        email:'', 
        password: ''

     })

     const [errors , setErrors]= useState({})

    const handleInput = (evant) =>{
        setValues(prev => ({...prev, [evant.target.name]: [evant.target.value]}))
    }

     const handleSubmit = (evant) =>{
        evant.preventDefault();
        setErrors(Validation(values));
     }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sing in1</h2>
                
                <from action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='enter Email'  name='email'
                         onChange={handleInput}  className='form-control rounded-0'/>
                         {errors.email && <span className='text-danger'>{errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='enter Password'  name='password'
                          onChange={handleInput} className='form-control rounded-0' />
                          {errors.password && <span className='text-danger'>{errors.password} </span>}
                    </div>
                    <button type='sumbit' className='btn btn-success w-100 rounded-0' >login</button>
                    <p>You are agree to aour term</p>
                    <Link to="/singup" className='btn btn-default border w-100 bg-light rounded-0 text-deciration-non'>create Account</Link>
                </from>

            </div>


        </div>
  )
}

export default Login