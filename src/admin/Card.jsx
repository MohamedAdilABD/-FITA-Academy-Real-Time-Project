import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Nav, ToastContainer, Form, Button, Alert } from "react-bootstrap";
import Topbar from "../navbar/Topbar";
import Footer from "../footer/Footer";
import Testimoial from "../testmonial/Testimonial";
import './card.css';

export default function Card() {
    const [studentData, setStudentData] = useState([]);
    const [placementsData, setPlacementsData] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [activeTab, setActiveTab] = useState('student');
    const [filterVisible, setFilterVisible] = useState(false);
    const [filter, setFilter] = useState({ experience: "", course: "" });
    const experienceOptions = ["0-1","1-3", "3-5", "5+"];
    // const [email, setEmail] = useState(localStorage.getItem("email"));


    

    // Placement form state
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [placementCompany, setPlacementCompany] = useState('');
    const [position, setPosition] = useState('');
    const [course, setCourse] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [currentPlacementId, setCurrentPlacementId] = useState(null);

    const navi = useNavigate();
    const email = localStorage.getItem("email");

    useEffect(() => {
        const fetchData = async () => {
            if (!email) {
                navi('/applier');
                return;
            }
            await fetchStudents();
            await fetchPlacements();
        };
        fetchData();
    }, [email, navi]);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/fita/');
            setStudentData(response.data.message || []);
        } catch (err) {
            setError(err.response ? err.response.data.message : "Error fetching student data");
        }
    };

    const fetchPlacements = async () => {
        try {
            const response = await axios.get('http://localhost:5000/fita/placements');
            setPlacementsData(response.data.message || []);
        } catch (err) {
            setError(err.response ? err.response.data.message : "Error fetching placements data");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('photo', photo);
        formData.append('placementCompany', placementCompany);
        formData.append('position', position);
        formData.append('course', course);

        try {
            if (editMode) {
                // Update placement
                const response = await axios.put(`http://localhost:5000/fita/placement/update/${currentPlacementId}`, formData);
                setSuccess('Placement details updated successfully!');
            } else {
                // Create new placement
                const response = await axios.post('http://localhost:5000/fita/placement', formData);
                setSuccess('Placement details added successfully!');
            }
            resetForm();
            await fetchPlacements(); // Refresh placements
        } catch (err) {
            setError(err.response ? err.response.data.message : "Error adding/updating placement");
        }
    };

    const resetForm = () => {
        setName('');
        setPhoto(null);
        setPlacementCompany('');
        setPosition('');
        setCourse('');
        setEditMode(false);
        setCurrentPlacementId(null);
    };

    const handleEdit = (placement) => {
        setName(placement.name);
        setPhoto(null); // Keep current photo if not changing
        setPlacementCompany(placement.placementCompany);
        setPosition(placement.position);
        setCourse(placement.course);
        setEditMode(true);
        setCurrentPlacementId(placement._id);
    };

    const handleDelete = async (placementId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/fita/placement/delete/${placementId}`);
            if (response.status === 200) {
                setPlacementsData(prev => prev.filter(placement => placement._id !== placementId));
                setSuccess("Placement deleted successfully");
            } else {
                setError("Error deleting placement");
            }
        } catch (err) {
            setError("Error deleting placement");
        }
    };

    
    const handledelete = async (studentemail) => {
        try {
            const response = await axios.delete('http://localhost:5000/fita/delete', {
                data: { email: studentemail }
            });
    
    
            if (response.status === 200) {
                setStudentData(prev => prev.filter(student => student.email !== studentemail));
                setSuccess("User deleted successfully");
            } else {
                setError("Error deleting user");
            }
        } catch (err) {
            setError("Error deleting user");
        }
    };
    
    const logout = () => {
        localStorage.removeItem("email");
        navi('/fita');
    };

    const filteredData = useMemo(() => {
        return studentData.filter(student =>
            (filter.experience ? student.experience === filter.experience : true) &&
            (filter.course ? student.course === filter.course : true)
        );
    }, [studentData, filter]);

    if (error) return <p>{error}</p>;

    return (
        <>
            <ToastContainer />
            <Topbar />
            <div className="container-fluid bg-light p-5">
                <div className="container p-5 bg-light">
                    <h1 className="text-center text-danger">Dashboard For Students</h1>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 text-start">
                    <div className="mb-3">
                        <Link to='/fita' className="btn btn-danger" onClick={logout}> LOGOUT </Link>
                    </div>
                  
                    <button className="btn btn-primary mb-3" onClick={() => setFilterVisible(!filterVisible)}>
                        {filterVisible ? "Hide Filters" : "Show Filters"}
                    </button>
                    </div>

                    <div className="col-lg-6 col-sm-12 apply text-end">
                    <div className="mb-3 text-end">
                        <Link to='/institutionsign' className="btn btn-warning" > Register Institution </Link>
                    </div>

                    <div className="mb-3 text-end">
                        <Link to='/recruitersign' className="btn btn-info" > Register Recruiter </Link>
                    </div>
                    </div>
                    </div>

                    {filterVisible && (
                        <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-3">
                    <select 
                        value={filter.experience} 
                        className="w-50 p-2"
                        onChange={(e) => setFilter({ ...filter, experience: e.target.value })} 
                        style={{ borderRadius: "10px", marginLeft: "25%" }}
                    >
                        <option value="">Select Experience</option>
                        {experienceOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>



                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input 
                                    type="text" 
                                    className="w-50 p-2"
                                    placeholder="Filter By Course"
                                    style={{ borderRadius: "10px", marginLeft: "25%" }}
                                    value={filter.course} 
                                    onChange={(e) => setFilter({ ...filter, course: e.target.value })} 
                                />
                            </div>
                        </div>
                    )}

                    <h5 className="fs-2 text-success mt-3"> Registered Students Data </h5> 
                    <div className="d-flex justify-content-center w-100 mt-3 mb-5">
                        <Nav variant="tabs" activeKey={activeTab} onSelect={setActiveTab} className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey="student" onClick={() => setActiveTab('student')}>Student</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="placement" onClick={() => setActiveTab('placement')}>Placement</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="testimonials" onClick={() => setActiveTab('testimonials')}>Testimonials</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    {activeTab === 'student' && (
                        <div className="row stud">
                            {filteredData.map((student) => (
                                <div className="col-sm-12 col-md-6 col-lg-12 mb-4" key={student._id}>
                                    <div className="card p-2">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-12">
                                                <h5>{student.name}</h5>
                                                <img 
                                                    src={`http://localhost:5000/uploads/${student.photo}`} 
                                                    alt={student.name} 
                                                    className="img-fluid mb-2 ms-4 w-75" 
                                                    width={30} 
                                                    height={30} 
                                                />
                                            </div>
                                            <div className="col-lg-4 col-sm-12  mt-4">
                                                <p><strong>Phone:</strong> {student.phone}</p>
                                                <p><strong>Email:</strong> {student.email}</p>
                                                <p><strong>Portfolio:</strong> 
                                                    <a href={student.portfolioLink} target="_blank" rel="noopener noreferrer">{student.portfolioLink}</a>
                                                </p>
                                                <p><strong>Qualification:</strong> {student.qualification}</p>
                                                <p><strong>Passing Out Year:</strong> {student.passingOutYear}</p>
                                                <p><strong>Course:</strong> {student.course}</p>
                                                <p><strong>Experience:</strong> {student.experience}</p>
                                            </div>
                                            <div className="col-lg-4 col-sm-12 text-center" style={{ marginTop: "8%" }}>
                                                <a href={`http://localhost:5000/uploads/${student.resume}`} target="_blank" rel="noopener noreferrer" className="btn btn-info w-50 mb-2">Download Resume</a>
                                                <br />
                                                <button className="btn w-50 btn-danger" onClick={() => handledelete(student.email)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}


                    {activeTab === 'placement' && (
                        <div>
                            <h2 className="play pb-2">{editMode ? "Edit Placement Details" : "Add Placement Details"}</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">{success}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Student Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter student's name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPhoto">
                                    <Form.Label>Student Photo</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                        accept="image/*"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPlacementCompany">
                                    <Form.Label>Placement Company</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter placement company name"
                                        value={placementCompany}
                                        onChange={(e) => setPlacementCompany(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPosition">
                                    <Form.Label>Position</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter position"
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCourse">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter course name"
                                        value={course}
                                        onChange={(e) => setCourse(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" className="mt-4"  type="submit">
                                    {editMode ? "Update Placement" : "Add Placement"}
                                </Button>
                            </Form>

                            <h2 className="mt-5 pb-3"> <strong>Existing Placements </strong> </h2>
                            <div className="row">
                                {placementsData.map((placement) => (
                                    <div key={placement._id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <div className="card p-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{placement.name}</h5>
                                                {placement.photo && (
                                                    <img 
                                                        src={`http://localhost:5000/uploads/${placement.photo}`} 
                                                        alt={placement.name} 
                                                        className="img-fluid mb-3" 
                                                        style={{ maxHeight: '200px', objectFit: 'cover' }} 
                                                    />
                                                )}
                                                <p><strong>Company:</strong> {placement.placementCompany}</p>
                                                <p><strong>Position:</strong> {placement.position}</p>
                                                <p><strong>Course:</strong> {placement.course}</p>
                                                <div className="d-flex justify-content-between">
                                                    <Button 
                                                        variant="warning" 
                                                        onClick={() => handleEdit(placement)}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button 
                                                        variant="danger" 
                                                        onClick={() => handleDelete(placement._id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {activeTab === 'testimonials' && (
                        <div className="row ">
                
                <Testimoial />
                </div>

                )}

            </div>
            
            <Footer />
        </>
    );
}

