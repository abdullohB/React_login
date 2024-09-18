import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Student() {

    const [loading, setLoading] = useState([true]);

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/users')
            .then(res => {
                setStudents(res.data); // Assuming res.data contains the student array
                setLoading(false)
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    if(loading){
        return(
           <Loading/>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>Student List
                                <Link to="/students/create" className="btn btn-primary float-end">Add student</Link>
                            </h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name1</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {students.length > 0 ? (
                                        students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                                <td>{student.password}</td>
                                                <td>
                                                    <Link to="" className="btn btn-success">Edit</Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" >Delete</button>
                                                </td>

                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3">No students available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;

// function Student(){
//     return (
//       <div> <h1>Studens </h1></div>
//     )
// }
// export default Student;