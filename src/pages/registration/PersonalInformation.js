import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomDatePicker from './CustomDatePicker';
import './Calendar.css';

const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup
        .string()
        .matches(/^\d{10}$/, "Phone Number must be 10 digits")
        .required("Phone Number is required"),
    gender: yup.string().required("Gender is required"),
    dateOfBirth: yup.date().required("Date of Birth is required"),
});

const PersonalInformation = ({ formData, setFormData, onNext }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formData,
    });

    const onSubmit = (data) => {
        setFormData(data);
        onNext();
    };

    const handleCancel = () => {
        reset();
    };

    const [startDate, setStartDate] = useState(
        formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
    );

    const [selectedValue, setSelectedValue] = useState(formData.gender || null);

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleDateChange = (value) => {
        setStartDate(value);
        setValue("dateOfBirth", value);
    };

    useEffect(() => {
        setValue("dateOfBirth", startDate);
    }, [setValue, startDate]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[159px]"
        >
            <div className="flex flex-col justify-end p-4">
                <label htmlFor="fullName" className="mb-1 text-[#6F7482]">
                    Full Name
                </label>
                <input
                    {...register("fullName")}
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    className="mb-4 p-2 rounded bg-[#F8FAFC]"
                />
                {errors.fullName && (
                    <p className="text-red-500">{errors.fullName.message}</p>
                )}

                <label htmlFor="email" className="mb-1 text-[#6F7482]">
                    Email
                </label>
                <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="mb-4 p-2 bg-[#F8FAFC] rounded"
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                )}

                <label htmlFor="phoneNumber" className="mb-1 text-[#6F7482]">
                    Phone Number
                </label>
                <input
                    {...register("phoneNumber")}
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    className="mb-4 p-2 bg-[#F8FAFC] rounded"
                />
                {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}

                <div className="flex gap-[36px]">
                    <div className="flex flex-col w-full">
                        <label htmlFor="gender" className="mb-1 text-[#6F7482]">
                            Gender
                        </label>
                        <select
                            {...register("gender")}
                            id="gender"
                            className={`custom-select mb-4 p-2 bg-[#F8FAFC] w-full cursor-pointer rounded ${
                                selectedValue === null
                                    ? "text-[#B8BCCA]"
                                    : "text-black"
                            }`}
                            onChange={handleSelectChange}
                        >
                            <option value="" disabled>Select Gender</option>
                            <option className="text-black" value="male">
                                Male
                            </option>
                            <option className="text-black" value="female">
                                Female
                            </option>
                            <option className="text-black" value="other">
                                Other
                            </option>
                        </select>
                        {errors.gender && (
                            <p className="text-red-500">
                                {errors.gender.message}
                            </p>
                        )}
                    </div>

                    <CustomDatePicker
                        selectedDate={startDate}
                        handleDateChange={handleDateChange}
                    />
                    {errors.dateOfBirth && (
                        <p className="text-red-500">
                            {errors.dateOfBirth.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-[#F3F3FF] w-[226px] h-[45px] text-[#2D2E80] hover:bg-[#2D2E80] hover:text-white px-[16px] py-[4px] mr-4 rounded"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-[#2D2E80] w-[226px] h-[45px] text-white px-[16px] py-[4px] hover:bg-blue-700 rounded"
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default PersonalInformation;
