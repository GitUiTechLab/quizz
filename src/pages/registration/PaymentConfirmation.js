import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import gpayLogo from "../../assets/Gpay.png";
import paytmLogo from "../../assets/Paytm.png";
import phonepeLogo from "../../assets/Phonepe.png";
import amazonpayLogo from "../../assets/Amazonpe.png";

const schema = yup.object().shape({
    cardholderName: yup.string().required("Cardholder's Name is required"),
    cardNumber: yup
        .string()
        .required("Card Number is required")
        .matches(/^[0-9]{16}$/, "Card Number must be 16 digits"),
    expiry: yup
        .string()
        .required("Expiry date is required")
        .matches(
            /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
            "Expiry date must be in MM/YY format"
        ),
    cvc: yup
        .string()
        .required("CVC is required")
        .matches(/^[0-9]{3,4}$/, "CVC must be 3 or 4 digits"),
    discountCode: yup.string(),
    upiPayment: yup.string().required("UPI payment method is required"),
});

const PaymentConfirmation = ({ formData, setFormData, onNext, onPrevious }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formData,
    });

    const [selectedUPI, setSelectedUPI] = useState("");

    const upiOptions = [
        { value: "gpay", label: "Google Pay", logo: gpayLogo },
        { value: "paytm", label: "Paytm", logo: paytmLogo },
        { value: "phonepe", label: "PhonePe", logo: phonepeLogo },
        { value: "amazonpay", label: "Amazon Pay", logo: amazonpayLogo },
    ];

    const onSubmit = (data) => {
        setFormData(data);
        onNext();
    };

    const handleUPIChange = (value) => {
        setSelectedUPI(value);
        setValue("upiPayment", value);
        document.getElementById("upiDropdown").classList.add("hidden");
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-4 bg-white"
        >
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label
                        htmlFor="cardholderName"
                        className="block mb-2 text-sm font-medium text-gray-600"
                    >
                        Cardholder’s Name
                    </label>
                    <input
                        {...register("cardholderName")}
                        id="cardholderName"
                        placeholder="Cardholder Name"
                        className="block w-full p-2 bg-[#F8FAFC] rounded"
                    />
                    {errors.cardholderName && (
                        <p className="text-red-500">
                            {errors.cardholderName.message}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="cardNumber"
                        className="block mb-2 text-sm font-medium text-gray-600"
                    >
                        Card Number
                    </label>
                    <input
                        {...register("cardNumber")}
                        id="cardNumber"
                        placeholder="0000 1111 2222 3333"
                        className="block w-full p-2 bg-[#F8FAFC] rounded"
                    />
                    {errors.cardNumber && (
                        <p className="text-red-500">
                            {errors.cardNumber.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label
                        htmlFor="expiry"
                        className="block mb-2 text-sm font-medium text-gray-600"
                    >
                        Expiry
                    </label>
                    <input
                        {...register("expiry")}
                        id="expiry"
                        placeholder="MM/YY"
                        className="block w-full p-2 bg-[#F8FAFC] rounded"
                    />
                    {errors.expiry && (
                        <p className="text-red-500">{errors.expiry.message}</p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="cvc"
                        className="block mb-2 text-sm font-medium text-gray-600"
                    >
                        CVC
                    </label>
                    <input
                        {...register("cvc")}
                        id="cvc"
                        placeholder="XXX"
                        className="block w-full p-2 bg-[#F8FAFC] rounded"
                    />
                    {errors.cvc && (
                        <p className="text-red-500">{errors.cvc.message}</p>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <label
                    htmlFor="discountCode"
                    className="block mb-2 text-sm font-medium text-gray-600"
                >
                    Discount Code
                </label>
                <div className="relative flex justify-end">
                    <input
                        {...register("discountCode")}
                        id="discountCode"
                        placeholder="EXAM OFF 20"
                        className="flex-1 block w-full p-2 bg-[#F8FAFC] rounded-l"
                    />
                    <button
                        type="button"
                        className="absolute px-4 py-2 text-[#2D2E80]"
                    >
                        APPLY
                    </button>
                </div>
                {errors.discountCode && (
                    <p className="text-red-500">
                        {errors.discountCode.message}
                    </p>
                )}
            </div>

            <div className="relative flex justify-center items-center mb-4">
                <span className="absolute px-2 bg-white text-gray-600">Or</span>
                <hr className="w-full border-t border-gray-300" />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="upiPayment"
                    className="block mb-2 text-sm font-medium text-gray-600"
                >
                    Pay by UPI
                </label>
                <div className="relative">
                    <button
                        type="button"
                        className="custom-select block w-full p-2 bg-[#F8FAFC] rounded text-left"
                        onClick={() =>
                            document
                                .getElementById("upiDropdown")
                                .classList.toggle("hidden")
                        }
                    >
                        {selectedUPI ? (
                            <div className="flex items-center">
                                <img
                                    src={
                                        upiOptions.find(
                                            (option) =>
                                                option.value === selectedUPI
                                        )?.logo
                                    }
                                    alt="Selected UPI"
                                    className="w-6 h-6 mr-2"
                                />
                                {
                                    upiOptions.find(
                                        (option) => option.value === selectedUPI
                                    )?.label
                                }
                            </div>
                        ) : (
                            "Select UPI Payment Method"
                        )}
                    </button>
                    <ul
                        id="upiDropdown"
                        className="absolute w-full bg-white border border-gray-300 cursor-pointer rounded shadow-lg mt-1 hidden"
                    >
                        {upiOptions.map((option) => (
                            <li
                                key={option.value}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleUPIChange(option.value)}
                            >
                                <img
                                    src={option.logo}
                                    alt={option.label}
                                    className="w-6 h-6 mr-2"
                                />
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
                {errors.upiPayment && (
                    <p className="text-red-500">{errors.upiPayment.message}</p>
                )}
            </div>

            <div className="flex justify-between mt-4">
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
                    PAY ₹1,755
                </button>
            </div>
        </form>
    );
};

export default PaymentConfirmation;
