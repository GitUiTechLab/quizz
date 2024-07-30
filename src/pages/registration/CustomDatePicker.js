import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Calendar.css';

const CustomDatePicker = ({ selectedDate, handleDateChange }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor="dateOfBirth" className="mb-1 text-[#6F7482]">
                Date of Birth
            </label>
            <div className="flex justify-between relative">
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    id="dateOfBirth"
                    selected={selectedDate} 
                    placeholderText='DD/MM/YYYY'
                    className={`mb-4 p-2 w-full sm:w-[70vw] h-[40px] md:w-[50vw] lg:w-[30vw] bg-[#F8FAFC] cursor-pointer rounded ${
                        !selectedDate ? " text-[#B8BCCA]" : " text-black"
                    }`}
                    onChange={handleDateChange}
                    showIcon={true}
                    calendarIconClassName="calendarIcon"
                    toggleCalendarOnIconClick={true}
                />
            </div>
        </div>
    );
};

export default CustomDatePicker;
