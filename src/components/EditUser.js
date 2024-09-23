import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function EditUser(){

    const {id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    useEffect(()=> {
        axios.get('http://localhost:3010/edit/'+id)
        .then(res => {
           setName(res.data[0].name);
           setEmail(res.data[0].email);
           setPassword(res.data[0].password);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
        });
        
    }, [])
    const navigate = useNavigate();

    const hanldeSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3010/update/'+id, {name, email, password})
        .then(res => {
            if(res.data.update){
                navigate('/student');
            }else{
                alert("Not update");
            }
        })
    }

    return (

        // <h1>Edit User</h1>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>Edit User 
                                    <Link to="/student" className="btn btn-danger float-end">Back</Link>
                                </h3>
                            </div>
                            <div className="card-body">
                               <form  onSubmit={hanldeSubmit}>
                                <div className="mb-3">
                                    <label>name</label>
                                    <input type="text" name="name"   className="form-control" value={name}
                                    onChange={e => setName(e.target.value)}></input>
                                </div>
                                <div className="mb-3">
                                    <label>email</label>
                                    <input type="email" name="email"   className="form-control" value={email}
                                    onChange={e => setEmail(e.target.value)} ></input>
                                </div>
                                <div className="mb-3">
                                    <label>password</label>
                                    <input type="password" name="password"   className="form-control" value={password}
                                     onChange={e => setPassword(e.target.value)} ></input>
                                </div>
                                <div className="mb-3">
                                   
                                    <button type="submit" class="btn btn-primary">Update</button>
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
  export default EditUser;