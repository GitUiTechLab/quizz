import React from "react";
import { FiSearch } from "react-icons/fi";
import '../../css/App.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-title text-white">
                Exam Categories
            </div>
            <div className="search relative">
                <input
                    type="text"
                    placeholder="Search Exam name, categories"
                    className="px-10 py-2 text-base text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
