import React, { useState, useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./pages/Banner";
import Stats from "./pages/Stats";
import AboutSection from "./pages/AboutSection";
import PurchaseStep from "./pages/PurchaseStep";
import TestimonialSection from "./pages/TestimonialSection";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import "./css/App.css";
import ExamSection from "./pages/ExamSection";

function Main() {
    const [activeCategory, setActiveCategory] = useState("Exam Category 1");
    const examSectionRef = useRef(null); // Create a ref for the ExamSection

    const categories = [
        "Exam Category 1",
        "Exam Category 2",
        "Exam Category 3",
        "Exam Category 4",
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="main">
            <div className="w-full sticky top-0 z-30">
                <Navbar />
            </div>
            <div>
                <Banner scrollToExamSection={() => examSectionRef.current.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div className="absolute top-[510px] left-0 right-0">
                <Stats />
            </div>
            <ExamSection
                ref={examSectionRef}
                categories={categories}
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
            />
            <div>
                <AboutSection />
            </div>
            <div>
                <PurchaseStep />
            </div>
            <div>
                <TestimonialSection />
            </div>
            <div>
                <Faq />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Main;
