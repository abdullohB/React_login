import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";



function Contact() {

    const [loading, setLoading] = useState([true]);

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/detail')
            .then(res => {
                setStudents(res.data); // Assuming res.data contains the student array
                setLoading(false)
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>Detail 11
                                <Link to="/students/create" className="btn btn-primary float-end">Add student</Link>
                            </h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>sex</th>
                                        <th>age</th>
                                        <th>วันที่</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {students.length > 0 ? (
                                        students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.sex}</td>
                                                <td>{student.age}</td>
                                                <td>{student.date}</td>
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
export default Contact;