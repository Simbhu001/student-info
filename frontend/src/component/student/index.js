import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ModalPopup from '../modal/edit-student';

export default function StudentTable() {

    const initialValues = {
        fName: '',
        lName: '',
        email: '',
        degeree: '',
        mobile: '',
        totalMarks: '',
    };

    const [students, updateStudents] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [editStudent, setEditStudent] = useState(null);
    const [show, setShow] = useState(false);

    const getApiData = async () => {
        await axios.get("http://localhost:5000/students").then((res) => {
            updateStudents(res.data.students);
        });
    }

    useEffect(() => {
        getApiData();
    }, []);

    const handleForm = (event) => {
        event.preventDefault();
        handleClose();

        if (editStudent) {
            axios.put(`http://localhost:5000/student/${editStudent._id}`, formValues)
                .then(res => {
                    updateStudents(res.data.students);
                })
            setEditStudent(null);
        } else {
            axios.post('http://localhost:5000/new/student', formValues)
                .then(res => {
                    updateStudents([...students, res.data.students]);
                })
        }
        setFormValues(initialValues)
    }

    const handleDelete = (student) => {
        console.log("studentID", student._id)
        axios.delete(`http://localhost:5000/student/${student._id}`).then(res => {
            return updateStudents(res.data.students)
        })
    };

    const handleEdit = (student) => {
        handleShow();
        setEditStudent(student);
        setFormValues(student)
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <ModalPopup
                handleClose={handleClose}
                show={show}
                editStudent={editStudent}
                handleForm={handleForm}
                handleOnChange={handleOnChange}
                formValues={formValues}
            />

            <form className='mt-5' onSubmit={handleForm}>
                <div className='row '>
                    <div className='col-xs-1 col-sm-1 col-md-3'></div>
                    <div className='col-xs-12 col-sm-12 col-md-6 border bg-success text-white rounded'>
                        <div className="row d-flex align-center justify-content-center">
                            <div className='row mt-3'>
                                <h3 className='text-center text-white mb-3'>STUDENT INFO</h3>
                                <div className=" form-group col-8">
                                    <label className='mb-2'>First Name :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter firstName"
                                        name='fName'
                                        onChange={handleOnChange}
                                        value={editStudent ? '' : (formValues.fName)}
                                    />
                                </div>
                                <div className=" form-group col-4">
                                    <label className='mb-2'>Last Name :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter lastName"
                                        name='lName'
                                        onChange={handleOnChange}
                                        value={editStudent ? '' : (formValues.lName)}
                                    />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className=" form-group col-12">
                                    <label className='mb-2'>Email :</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        name='email'
                                        onChange={handleOnChange}
                                        value={editStudent ? '' : (formValues.email)}
                                    />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className=" form-group col-12">
                                    <label className='mb-2'>Mobile :</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Mobile"
                                        name="mobile"
                                        onChange={handleOnChange}
                                        value={editStudent ? '' : (formValues.mobile)}
                                    />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className=" form-group col-6">
                                    <label className='mb-2'>Degeree :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Degeree"
                                        name='degeree'
                                        onChange={handleOnChange}
                                        value={editStudent ? '' : (formValues.degeree)}
                                    />
                                </div>
                                <div className=" form-group col-6">
                                    <label className='mb-2'>Total Marks :</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Total Marks"
                                        name='totalMarks'
                                        onChange={handleOnChange}
                                        value={editStudent ? '' : (formValues.totalMarks)}
                                    />
                                </div>
                            </div>
                            <div className='row mt-4 mb-4'>
                                <div className='d-grid '>
                                    <button
                                        type='submit'
                                        className='btn btn-primary'
                                    > Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-3'></div>
                </div>
            </form >
            <div className='table-responsive mb-5'>
                <table className=' mt-5 table table-striped table-bordered teble-hover text-center bg-light'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Degeree</th>
                            <th>Marks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (students.map((student, index) => (
                            <tr key={index}>
                                <td>{student._id}</td>
                                <td>{student.fName}</td>
                                <td>{student.lName}</td>
                                <td>{student.email}</td>
                                <td>{student.mobile}</td>
                                <td>{student.degeree}</td>
                                <td>{student.totalMarks}</td>
                                <td>
                                    <button
                                        className=" btn btn-danger px-3 mx-2"
                                        onClick={() => handleDelete(student)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-secondary px-4"
                                        onClick={() => handleEdit(student)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))) : <tr>
                            <td className='p-2' colSpan={8}>No Data</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}
