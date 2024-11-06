import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-bootstrap";
import "../admin/card.css";
import Topbar from "../navbar/Topbar";
import Footer from "../footer/Footer";

export default function Dashboard()
{
    const [studentData, setStudentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [courseFilter, setCourseFilter] = useState("");
    const [experienceFilter, setExperienceFilter] = useState("");
    const [passingOutYearFilter, setPassingOutYearFilter] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    
    const navi = useNavigate();
    const abc = localStorage.getItem("email");
    const experienceOptions = ["0-1", "1-3", "3-5", "5+"];
    const passingOutYearOptions = ["2018","2019","2020", "2021", "2022", "2023", "2024", "2025","2026","2027","2028","2029","2030","All"];

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/fita/');
                setStudentData(response.data.message);
                setLoading(false);
            } catch (err) {
                setError(err.response ? err.response.data.Message : "Error fetching data");
                setLoading(false);
            }

            if (!abc) {
                navi('/userlogin');
            }
        };

        fetchStudentData();
    }, [abc, navi]);

    const handleDelete = async (email) => {
        try {
            const response = await axios.delete('http://localhost:5000/fita/delete', {
                data: { email }
            });

            if (response.status === 200) {
                setStudentData(studentData.filter(student => student.email !== email));
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

    const filteredStudents = studentData.filter(student => {
        const matchesCourse = courseFilter ? student.course && student.course.includes(courseFilter) : true;
        const matchesExperience = experienceFilter && experienceFilter !== "All"
            ? student.experience && student.experience.toString() === experienceFilter 
            : true;
        const matchesPassingOutYear = passingOutYearFilter && passingOutYearFilter !== "All"
            ? student.passingOutYear && student.passingOutYear.toString() === passingOutYearFilter
            : true;

        return matchesCourse && matchesExperience && matchesPassingOutYear;
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return(
        <>
        
        <ToastContainer />
        
        <Topbar />
        
        <div className=" container-fluid bg-light p-1">
            <div className="container p-3 bg-light">
                <h1 className="text-center pb-4">Student Dashboard</h1>

                    {/* Filter Toggle Button */}
                    <div className="mb-3">
                        <button className="btn btn-success" onClick={() => setShowFilters(!showFilters)}>
                            {showFilters ? "Hide Filters" : "Filter Students Data"}
                        </button>
                        <Link to='/fita' className="btn btn-danger ms-3" onClick={logout}> LOGOUT </Link>
                    </div>

                    {/* Conditional Rendering of Filters */}
                    {showFilters && (
                        <div className="mb-3">
                            <div className="dash  row">
                                <div className="col-lg-4 col-sm-12  ">
                                    <input 
                                        type="text" 
                                        placeholder="Course "
                                        value={courseFilter} 
                                        onChange={(e) => setCourseFilter(e.target.value)} 
                                    />
                                </div>

                                <div className="col-lg-4 col-sm-12  ">
                                    <select  
                                        className="select w-100"
                                        style={{ borderRadius: "5px" }}
                                        value={experienceFilter} 
                                        onChange={(e) => setExperienceFilter(e.target.value)} 
                                    >
                                        <option value="">Select Experience</option>
                                        {experienceOptions.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-lg-4 col-sm-12 ">
                                    <select  
                                        className="select w-100"
                                        style={{ borderRadius: "5px" }}
                                        value={passingOutYearFilter} 
                                        onChange={(e) => setPassingOutYearFilter(e.target.value)} 
                                    >
                                        <option value="">Select Passing Out Year</option>
                                        {passingOutYearOptions.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    <h5 className="fs-2 mt-3 text-primary">Student Data</h5>
                    <div className="row">
                        {filteredStudents.map((student) => (
                            <div className="col-sm-12 col-md-6 col-lg-12 mb-4" key={student._id}>
                                <div className="card p-3">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-12">
                                            <h5>{student.name}</h5>
                                            <img 
                                                src={`http://localhost:5000/uploads/${student.photo}`} 
                                                alt={student.name} 
                                                className="img-fluid mb-2 ms-3 w-75" 
                                                width={30} 
                                                height={30}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mt-5 text-left ps-5">
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
                                        <div className="col-lg-4 col-sm-12 text-center" style={{ marginTop: "10%" }}>
                                            <a href={`http://localhost:5000/uploads/${student.resume}`} target="_blank" rel="noopener noreferrer" className="btn btn-info w-50 mb-2">Download Resume</a>
                                            <br />
                                            <button className="btn w-50 btn-danger" onClick={() => handleDelete(student.email)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        <Footer />        
        </>
    )
}