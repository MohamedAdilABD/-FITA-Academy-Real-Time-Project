import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './userlogin.css';
import Topbar from '../navbar/Topbar';

export default function Userlogin()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navi = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
          toast.error('Please fill in both fields');
          return;
        }
    
        try {
          const checkResponse = await axios.post('http://localhost:5000/fita/recruitercheck', {
            email: username
          });
    
          if (checkResponse.data.message === 'Recruiter exists.') {
      
            const loginResponse = await axios.post('http://localhost:5000/fita/recruiterlogin', {
              email: username,
              password: password
            });
    
            if (loginResponse.data.message === 'Login successful') {
              localStorage.setItem("email", username);
              toast.success("Login successfully!");
    
              // Clear the input fields after successful login
              setUsername('');
              setPassword('');
    
              
              setTimeout(() => {
                navi('/dashboard');
              }, 6000); 
              
            } else {
              toast.error("Invalid credentials. Please try again.");
            }
          } else {
            toast.error("User not found. Please check your email.");
          }
        } catch (err) {
          console.error(err);
          toast.error("An error occurred. Please try again.");
        }
    };


    return(
        <>

        <ToastContainer />
        
        <Topbar />
      
        <div className='recruiter' style={{ marginTop: "180px" }}>
            <h1 className='text-danger'>Recruiter Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="email" 
                        placeholder='User Name'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        placeholder='User Password'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
          
                <button 
                    type="submit" 
                    className='mt-4 w-100'
                    style={{ marginLeft: "5px", borderRadius: "25px" }}
                >
                    Login
                </button>
            </form>
        </div>
        </>
    )
}