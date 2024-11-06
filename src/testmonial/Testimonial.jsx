import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import { IoIosQuote } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './testimonial.css';


export default function Testimonial()
{
    const [clients, setClients] = useState([]);
    const email = localStorage.getItem("email");
    
    const navi=useNavigate();

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('http://localhost:5000/fita/Tests');
                console.log(response.data);
                setClients(response.data);
            } catch (err) {
                console.error('Error fetching testimonials:', err);
            }
        };
        if (!email) {
            navi('/applier');
            return;
        }

        fetchTestimonials();
      
    }, [email, navi]);

    const toggleStatus = async (id, currentStatus) => {
        const newStatus = 1; // Toggle between 0 and 1
        try {
            const response = await axios.put(`http://localhost:5000/fita/UpdateStatus/${id}`, { status: newStatus });
            // console.log(response.status)
            setClients(prevClients =>
                prevClients.map(client =>
                    client._id === id ? { ...client, status: newStatus } : client
                )
            );

            // setTimeout(()=>
            //     {
            //         navi('/fita')
            //     }, 7000)

            console.log(response.status)

            toast.success('Testimonial Added successfully!');
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error("Error updating status");

        }
    };

    const deleteTestimonial = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/fita/Testdelete/${id}`);
            setClients(prevClients => prevClients.filter(client => client._id !== id));
            toast.success('Testimonial Deleted successfully!');

        } catch (error) {
            console.error('Error deleting testimonial:', error);
            toast.error('Error Occur In Deleting!');

        }
    };


    return(
        <>

        <ToastContainer />
        
        <div className="container-fluid bg-light ">
            <div className="container pb-3" id="client">
                <h1 className="text-dark" style={{ fontWeight: "bold" }}>Testimonials</h1>
                <h2 className="text-center m-3">What Students Say</h2>

                
                    <Row className="testimonial-row">
                        {clients.map(client => (
                            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={client._id}>
                                <div className="card" style={{ height: "400px" }}>
                                    <div className="card-title d-flex align-items-center">
                                        <span className="quote"><IoIosQuote /></span>
                                        <div>{Array(client.stars).fill().map((_, starIndex) => (
                                            <span className="star" key={starIndex}><AiOutlineStar /></span>
                                        ))}</div>
                                    </div>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <p className="card-text">{client.textarea}</p>
                                    </div>
                                    <div className='row p-2'>
                                        <div className='col-lg-6 col-sm-12 ps-5'>
                                            <button
                                                className={`btn ${client.status === 1 ? 'btn-success' : 'btn-warning'}`}
                                                onClick={() => toggleStatus(client._id, client.status)}
                                            >
                                                {client.status === 1 ? 'Approve' : 'Pending'}
                                            </button>
                                        </div>
                                        <div className='col-lg-6 col-sm-12 ps-5'>
                                            <button className="btn btn-danger" onClick={() => deleteTestimonial(client._id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex align-items-center">
                                        <img
                                            src={client.photo}
                                            className="card-img-end"
                                            alt={client.name}
                                            style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}
                                        />
                                        <div className="details ms-3">
                                            <h5 className="mb-0">{client.name}</h5>
                                            <h6 className="card-course">{client.course}</h6>
                                            <p className="mb-0 text-muted">{client.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    
            </div>
          
        </div>
        </>
    )
}