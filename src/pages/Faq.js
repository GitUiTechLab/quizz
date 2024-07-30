import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const faqs = [
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Dolor condimentum commodo viverra vel cursus etiam quis. Lorem enim etiam cursus egestas faucibus eget in at."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Dolor condimentum commodo viverra vel cursus etiam quis. Lorem enim etiam cursus egestas faucibus eget in at."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Dolor condimentum commodo viverra vel cursus etiam quis. Lorem enim etiam cursus egestas faucibus eget in at."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Dolor condimentum commodo viverra vel cursus etiam quis. Lorem enim etiam cursus egestas faucibus eget in at."
    }
];

function FAQItem({ faq, index, toggleFAQ }) {
    return (
        <div className="border shadow p-4 flex justify-between items-center bg-white rounded-lg mb-4 w-full">
            <div className="flex flex-col">
                <h4 className="faq-question text-lg font-medium">{faq.question}</h4>
                {faq.open && (
                    <p className="faq-answer mt-2 text-gray-600">
                        {faq.answer}
                    </p>
                )}
            </div>
            <button onClick={() => toggleFAQ(index)} className="faq-btn rounded-full w-[40px] h-[40px] bg-[#2D2E80] flex items-center justify-center">
                <FaPlus className='text-white text-lg' />
            </button>
        </div>
    );
}

function Faq() {
    const [faqsState, setFaqsState] = useState(
        faqs.map((faq) => ({
            ...faq,
            open: false
        }))
    );

    const toggleFAQ = (index) => {
        setFaqsState(
            faqsState.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }
                return faq;
            })
        );
    };

    return (
        <div className="faq-section w-[1268px] mx-auto p-8 h-[700px]">
            <h2 className="faq-head text-[38px] font-[700] text-center mt-4 mb-12">Frequently Asked Questions</h2>
            {faqsState.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
            ))}
        </div>
    );
}

export default Faq;
