import React from "react";

import './category.css';
import Topbar from "../navbar/Topbar";

export default function Category()
{
    return(
        <>
        
        <Topbar />

        <div className="cat container-fluid bg-light">

           <div className="container text-center pb-5 ">
                <h1>Explore By Category</h1>
                <h4 className="text-center" style={{fontWeight:"bold"}} >  Top Courses In Fita </h4>
           </div>

           <div className="container ">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card cat-item p-2 h-100">
                            <img className="img-fluid" src="https://media.istockphoto.com/id/1803992649/vector/software-development-coding-process-concept-programming-testing-cross-platform-code-app-on.jpg?s=612x612&w=0&k=20&c=9JX_Uhk0YSIqakQEXiSjo5NutvD4C8XOGIMc1cGRhiM=" alt="image-a1" style={{height:"150px", width:"100%", objectFit:"cover"}} />
                            <div className="card-body">
                                <h4>Software Development</h4>
                                <p>C, C++, Java, Python</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card cat-item p-2">
                            <img className="img-fluid" src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="image-a2" style={{height:"150px", width:"100%", objectFit:"cover"}}/>
                            <div className="card-body">
                                <h4>Web Development</h4>
                                <p>Web Design, Full stack, Mern, Mean</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card cat-item p-2">
                            <img className="img-fluid " src="https://t4.ftcdn.net/jpg/02/14/36/43/360_F_214364367_ybIaCyV7swPGFwA231CGoy0sMlVJZSxO.jpg" alt="image-a3" style={{height:"150px", width:"100%", objectFit:"cover"}} />
                            <div className="card-body">
                                <h4>Mobile Development</h4>
                                <p>React Native, Flutter, Swift, Android</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card cat-item p-2">
                            <img className="img-fluid" src="https://www.fitaacademy.in/includes/assets/img/blog/software-testing.jpg" alt="image-a4" style={{height:"150px", width:"100%", objectFit:"cover"}} />
                            <div className="card-body">
                                <h4>Software Testing</h4>
                                <p>Manual Testing, Selenium, Appium</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card cat-item p-2">
                            <img className="img-fluid" src="https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing.jpg" alt="image-a5" style={{height:"150px", width:"100%", objectFit:"cover"}} />
                            <div className="card-body">
                                <h4>Cloud Computing</h4>
                                <p>AWS, Azure, Devops, Google Cloud</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card cat-item p-2">
                            <img className="img-fluid" src="https://t3.ftcdn.net/jpg/04/37/03/66/360_F_437036699_kegqPjnOCtxVpQlYDKGtmN9hgdu6HaDr.jpg" alt="image-a6" style={{height:"150px", width:"100%", objectFit:"cover"}} />
                            <div className="card-body">
                                <h4>Data Science</h4>
                                <p>Python, R, SAS, Tableau, Excel</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card cat-item p-2">
                            <img className="img-fluid" src="https://t3.ftcdn.net/jpg/03/17/83/00/360_F_317830022_t2c7ZhvWlp68eumsnI4q4Bnw267bPwB9.jpg" alt="image-a7" style={{height:"150px", width:"100%", objectFit:"cover"}} />
                            <div className="card-body">
                                <h4>Digital Marketing</h4>
                                <p>SEO, SEM, SMM, Content Writing</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card cat-item p-2">
                            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysfjLLa7cJnCDfJRBL48zqmHujG2nyFzFVQ&s" alt="image-a8" style={{height:"150px", width:"100%", objectFit:"cover"}} />
                            <div className="card-body">
                                <h4>Design</h4>
                                <p>Ux/Ui, Graphic, Animation, Video</p>
                            </div>
                        </div>
                    </div>

                </div>
           </div>

        </div>

        </>
    )
}