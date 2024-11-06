import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../navbar/Topbar";
import './about.css';



export default function About()
{
    return(
        <>

        <Topbar />
        
        <div className="container-fluid bg-light  p-2">
           
            <div className=" about container text-center ">
            <h1 style={{fontWeight:"bold"}}> About Us </h1>
            <h5 className="text-center mb-5 m-3" style={{fontWeight:"bold"}} > Training & Placement In Fita </h5>
                <div className="row">

                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-6 mb-4">
                                <img className="img-fluid" src="https://lh3.googleusercontent.com/p/AF1QipOqMA3JTwEZ5cYQVepiYgJsSA_IgJ7A9YsAX68c=s1360-w1360-h1020" alt="Image1" style={{height:"200px", width:"100%", objectFit:"cover"}}/>
                            </div>

                            <div className="col-6 mb-4">
                                <img className="img-fluid" src="https://lh3.googleusercontent.com/p/AF1QipPrD2T7hIyzEV21pHosYnDswpgB33ZikATtG5uT=s1360-w1360-h1020" alt="Image2" style={{height:"200px", width:"100%", objectFit:"cover"}}/>
                            </div>

                            <div className="col-6 mb-4">
                                <img className="img-fluid" src="https://lh3.googleusercontent.com/p/AF1QipM7UUmg2aR1fH8KyjdcWfroRUhqJxmd_QCKM7Qe=s1360-w1360-h1020" alt="Image3" style={{height:"200px", width:"100%", objectFit:"cover"}}/>
                            </div>

                            <div className="col-6 mb-4">
                                <img className="img-fluid" src="https://lh3.googleusercontent.com/p/AF1QipMvegSXjFqtkJe_yU-tVxCxPtvhLoRlamQV_6rQ=s1360-w1360-h1020" alt="Image4" style={{height:"200px", width:"100%", objectFit:"cover"}}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-left mt-4 mt-md-0">
                        <h1>FITA Academy Pondichery</h1>
                        <p>FITA Academy, located in Pondicherry, is renowned as one oEADf the premier institutes offering training in a diverse range of programming languages, software technologies, and foreign languages. Our training programs are conducted by industry experts with extensive expertise and a minimum of 8 years of professional experience. </p>
                        <p>At FITA Academy, we also provide comprehensive placement support to our students, enabling them to secure positions in top-tier companies. Enrol in FITA Academy today and turn your aspirations of working for esteemed organizations into reality.</p>
                        <Link to='/register'>
                        <p className="btn btn-success py-3 px-5 mt-3">Submit Your CV</p>
                        </Link>
                    </div> 

                </div>

            </div>

        </div>
        </>
    )
}