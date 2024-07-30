// src/components/Stats.js
import React from 'react';
import Hexagon from './Hexagon';

const Stats = () => {
  const stats = [
    { number: '540+', label: 'Students' },
    { number: '40+', label: 'Law Exam' },
    { number: '300', label: 'Practice Exam' },
    { number: '25+', label: 'Honors & Awards' },
  ];

  return (
    <div className="flex justify-center">
      {stats.map((stat, index) => (
        <Hexagon key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  );
};

export default Stats;
