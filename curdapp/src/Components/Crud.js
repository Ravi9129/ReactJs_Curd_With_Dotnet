import React, { useState, useEffect, Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




function Crud() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const empdata = [
        {
            id: 1,
            name: "Ravi",
            age: 24,
            isActive: 1
        },
        {
            id: 2,
            name: "Ankita",
            age: 24,
            isActive: 1
        },
        {
            id: 3,
            name: "Ravi Rajput",
            age: 25,
            isActive: 0
        }


    ]
    const [data, setData] = useState([]);
    useEffect(() => {

        setData(empdata);
    }, [])

    const handleEdit = (id) => {

        //   alert(id);
        handleShow();
    }
    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this employee ") == true) {
            alert(id);
        }

    }

    const handleUpdate = () => {

    }

    return (

        <Fragment>


            <Container>

                <Row className='mt-4'>
                    <Col>
                        <input type='text' className='form-control' placeholder='Enter Name'></input>
                    </Col>
                    <Col>
                        <input type='text' className='form-control' placeholder='Enter Age'></input>
                    </Col>
                    <Col>
                        <input type='checkbox' ></input>
                        <label>IsActive</label>
                    </Col>
                    <Col>
                        <button className='btn btn-primary'>Submit</button>
                    </Col>
                </Row>
            </Container>

            <Table striped bordered hover className='mt-4'>
                <thead>
                    <tr>
                        <th>#</th>

                        <th>Name</th>
                        <th>Age</th>
                        <th>IsActive</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>

                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.isActive}</td>
                                        <td colSpan={2}>
                                            <button className='btn btn-primary' onClick={() => handleEdit(item.id)} >Edit</button> &nbsp;
                                            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }


                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify/Update Employee Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row className='mt-4'>
                        <Col>
                            <input type='text' className='form-control' placeholder='Enter Name'></input>
                        </Col>
                        <Col>
                            <input type='text' className='form-control' placeholder='Enter Age'></input>
                        </Col>
                        <Col>
                            <input type='checkbox' ></input>
                            <label>IsActive</label>
                        </Col>
                      
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </Fragment>

    )
}

export default Crud