import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Topbar from "./navbar/Topbar";
import Register from "./students/Register";
import Applier from "./recuiter/Applier";
import Slider from "./slider/Slider";
import About from "./about/About";
import Category from "./category/Category";
import Menu from "./placement/Menu";
import Card from "./admin/Card";
import Nopage from "./Nopage";
import PlacementForm from "./placement/PlacementForm";
import Contact from "./contact/Contact";
import Dashboard from "./user/Dashboard";
import Userlogin from "./user/Userlogin";
import RecruiterSign from "./user/RecruiterSign";
import InstitutionSign from "./recuiter/InstitutionSign";
import Testimonial from "./testmonial/Testimonial";
import TestimonialSign from "./testmonial/TestmonialSign";
import TestimonialDetail from "./testmonial/TestimonialDetail";


export default function Main()
{
    return(
        <>
        
        <BrowserRouter>
        
        <Routes>

            <Route path="/" element={<Slider />} />
            <Route path="/topbar" element={<Topbar /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/applier" element={<Applier />} />
            <Route path="/about" element={<About /> } />
            <Route path="/category" element={<Category />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/placement" element={<PlacementForm />} /> */}
            <Route path="/userlogin" element={<Userlogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recruitersign" element={<RecruiterSign />} />
            <Route path="/institutionsign" element={<InstitutionSign />} />
            <Route path="/testmonialsign" element={<TestimonialSign />} />
            <Route path="/testmonial" element={<Testimonial />} />
            <Route path="/testimonialdetail" element={<TestimonialDetail />} />

        </Routes>

        </BrowserRouter>

        </>
    )
}