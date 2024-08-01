import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryList from "../components/card/CategoryList";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import { FiSearch } from "react-icons/fi";
import Footer from "./Footer";
import "../components/card/CategoryStyles.css"; 

function Category() {
    const [exams, setExams] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Exam Category 1");
    const [searchTerm, setSearchTerm] = useState("");
    const { name } = useParams();

    const categories = [
        "Exam Category 1",
        "Exam Category 2",
        "Exam Category 3",
        "Exam Category 4",
        "Exam Category 5",
        "Exam Category 6",
        "Exam Category 7",
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await fetch("/data/exams.json");
                const data = await response.json();
                setExams(data[activeCategory] || []);
            } catch (error) {
                console.error("Failed to fetch exams data", error);
            }
        };
        fetchExams();
    }, [activeCategory]);

    useEffect(() => {
        if (name) {
            setSearchTerm(name);
        }
    }, [name]);

    // Filter exams based on search term
    const filteredExams = exams.filter((exam) =>
        exam.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="category-page flex flex-col bg-white">
            <div className="sticky top-0 z-30 w-full bg-white shadow-md">
                <Navbar />
            </div>
            <div className="bg-[#F3F3FF] w-full py-6">
                <div className="max-w-[1268px] mx-auto px-4">
                    <div className="searchbar-container relative mb-4">
                        <input
                            type="text"
                            placeholder="Search Exam name, categories"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-10 py-3 text-base rounded-lg text-black border-none shadow-lg"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                    </div>
                    <div className="flex justify-center mb-8">
                        {categories.length > 0 ? (
                            <CategoryList
                                categories={categories}
                                activeCategory={activeCategory}
                                onCategoryClick={handleCategoryClick}
                                styleCategory="category-section"
                            />
                        ) : (
                            <p className="text-center text-gray-500">
                                No categories available
                            </p>
                        )}
                    </div>
                    <div className="w-full cat-card-container">
                        {filteredExams.length > 0 ? (
                            filteredExams.map((exam, index) => (
                                <Card
                                    className="flex-1"
                                    exam={exam}
                                    index={index}
                                    key={`${exam.id}-${index}`} // Ensure unique key
                                    styleCard="category-card"
                                />
                            ))
                        ) : (
                            <p className="text-center text-gray-500">
                                No exams available
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full mt-auto">
                <Footer />
            </div>
        </div>
    );
}

export default Category;
