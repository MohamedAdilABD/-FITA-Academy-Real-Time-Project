import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt,FaClock } from 'react-icons/fa'; 
import {  FaFacebook, FaInstagram, FaLinkedin,  FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer()
{
    return(
        <>
        <Container fluid className="footer bg-dark text-white py-3 mt-3">
            <Row className="d-flex justify-content-between mt-3">
                <Col md="3" className="text-center text-md-left">
                    <h2 className='m-2 mb-3' > Follow us </h2>
                    <p> <FaFacebook className="icon-size " style={{color:"white"}} />  Facebook </p>
                    <p> <FaInstagram className="icon-size " style={{color:"white"}}  /> Instagram </p>
                    <p> <FaYoutube className="icon-size" style={{color:"white"}}  /> Youtube </p>
                    <p> < FaXTwitter className="icon-size" style={{color:"white"}}  /> XTwitter </p>
                    <p> <FaLinkedin className="icon-size" style={{color:"white"}} /> Linkedin </p>
                </Col>

                <Col md="3" className="text-center text-md-right">
                    <h2 className='mt-2 mb-3' > For Business </h2>
                    <p style={{marginRight:"53px"}}>Hire From FITA</p>
                    <p style={{marginRight:"102px"}}> Careers </p>
                    <p style={{marginLeft:"3px"}}> Business opportunities </p>
                    <p style={{marginRight:"24px"}}> Corporate Training </p>
                    <p> Become an Instructor </p>
                </Col>

                <Col md="3" className="text-center text-md-left">
                     <h2 className='mt-2 mb-3' > Testimonials </h2>
                    <p> FITA Academy Reviews </p>
                    <p style={{marginRight:"16px"}}>Student Testimonials </p>
                    <p style={{marginRight:"48px"}}>Success Stories</p>
                </Col>

                <Col md="3" className="text-center text-md-right">
                    <h2 className='mt-2 mb-3' > Resources </h2>
                    <p style={{marginRight:"100px"}}> Blog </p>
                    <p style={{marginLeft:"8px"}}>Interview Questions </p>
                    <p style={{marginRight:"68px"}}>Tutorials </p>
                    <p style={{marginLeft:"48px"}}>Free Placement Session</p>
                </Col>
            </Row>

            <hr className='m-5'></hr>

            <Container>
                <Row className='m-5 text-start'>
                    <h1 className='mb-3 text-start'> Trending Courses </h1>
                    <p> Java Training in Pondicherry | Selenium Training in Pondicherry | Python Training in Pondicherry |
                        Software Testing Course in Pondicherry | Digital Marketing Course in Pondicherry | DevOps Training in Pondicherry  |
                        AWS Course in Pondicherry | Data Science Course in Pondicherry | Data Analytics Course in Pondicherry | CCNA Course in Pondicherry | Salesforce Training in Pondicherry |
                        Full Stack Developer Course in Pondicherry | Artificial Intelligence Course in Pondicherry | Ethical Hacking Course in Pondicherry | RPA Training in Pondicherry | Spoken English Classes in Pondicherry |
                        IELTS Coaching in Pondicherry | Android Training in Pondicherry | German Classes in Pondicherry | Cyber Security Course in Pondicherry | UI UX Designer Course in Pondicherry |
                        French Class in Pondicherry | Tally course in Pondicherry | GST Training In Pondicherry | Graphic Design Courses in Pondicherry | AngularJS Training in Pondicherry | React JS Training in Pondicherry |
                        Machine Learning Course in Pondicherry | MERN Stack Course in Pondicherry | Advanced Excel Training in Pondicherry
                    </p>
                </Row>
            </Container>

            <hr className='m-5'></hr>

            <Container fluid className="bg-dark text-white text-center ">
                <Row >
                    <Col xs={12} md={6} lg={3} >                        
                        <h5 className="text-warning "> 
                        <FaMapMarkerAlt  className="icon-size" />  Location </h5>
                        <address>
                            410, Villianur Main Rd, 
                            Sithananda Nagar,
                            Nellitope,         
                            Puducherry, 605005
                        </address>
                    </Col>

                    <Col xs={12} md={6} lg={3}>
                        <h5 className="text-warning ">                 
                            <FaMapMarkerAlt  className="icon-size" />Landmark
                        </h5>
                        <p className="mt-3">Near IG Square, Puducherry</p>
                    </Col>

                    <Col xs={12} md={6} lg={3}>
                        <h5 className="text-warning "> 
                            <FaClock className="icon-size" />
                            Office Hours
                        </h5>
                        <p className="mt-1">
                            7.00 AM to 9.00 PM All Days.                        
                        </p>
                    </Col>

                    <Col xs={12} md={6} lg={3}>
                        <h5 className="text-warning"> 
                            <FaPhone className="icon-size" />
                            Phone 
                        </h5>
                        <p className="mt-3">
                            +91 93635 21112
                        </p>
                    </Col>
                </Row>

            </Container>

            <hr className='m-3'></hr>

            <Row className="d-flex justify-content-between m-3">
                <Col md="6" className="text-center mt-2 text-md-left">
                    <h3 style={{fontSize:'18px'}}>Copyright © 2024 Fita academy</h3>
                </Col>

                <Col md="6" className="text-center mt-2 text-md-right">
                    <h3 style={{fontSize:'18px'}}>Designed and Developed by React Team</h3>
                </Col>
            </Row>

        </Container>
        </>
    )
}