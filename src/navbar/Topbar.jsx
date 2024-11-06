import React,{useState} from "react";
import { Navbar, Container, Nav, Button,NavDropdown } from "react-bootstrap";
import { IoHome, IoInformationCircle, IoBriefcase, IoPeople, IoChatbubbles, IoMail } from 'react-icons/io5';
import { FaBookReader, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import './topbar.css'
import logo1 from "../image/logo1.png"



export default function Topbar() 
{
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Navbar className="bg-dark navbar-custom" expand="md" fixed="top">
            <Container fluid className="startbar mt-5  mb-4 " >
                <Navbar.Brand as={Link} to="/fita" style={{marginRight:"100px"}} className="d-flex  align-items-center">
                    <img src={logo1} width={120} height={65} alt="Logo" className="logo  mb-4" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />

                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto  nav-links text-end">
                        <Nav.Link as={Link} to="/fita"  className="text-white">
                            <IoHome style={{ marginRight: "5px" }} /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="text-white">
                            <IoInformationCircle style={{ marginRight: "5px" }} /> About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category" className="text-white">
                            <FaBookReader style={{ marginRight: "5px" }} /> Category
                        </Nav.Link>
                        <Nav.Link as={Link} to="/applier" className="text-white">
                            <IoPeople style={{ marginRight: "5px" }} /> Institution
                        </Nav.Link>
                        <Nav.Link as={Link} to="/menu" className="text-white">
                            <MdWork style={{ marginRight: "5px" }} /> Placement
                        </Nav.Link>
                        <Nav.Link as={Link} to="/testmonialsign" className="text-white">
                            <IoChatbubbles style={{ marginRight: "5px" }} /> Testimonial
                        </Nav.Link>
                         
                        <NavDropdown  
                            title={ <span className="text-white text-capitalize " style={{fontWeight:"normal",fontSize:"15px"}}> <IoMail style={{ marginRight: "5px" }} /> Contact </span> }
                            id="basic-nav-dropdown"
                            show={showDropdown}
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                            className="hoverable-dropdown " >

                            <NavDropdown.Item as={Link} to="https://www.facebook.com/fitaacademy/">
                                <FaFacebook className="icon-size " style={{color:"blue"}} />
                                FaceBook
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="https://www.instagram.com/fita_academy/">
                                <FaInstagram className="icon-size " style={{color:"palevioletred"}}  />
                                Instagram
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="https://www.linkedin.com/company/fitaofficial/?originalSubdomain=in">
                                <FaLinkedin className="icon-size" style={{color:"rgb(41, 110, 201)"}} />
                                Linkedin
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="https://www.youtube.com/channel/UCIbVc86kI5Jnq4Ez_8_hhIg?view_as=subscriber">
                                <FaYoutube className="icon-size" style={{color:"red"}}  />
                                Youtube
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="https://x.com/i/flow/login?redirect_after_login=%2Ffitaacademy">
                                < FaXTwitter className="icon-size" style={{color:"black"}}  />
                                XTwitter
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    
                    <Nav className="ms-auto">
                        <Link to="/register">
                            <Button variant="success" className="custom-button p-2 m-1">Submit Your CV</Button>
                        </Link>
                        <Link to="/applier">
                            <Button variant="warning" className="custom-button p-2 m-1">Institution Login</Button>
                        </Link>
                        <Link to="/userlogin">
                            <Button variant="primary" className="custom-button p-2 m-1">Recruiter Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
