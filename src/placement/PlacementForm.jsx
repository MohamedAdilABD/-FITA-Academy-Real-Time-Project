import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function PlacementForm()
{
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [placementCompany, setPlacementCompany] = useState('');
    const [position, setPosition] = useState('');
    const [course, setCourse] = useState('');

    const navi = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('photo', photo);
        formData.append('placementCompany', placementCompany);
        formData.append('position', position);
        formData.append('course', course);
    
        try {
          await axios.post('http://localhost:5000/fita/placement', formData);
          toast.success('Placement details added successfully!');
    
          // Reset form fields
          setName('');
          setPhoto(null);
          setPlacementCompany('');
          setPosition('');
          setCourse('');
    
          // Navigate after a delay to allow the user to see the success message
          setTimeout(() => {
            navi('/fita');
          }, 6000); // Adjust the timeout as needed
        } catch (err) {
          toast.error(err.response ? err.response.data.message : 'Error adding placement');
        }
    };

    return(
        <>
        <div>

            <ToastContainer /> {/* Ensure the ToastContainer is present */}
        
            <div className='container Placesign'>
                <div className='form'>
                    <h2>Add Placement Details</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter student's name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formPhoto">
                            <Form.Label>Student Photo</Form.Label>
                            <Form.Control type="file" onChange={(e) => setPhoto(e.target.files[0])} accept="image/*" required />
                        </Form.Group>

                        <Form.Group controlId="formPlacementCompany">
                            <Form.Label>Placement Company</Form.Label>
                            <Form.Control type="text" placeholder="Enter placement company name" value={placementCompany} onChange={(e) => setPlacementCompany(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formPosition">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" placeholder="Enter position" value={position} onChange={(e) => setPosition(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formCourse">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" placeholder="Enter course name" value={course} onChange={(e) => setCourse(e.target.value)} required />
                        </Form.Group>

                        <Button variant="primary" className='mt-5' type="submit"> Add Placement </Button>
                    </Form>
                </div>
            </div>
        </div>
        </>
    );
};