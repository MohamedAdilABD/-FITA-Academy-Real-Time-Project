import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './clients.css';
import Topbar from "../navbar/Topbar";
import Footer from "../footer/Footer";


export default function TestimonialSign()
{
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [photo, setPhoto] = useState(null);
    const [textarea, setTextarea] = useState('');
    const navi = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if required fields are filled
        if (!name || !course || !textarea) {
            toast.error("All fields except photo are required.");
            return;
        }

        // Check if textarea exceeds 50 words
        const wordCount = textarea.trim().split(/\s+/).length;
        if (wordCount > 50) {
            toast.error("Feedback must not exceed 50 words.");
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('course', course);
        
        // Append photo only if it's selected
        if (photo) {
            formData.append('photo', photo);
        }
        
        formData.append('textarea', textarea);

        try {
            await axios.post('http://localhost:5000/fita/Test', formData);
            toast.success('Testimonial submitted successfully!');

            // Reset form fields
            setName('');
            setCourse('');
            setPhoto(null);
            setTextarea('');

            setTimeout(() => {
                navi('/fita');
            }, 6000); 

        } catch (err) {
            toast.error(err.response ? err.response.data.message : 'Error submitting testimonial');
        }
    };


    return(
        <>
        
        <Topbar />
        
        <div className="container signtest mt-5">
            <div className="form">
                <h1>Submit Your Testimonial</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                        />
                    </div>
                        
                    <div>
                        <label>Course:</label>
                        <input
                                type="text"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                required
                        />
                    </div>
                    
                    <div>
                        <label>Photo URL (optional):</label>
                        <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>
                    
                    <div>
                        <label>Feedback:</label>
                        <textarea
                                value={textarea}
                                onChange={(e) => setTextarea(e.target.value)}
                                required
                                placeholder='Enter Your FeedBack'
                                
                        />
                    </div>
                    
                    <button className='btn btn-primary p-3 mt-2' type="submit">Submit Testimonial</button>
                </form>

                <ToastContainer />
                
            </div>
        </div>

        <Footer />
        </>
    )
}