import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './register.css';
import Topbar from "../navbar/Topbar";

export default function Register()
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        passingOutYear: '',
        resume: null,
        course: '',
        experience: '',
        photo: null,
        position: '',
        portfolioLink: ''
    });

    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name || !formData.email || !formData.phone || !formData.qualification || 
            !formData.passingOutYear || !formData.resume || !formData.course || 
            !formData.experience || !formData.photo || !formData.position) {
            toast.error("Please fill out all required fields.");
            return;
        }

        const submissionData = new FormData();
        for (const key in formData) {
            submissionData.append(key, formData[key]);
        }

        try {
            const url = isUpdateMode 
                ? 'http://localhost:5000/fita/update' 
                : 'http://localhost:5000/fita/register'; 

            const res = await axios.post(url, submissionData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.data.message === 'User Added' || res.data.message === 'User Updated') {
                toast.success(isUpdateMode ? "Update successful!" : "Registration successful!");
                setTimeout(() => {
                    window.location.href = '/fita'; 
                }, 8000);
            } else {
                toast.error("Operation failed.");
            }
        } catch (error) {
            if (error.response) {
                const message = error.response.data.message || "An error occurred.";
                toast.error(message);
            } else {
                toast.error("Network error, please try again.");
            }
        }
    };


    return(
        <>

        <ToastContainer />

        <Topbar />

        <Container style={{ marginTop: "150px" }}>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="m-2 text-primary mb-4">{isUpdateMode ? "Update Your Info" : "Fita Students Form"}</h1>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                {['name', 'email', 'phone', 'qualification', 'course', 'position'].map((field, index) => (
                                    <div className="form-group" key={index}>
                                        <label className="form-label required">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            className="form-control"
                                            placeholder={`Enter your ${field}`}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                ))}
                                    
                            </Col>

                            <Col md={6}>
                                {['experience', 'portfolioLink'].map((field, index) => (
                                    <div className="form-group" key={index}>
                                        <label className={field === 'portfolioLink' ? "form-label" : "form-label required"}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                        {field === 'experience' ? (
                                            <select
                                                className="form-control"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                required
                                            >
                                            <option value="">Select Experience Level</option>
                                            {['0-1', '1-3', '3-5', '5+'].map(exp => (
                                                <option key={exp} value={exp}>{exp} years</option>
                                            ))}
                                             </select>
                                        ) : (
                                            <input
                                                type="url"
                                                className="form-control"
                                                placeholder="Enter your portfolio link"
                                                name="portfolioLink"
                                                value={formData.portfolioLink}
                                                onChange={handleChange}
                                            />
                                            )}
                                    </div>
                                ))}

                                <div className="form-group">
                                    <label className="form-label required">Passing Out Year</label>
                                    <select
                                        className="form-control"
                                        name="passingOutYear"
                                        value={formData.passingOutYear}
                                        onChange={handleChange}
                                        required
                                    >
                                    <option value="">Select Year</option>
                                    {[...Array(30).keys()].map(year => {
                                        const yearValue = new Date().getFullYear() - year;
                                        return (
                                            <option key={yearValue} value={yearValue}>
                                                        {yearValue}
                                                    </option>
                                        );
                                    })}
                                    </select>
                                </div>
                                   

                                <div className="form-group">
                                    <label className="form-label required">Resume (PDF)</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".pdf"
                                        name="resume"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label className="form-label required">Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        name="photo"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </Col>
                        </Row>

                            <Button variant="success" className="mt-2" type="submit">
                                {isUpdateMode ? "Update" : "Apply"}
                            </Button>
                            <Button variant="secondary" className="mt-2 ms-4" onClick={() => setIsUpdateMode(!isUpdateMode)}>
                                {isUpdateMode ? "Switch to Apply" : "Switch to Update"}
                            </Button>
                    </form>
                </Col>
            </Row>
        </Container>
        </>
    )
}