
import React from 'react';
import './Card.css';

const CategoryList = ({ categories = [], activeCategory, onCategoryClick, styleCategory }) => {
  return (
    <div className={`${styleCategory} category-list`}>
      <div className='categorylist-head flex justify-center items-center text-[#2D2E80] font-bold mb-4'>Explore by Category</div>
      {categories && categories.map((category, index) => (
        <div 
          key={index} 
          className={`category-item ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
