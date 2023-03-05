import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalPopup(props) {

    const { handleClose, show, editStudent, handleForm, formValues, handleOnChange } = props;

    return (
        <div>
            {editStudent ? (<Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton >
                    <Modal.Title  >Update Student Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleForm}>
                        <div className='row'>
                            <div className='col-xs-1 col-sm-1 col-md-2'></div>
                            <div className='col-xs-10 col-sm-10 col-md-8'>
                                <div className="row">
                                    <div className='row mt-3'>
                                        <div className=" form-group col-8">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter firstName"
                                                name='fName'
                                                onChange={handleOnChange}
                                                value={formValues.fName}
                                            />
                                        </div>
                                        <div className=" form-group col-4">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter lastName"
                                                name='lName'
                                                onChange={handleOnChange}
                                                value={formValues.lName}
                                            />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className=" form-group col-12">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Email"
                                                name='email'
                                                onChange={handleOnChange}
                                                value={formValues.email}
                                            />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className=" form-group col-12">
                                            <label>Mobile</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Mobile"
                                                name="mobile"
                                                onChange={handleOnChange}
                                                value={formValues.mobile}
                                            />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className=" form-group col-6">
                                            <label>Degeree</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Degeree"
                                                name='degeree'
                                                onChange={handleOnChange}
                                                value={formValues.degeree}
                                            />
                                        </div>
                                        <div className=" form-group col-6 mb-4">
                                            <label>Total Marks</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Total Marks"
                                                name='totalMarks'
                                                onChange={handleOnChange}
                                                value={formValues.totalMarks}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xs-1 col-sm-1 col-md-2'></div>
                        </div>
                    </form >
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleForm}>
                        Submit Changes
                    </Button>
                </Modal.Footer>
            </Modal>) : ('')}
        </div>
    )
}
