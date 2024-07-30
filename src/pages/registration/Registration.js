import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import GraduationDetails from "./GraduationDetails";
import PaymentConfirmation from "./PaymentConfirmation";
import FinalDeclaration from "./FinalDeclaration";
import ProgressTracker from "./ProgressTracker";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../Footer";

const Registration = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        dateOfBirth: "",
        courseName: "",
        courseYear: "",
        graduationYear: "",
        session: "",
        cardholderName: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
        discountCode: "",
        upiPayment: "",
    });

    const [completedSteps, setCompletedSteps] = useState([
        false,
        false,
        false,
        false,
    ]);

    const handleNext = () => {
        const updatedSteps = [...completedSteps];
        updatedSteps[step] = true;
        setCompletedSteps(updatedSteps);
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <PersonalInformation
                        formData={formData}
                        setFormData={setFormData}
                        onNext={handleNext}
                    />
                );
            case 1:
                return (
                    <GraduationDetails
                        formData={formData}
                        setFormData={setFormData}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                );
            case 2:
                return (
                    <FinalDeclaration
                        formData={formData}
                        setFormData={setFormData}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                    />
                );
            case 3:
                return (
                    <PaymentConfirmation
                        formData={formData}
                        setFormData={setFormData}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                );

            default:
                return (
                    <PersonalInformation
                        formData={formData}
                        setFormData={setFormData}
                        onNext={handleNext}
                    />
                );
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
            <div className="sticky top-0 z-30 w-full">
                <Navbar />
            </div>
            <div className="flex flex-col items-center mx-6 my-10 text-center mt-[100px]">
                <div className="text-3xl font-semibold">
                    Register for Your Law Exam Today
                </div>
                <div className="mt-4 text-base font-normal">
                    Get started on your path to legal success. Complete the form
                    below to secure your spot.
                </div>
            </div>
            <div className="flex w-full max-w-screen-xl bg-white shadow-[0px_2px_20px_-8px_#000000] mb-[100px]">
                <ProgressTracker step={step} completedSteps={completedSteps} />
                <div className="flex-1 p-4">{renderStep()}</div>
            </div>
            <div className="mt-10 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default Registration;
