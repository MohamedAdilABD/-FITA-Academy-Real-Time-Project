import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from '../navbar/Topbar';


export default function InstitutionSign()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [recruiterEmail, setRecruiterEmail] = useState(''); // State to hold the recruiter email
    const navi = useNavigate();
    const abc = localStorage.getItem("email");

    useEffect (()=>
        {
            if (!abc) {
                navi('/applier');
            }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
          toast.error('Please fill in both fields');
          return;
        }
    
        setLoading(true);
    
        try {
          const res = await axios.post('http://localhost:5000/fita/institution', {
            email: username,
            password: password
          });
    
          setLoading(false);
          console.log(res.data.message);
    
          if (res.status === 201) { 
            localStorage.setItem('email', username);
            toast.success('Registered successfully!');
            
            setUsername('');
            setPassword('');
            
            setTimeout(() => {
              navi('/fita');
            }, 7000); 
          } else {
            toast.error(res.data.message || 'Please check user data');
          }
        } catch (err) {
          setLoading(false);
          console.error(err);
          toast.error(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    const handleDelete = async () => {
        if (!recruiterEmail) {
          toast.error('Please provide an email to delete');
          return;
        }
    
        setLoading(true);
    
        try {
          const res = await axios.delete(`http://localhost:5000/fita/institutiondelete`, {
            data: { email: recruiterEmail }
          });
    
          setLoading(false);
          toast.success(res.data.message);
          
          setRecruiterEmail(''); 
        } catch (err) {
          setLoading(false);
          toast.error(err.response?.data?.message || 'An error occurred while deleting. Please try again.');
        }
    };

    return(
        <>

        <ToastContainer />

        <Topbar />

        <div className='recruiter' style={{ marginTop: "180px" }}>
            <h1 className='text-success'> Institution Register  </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="email" placeholder='User Name'  value={username} onChange={(e) => setUsername(e.target.value)}  />
                </div>
          
                <div>
                    <label>Password:</label>
                    <input type="password"  placeholder='User Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
          
                <button type="submit"  className='mt-2 w-100'  style={{ marginLeft: "5px", borderRadius: "25px" }}  disabled={loading}  >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>

            {/* Delete Recruiter Section */}
            <div className='mt-4'>
                <h2>Delete Institution</h2>
                <input type="email" placeholder='Recruiter Email'  value={recruiterEmail}  onChange={(e) => setRecruiterEmail(e.target.value)}  />
                <button onClick={handleDelete}  className='mt-4 w-50 bg-danger'  style={{ marginLeft: "5px", borderRadius: "25px" }}  disabled={loading} >
                    {loading ? 'Deleting...' : 'Delete Recruiter'}
                </button>
            </div>
        </div>
        </>
    );
};