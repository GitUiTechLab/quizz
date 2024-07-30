import React, { useState, useEffect } from "react";
import SearchBar from "../components/card/SearchBar";
import CategoryList from "../components/card/CategoryList";
import Card from "../components/card/Card";

function ExamSection({ categories, activeCategory, onCategoryClick }) {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        const fetchExams = async () => {
            const response = await fetch("/data/exams.json");
            const data = await response.json();
            setExams(data[activeCategory] || []);
        };
        fetchExams();
    }, [activeCategory]);

    return (
        <div className="Exam-Section">
            <div>
                <SearchBar />
            </div>
            <div className="sec-pad p-[50px]">
                <div className="Explore-title h-[22px] p-1 mb-10 ml-32">
                    Explore by Category
                </div>
                <div className="card-container">
                    <div className="flex first-three-container">
                        <CategoryList
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryClick={onCategoryClick}
                        />
                        {exams.slice(0, 7).map((exam, index) => (
                            <Card className="flex-1" exam={exam} index={index} key={exam.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamSection;
