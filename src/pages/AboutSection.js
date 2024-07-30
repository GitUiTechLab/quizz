import React from "react";
import { useNavigate } from "react-router-dom";
import ParaList from "./ParaList";

const paraLists = [
    {
        url: "/assets/Frame2.png",
        title: "Comprehensive Courses",
        para: "Our meticulously crafted courses cover all essential legal topics, ensuring a thorough understanding of the subject matter.",
    },
    {
        url: "/assets/Frame3.png",
        title: "Realistic Mock Tests",
        para: "Our mock tests simulate the actual exam experience, allowing you to assess your strengths and weaknesses effectively.",
    },
    {
        url: "/assets/Frame4.png",
        title: "Detailed Performance Analysis",
        para: "Receive comprehensive feedback and detailed performance analysis to identify areas for improvement and refine your exam strategy.",
    },
];

function AboutSection() {
    const navigate = useNavigate();

    const handleBrowseAll = () => {
        navigate("/categories");
    };

    return (
        <div className="about-section h-[850px] flex md:flex-col items-center md:w-full md:p-[100px]">
            <button onClick={handleBrowseAll} className="browse-btn md:mb-[50px] md:mt-[-110px]">Browse All</button>
            <div className="why-choose-us md:font-[700] md:text-[40px]">Why Choose Us ?</div>
            <div className="content-container flex flex-col items-center md:flex-row lg:justify-center">
                <div className="para-list-container w-[334px] h-[515px] lg:mb-0">
                    {paraLists.map((paraList, index) => (
                        <ParaList key={index} paraList={paraList} />
                    ))}
                </div>
                <div className="ellipse-container relative top-[-590px] left-[180px] w-[737px] h-[590px]">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
                        alt="Ellipse1"
                    />
                </div>
                <div className="online-test-container absolute left-[680px] mt-[-600px] w-[562px] h-[477px]">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/undraw_online_test_1.png"
                        }
                        alt="Online Test"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
