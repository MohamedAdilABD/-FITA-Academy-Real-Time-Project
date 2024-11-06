import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Container } from "react-bootstrap";
import './contact.css';



export default function Contact()
{

 
    return(
        <>
        <Container fluid className="bg-light pb-2 ">
            
            <Container>
                <h1 className="text-center p-2 pt-5"> CONTACT US </h1>
                
                <div className=" contact  " id="contact" >
                    <div className="card card0 border-0 pt-1 pb-3">
                        <div className="row m-2">
                            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12" >
                                <div className="card1">
                                    <div className="row border-line">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihQFng_SlNMMnmpY-jtIU3_tf4HmtKilP8A&s" alt="Contact" className="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="card2 d-flex card border-0 px-3 py-4">
                                    <div className="row">
                                        <div className="row text-center mb-3">
                                            <h6> Contact With  <strong> Fita Accedamy </strong> </h6>
                                        </div>   

                                        <div className="row px-3 mt-2 mb-4">
                                            <div className="line" />
                                            <small className="or text-center"> OR </small>
                                            <div className="line" />
                                        </div>
                       
                                        <form action="https://api.web3forms.com/submit" method="POST">
                                            <input type="hidden" name="access_key" value="a6910190-7968-472c-84d6-b33bac338b4c" />

                                            <div className="row px-3">  
                                                <input type="text" name="name" placeholder="Enter Your Name" />
                                            </div> 

                                            <div className="row px-3 mt-3"> 
                                                <input type="email" name="email" placeholder="Enter Your Email_Id" />
                                            </div>

                                            <div className="row px-3 mt-3">
                                                <textarea placeholder="Enter Your Message" />
                                            </div>
                        
                                            <button className="button mt-3 w-50"   type="submit"> Send Message <FaArrowRight style={{marginLeft:"10px"}} /> </button>
                                        </form>
                    
                                    </div>
                                </div>                 
                            </div>
                  
                        </div>
                    </div>
                </div>      
            </Container>

        </Container>
        </>

    )
}
