import React, { useState } from "react";
import "./Checkbox.css";

const FinalDeclaration = ({ onPrevious, onNext }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isChecked) {
            // Handle form submission
            console.log("Form submitted");
            onNext(); // Move to the next step
        } else {
            alert("Please agree to the declaration before proceeding.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 py-[100px] w-full mx-auto"
        >
            <div className="mb-6 text-gray-800">
                <p className="mb-2">I hereby declare that:</p>
                <ol className="list-decimal list-inside space-y-2 w-[840px] text-[15px]">
                    <li>
                        I am the person registered for this examination and all
                        information provided is accurate and truthful.
                    </li>
                    <li>
                        I will not engage in any form of cheating, including but
                        not limited to using unauthorized materials or receiving
                        assistance from others.
                    </li>
                    <li>
                        I will adhere to all examination rules and regulations
                        as provided by the exam authorities.
                    </li>
                    <li>
                        I understand that any breach of these rules may result
                        in disqualification and other disciplinary actions as
                        deemed appropriate by the exam authorities.
                    </li>
                    <li>
                        I will maintain the confidentiality of the exam content
                        and will not share, reproduce, or disclose any part of
                        the exam in any form.
                    </li>
                    <li>
                        I am aware that the examination system may monitor my
                        activity during the exam to ensure compliance with the
                        rules.
                    </li>
                </ol>
            </div>
            <div className="flex items-center mb-6">
                <input
                    type="checkbox"
                    id="declarationCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="checkbox-custom"
                />
                <label
                    htmlFor="declarationCheckbox"
                    className="ml-2 text-gray-600"
                >
                    I agree to the terms
                </label>
            </div>
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={onPrevious}
                    className="bg-[#F3F3FF] w-[226px] h-[45px] text-[#2D2E80] hover:bg-[#2D2E80] hover:text-white px-[16px] py-[4px] mr-4 rounded cursor-pointer"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="w-[226px] h-[45px] px-[16px] py-[4px] bg-[#2D2E80] text-white rounded hover:bg-blue-700"
                >
                    CONFIRM
                </button>
            </div>
        </form>
    );
};

export default FinalDeclaration;
