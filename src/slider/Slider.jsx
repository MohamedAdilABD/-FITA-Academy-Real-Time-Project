import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt,FaClock } from 'react-icons/fa';

import './slider.css';
import Topbar from "../navbar/Topbar";
import About from "../about/About";
import Menu from "../placement/Menu";
import Category from "../category/Category";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import TestimonialDetail from "../testmonial/TestimonialDetail";

import fita1 from "../image/fita1.png";
import fita8 from "../image/fita8.png";

export default function Slider()
{
    return(
        <>
          <Topbar />
            
            <Container fluid className="p-0">
                <Carousel className="slider" controls={false} indicators={false} interval={3000} pause={true}>
                    <Carousel.Item>
                        <img src={fita1} alt="Slide 1" height={1100} className="d-block w-100 carousel-image" />
                        <Carousel.Caption className="text-center" style={{marginBottom:"50px"}}>
                            <Row>
                                <Col xs={12}>
                                    <h1 className="text-warning p-2 mb-1">
                                        FITA ACADEMY
                                    </h1>
                                    <h2 style={{color:"white",fontSize:"40px",marginBottom:"100px", fontWeight:"bold"}}>
                                        Get trained by Industry Experts via Instructor-led Live Online or Classroom Training
                                        with 100% Placement Support.
                                    </h2>
                                    <Link to='/register'>
                                        <Button variant="dark" className="custom-button m-2 p-3">Submit Your CV</Button>
                                    </Link>
                                    <Link to='/applier'>
                                        <Button variant="info" className="custom-button m-2 p-3">Recruiter Login</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={fita8} alt="Slide 2"  height={1100} className="d-block w-100 carousel-image" />
                        <Carousel.Caption className="text-center"  style={{marginBottom:"50px"}}>
                            <Row>
                                <Col xs={12}>
                                    <h1 className="text-warning p-2 mb-1 ">
                                        FITA ACADEMY
                                    </h1>
                                    <h2 style={{color:"white",fontSize:"40px",marginBottom:"90px", fontWeight:"bold"}}>
                                        LIVE Project. Get the opportunity to work on real-time projects that will provide you with deep experience.
                                    </h2>
                                    <Link to='/register'>
                                        <Button variant="dark"  className="custom-button m-2  p-3">Submit Your CV</Button>
                                    </Link>
                                    <Link to='/applier'>
                                        <Button variant="info"  className="custom-button m-2  p-3">Recruiter Login</Button>
                                    </Link>
                                   
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Container fluid className="bg-dark text-white text-center p-3">
                    <Row className="mt-5">
                    <Col xs={12} md={6} lg={3} >                        
                    <h5 className="text-warning mt-3"> 
                   <FaMapMarkerAlt  className="icon-size" />  Location </h5>
                   <address>
                    410, Villianur Main Rd, 
                    Sithananda Nagar,
                    Nellitope,         
                    Puducherry, 605005
                    </address>
                        </Col>

                        <Col xs={12} md={6} lg={3}>
                        <h5 className="text-warning mt-3">                 
                            <FaMapMarkerAlt  className="icon-size" />Landmark
                </h5>
                <p className="mt-3">Near IG Square, Puducherry</p>
                        </Col>

                        <Col xs={12} md={6} lg={3}>
                        <h5 className="text-warning mt-3"> 
                        <FaClock className="icon-size" />
                        Office Hours
                        </h5>
                        <p className="mt-3">
                        7.00 AM to 9.00 PM All Days.                        
                        </p>
                        </Col>

                        <Col xs={12} md={6} lg={3}>
                        <h5 className="text-warning mt-3"> 
                        <FaPhone className="icon-size" />
                        Phone 
                        </h5>
                        <p className="mt-3">
                        +91 93635 21112
                        </p>
                        </Col>
                    </Row>
                </Container>

                <About />
                <Category />
                <Menu />
                <TestimonialDetail/>
                <Contact />
                <Footer />

            </Container>
        </>
    )
}