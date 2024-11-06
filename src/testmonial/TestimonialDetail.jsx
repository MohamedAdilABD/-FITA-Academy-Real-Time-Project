import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import { IoIosQuote } from 'react-icons/io';
import './testimonial.css';

export default function TestimonialDetail()
{
    const [clients, setClients] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerRow = 4;
    const moveBy = 2;

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('http://localhost:5000/fita/Tests');
                setClients(response.data);
            } catch (err) {
                console.error('Error fetching testimonials:', err);
            }
        };

        fetchTestimonials();
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            const nextIndex = prevIndex + moveBy;
            return nextIndex >= clients.length - itemsPerRow + 1 ? 0 : nextIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => {
            const prevIndexNew = prevIndex - moveBy < 0 ? clients.length - itemsPerRow + 1 : prevIndex - moveBy;
            return prevIndexNew;
        });
    };

    const totalPages = Math.ceil(clients.length / moveBy);


    return(
        <>
        <div className="container pb-3 test">
            <h1 className="text-dark" style={{ fontWeight: "bold" }}>Testimonials</h1>
            <h2 className="text-center mt-2">What Students Say</h2>
            <div className="carousel-wrapper">
                <button className="carousel-button left" onClick={handlePrev}>&lt;</button>
                <Row className="testimonial-row">
                {clients.length > 0 ? (clients.slice(currentIndex, currentIndex + itemsPerRow)
                .filter(datas =>     datas.status ==1).map(client => (
                            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={client._id}>
                                <div className="card">
                                    <div className="card-title d-flex align-items-center">
                                        <span className="quote"><IoIosQuote /></span>
                                        <div>{Array(client.stars).fill().map((_, starIndex) => (
                                            <span className="star" key={starIndex}><AiOutlineStar /></span>
                                        ))}</div>
                                    </div>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <p className="card-text">{client.textarea}</p>
                                    </div>
                                    <div className="card-footer d-flex align-items-center">
                                        <img
                                            src={client.photo}
                                            className="card-img-end"
                                            alt={client.name}
                                        />
                                        <div className="details ms-3">
                                            <h5 className="mb-0 text-primary">{client.name}</h5>
                                            <h6 className="card-course">{client.course}</h6>
                                            <p className="mb-0 text-muted">{client.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    ) : (
                        <p>No approved testimonials found.</p>
                    )}
                </Row>
                <button className="carousel-button right" onClick={handleNext}>&gt;</button>
            </div>
            <div className="indicators mt-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${currentIndex / moveBy === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index * moveBy)}
                    />
                ))}
            </div>
        </div>
        </>
    )
}