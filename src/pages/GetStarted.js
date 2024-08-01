import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../pages/Footer";
import "../components/card/CategoryStyles.css"; 

function GetStarted() {
    const navigate = useNavigate();

    const examData = [
        { id: 1, name: "SSC", logo: "/assets/clat.png" },
        { id: 2, name: "Exam Name", logo: "/assets/nlu.jpeg" },
        { id: 3, name: "Exam Name", logo: "/assets/clat.png" },
        { id: 4, name: "Exam Name", logo: "/assets/nlu.jpeg" },
        { id: 5, name: "Exam Name", logo: "/assets/clat.png" },
        { id: 6, name: "Exam Name", logo: "/assets/nlu.jpeg" },
        { id: 7, name: "Exam Name", logo: "/assets/clat.png" },
        { id: 8, name: "Exam Name", logo: "/assets/nlu.jpeg" },
        { id: 9, name: "Exam Name", logo: "/assets/clat.png" },
        { id: 10, name: "Exam Name", logo: "/assets/nlu.jpeg" },
        { id: 11, name: "Exam Name", logo: "/assets/clat.png" },
        { id: 12, name: "Exam Name", logo: "/assets/nlu.jpeg" },
    ];

    const handleExamClick = (name) => {
        navigate(`/category/${name}`);
    };

    return (
        <div className="category-page flex flex-col min-h-screen bg-white">
            <div className="sticky top-0 z-30 w-full bg-white shadow-md">
                <Navbar />
            </div>
            <div className="header-container flex flex-col items-center justify-center bg-white py-8 px-4">
                <div className="category-container max-w-[1268px] gap-[60px] mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center w-[813px] mt-[-50px] md:text-left mb-6 md:mb-0">
                        <h1 className="text-[40px] font-[700] mb-2">Discover Your Path to Legal Mastery</h1>
                        <p className="text-gray-600 text-[22px]">
                            Browse Our Extensive Range of Law Exam Categories and Find the Perfect Fit for Your Career Goals. Unlock detailed insights, tailor-made study plans, and expert resources to excel in your exams. Your journey to becoming a legal professional starts here.
                        </p>
                    </div>
                    <div className="illustration-container">
                        <img src="/assets/getStartedIll.png" alt="Illustration" className="w-[402px] h-auto" />
                    </div>
                </div>
            </div>
            <div className="exam-grid bg-[#F3F3FF] py-6">
                <div className="max-w-[1268px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {examData.map((exam) => (
                        <div
                            key={exam.id}
                            className="exam-card bg-white p-4 shadow-md rounded-lg flex flex-col items-center justify-center cursor-pointer"
                            onClick={() => handleExamClick(exam.name)}
                        >
                            <img src={exam.logo} alt={`${exam.name} Logo`} className="w-20 rounded-full h-20 mb-4" />
                            <p className="text-lg font-medium">{exam.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mt-auto">
                <Footer />
            </div>
        </div>
    );
}

export default GetStarted;
