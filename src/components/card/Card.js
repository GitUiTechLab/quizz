import React from "react";
import { useNavigate } from "react-router-dom";
import users from "../../assets/users.png";
import globe from "../../assets/globe.png";
import "./Card.css";

const Card = ({ exam, styleCard}) => {
    const navigate = useNavigate();

    const handleEnrollClick = () => {
        navigate("/registration");
    };

    return (
        <div className={`card ${styleCard}`}>
            <div className="card-image-container">
                <img src={exam.image} alt={exam.title} className="card-image" />
                <div className="card-users">
                    <img className="w-[20px] h-[20px]" src={users} alt="users" />
                    <span className="text-[13px] text-gray-500">{exam.users} Users</span>
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{exam.title}</h3>
                <div className="card-details">
                    <p className="card-description">{exam.description}</p>
                    <div className="flex gap-2">
                        <img className="w-[20px] h-[20px]" src={globe} alt="globe" />
                        <p>{exam.languages}</p>
                    </div>
                </div>
                <div className="card-price">
                    <p>Price</p>
                    <span className="price">
                        ₹{exam.price}
                        <span className="original-price">₹{exam.originalPrice}</span>
                    </span>
                </div>
                <button className="enroll-button" onClick={handleEnrollClick}>
                    Enroll
                </button>
            </div>
        </div>
    );
};

export default Card;
