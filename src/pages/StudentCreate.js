// import { useState } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
function StudentCreate() {
    const [values, setValues] = useState({
        sex: '',
        age: '',
        date: ''
    })
    // const  handleInput = (e) => {
    //      e.persist();
    //      setStudent({...student,[e.target.name]: e.target.value});
    // }

    // const saveStudent = (e)=>{
    //         e.prevenDefault();
    //         const data={
    //             name : student.name,
    //             email : student.email,   
            
    //         }
    //  axios.post('').then();

    // }

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3010/insert', values)
            // .then(res => console.log("Registered Successfully!"))
            .then(res => 
                navigate('/student')
            )
            .catch(err => console.log(err));
    };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>Add Student 
                                    <Link to="/student" className="btn btn-danger float-end">Back</Link>
                                </h3>
                            </div>
                            <div className="card-body">
                               <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label>sex</label>
                                    <input type="text" name="sex"  onChange={handleChange} className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label>age</label>
                                    <input type="text" name="age"  onChange={handleChange} className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label>Date</label>
                                    <input type="date" name="date"  onChange={handleChange} className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                   
                                    <button type="submit" class="btn btn-primary">Save Student</button>
                                    </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentCreate;