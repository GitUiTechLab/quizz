
import React from 'react';
import './Card.css';

const CategoryList = ({ categories = [], activeCategory, onCategoryClick, styleCategory }) => {
  return (
    <div className={`${styleCategory} category-list`}>
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
