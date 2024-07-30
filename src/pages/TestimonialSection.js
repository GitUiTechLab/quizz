import React, { useState } from "react";
import leftSlider from "../assets/chevron-up-circle.png";
import rightSlider from "../assets/chevron-up-circle-r.png";
import comma from "../assets/comma.png";
import pic1 from "../assets/pic-1.jpeg"; 
import pic2 from "../assets/pic-2.jpeg"; 
import pic3 from "../assets/pic-3.jpeg"; 
import pic4 from "../assets/pic-4.jpeg"; 

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam. magna aliquam volutpat. Ut wisi enim ad minim veniam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Ut.",
        name: "Maria Smith",
        position: "CEO, ABC Corporation",
        img: pic1, 
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam. magna aliquam volutpat. Ut wisi enim ad minim veniam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Ut.",
        name: "Ravi Ranjan",
        position: "Frontend Developer",
        img: pic2, 
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam. magna aliquam volutpat. Ut wisi enim ad m",
        name: "Deepak Kumar",
        position: "Software Engineer",
        img: pic3, 
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam. magna aliquam volutpat. Ut wisi enim ad minim veniam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Ut.",
        name: "Ranjeet Saw",
        position: "B.A.L.L.B",
        img: pic4,
    }
];

function TestimonialSection() {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((current + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonial-section flex flex-col h-[649px] w-full">
            <div className="testimonial-head text-[40px] font-[700] flex justify-center pt-4">
                Testimonial
            </div>
            <div className="testimonial-content flex flex-col items-center p-8 relative">
                <div className="slider-container flex items-center w-full justify-between">
                    <button
                        onClick={prevTestimonial}
                        className="testimonial-left-btn text-purple-500 text-4xl"
                    >
                        <img src={leftSlider} alt="leftSlider" />
                    </button>
                    <div className="testimonial-container flex gap-4 items-center bg-white w-[920px] h-[280.1px] p-10 rounded-lg relative">
                        <img className="testimonial-img mt-[-130px]" src={comma} alt="comma" />
                        <p className="testimonial-para text-gray-400 text-[19px] w-[849px] h-[212.38px] mb-4 justify-center mt-[80px]">
                            {testimonials[current].text}
                        </p>
                    </div>
                    <button
                        onClick={nextTestimonial}
                        className="testimonial-right-btn text-purple-500 text-4xl"
                    >
                        <img src={rightSlider} alt="rightSlider" />
                    </button>
                </div>
                <div className="testimonial-person-container flex mt-8">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            className={`testimonial-ring w-14 h-14 rounded-full border-4 mx-4 ${
                                index === current
                                    ? "border-purple-500"
                                    : "border-transparent"
                            }`}
                            onClick={() => setCurrent(index)}
                        >
                            <img
                                src={testimonial.img}
                                alt={testimonial.name}
                                className="testimonial-person-img w-full h-full rounded-full"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;


