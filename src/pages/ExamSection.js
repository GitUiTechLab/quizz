import React, { useState, useEffect } from "react";
import SearchBar from "../components/card/SearchBar";
import CategoryList from "../components/card/CategoryList";
import Card from "../components/card/Card";

const ExamSection = React.forwardRef(({ categories, activeCategory, onCategoryClick }, ref) => {
    const [exams, setExams] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchExams = async () => {
            const response = await fetch("/data/exams.json");
            const data = await response.json();
            setExams(data[activeCategory] || []);
        };
        fetchExams();
    }, [activeCategory]);

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    const filteredExams = exams.filter((exam) =>
        exam.title.toLowerCase().includes(searchTerm)
    );

    return (
        <div ref={ref} className="Exam-Section">
            <div>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="sec-pad p-[50px]">
                <div className="card-container">
                    <div className="flex first-three-container">
                        <CategoryList
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryClick={onCategoryClick}
                        />
                        {filteredExams.slice(0, 7).map((exam, index) => (
                            <Card className="flex-1" exam={exam} index={index} key={exam.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ExamSection;
