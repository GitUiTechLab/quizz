import React from "react";

const ProgressTracker = ({ step, completedSteps }) => {
    return (
        <div className="flex flex-col w-1/4 p-4 gap-[30px] bg-[#2D2E80] text-white">
            {[
                "Personal Information",
                "Graduation Details",
                "Final Declaration",
                "Payment Confirmation"
                ,
            ].map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-[30px] items-start text-[20px] font-[400]"
                >
                    <div
                        className={`flex items-center ${
                            index <= step ? "text-white" : ""
                        }`}
                    >
                        <span
                            className={`w-8 h-8 border rounded-lg flex items-center justify-center mr-2 ${
                                completedSteps[index]
                                    ? "bg-green-500 text-white"
                                    : ""
                            }`}
                        >
                            {completedSteps[index] ? "✓" : index + 1}
                        </span>
                        <span
                            className={`${
                                index <= step ? "text-white" : "text-[#BBBBBB]"
                            }`}
                        >
                            {item}
                        </span>
                    </div>
                    {index < 3 && (
                        <div className="h-20 border-l-2 border-gray-500"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProgressTracker;
