import React from 'react';
import './Banner.css';

function Banner({ scrollToExamSection }) {
  return (
    <div className="banner">
      <div>
        <h1>Prepare for Your Legal <br/> Career with Confidence</h1>
        <p>Comprehensive Resources for All Major Law Exams</p>
        <button onClick={scrollToExamSection} className="explore-btn">Explore Exam Categories</button>
      </div>
    </div>
  );
}

export default Banner;
