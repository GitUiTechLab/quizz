import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Calendar.css';

const schema = yup.object().shape({
    courseName: yup.string().required("Course Name is required"),
    courseYear: yup
        .number()
        .required("Course Year is required")
        .typeError("Course Year must be a number"),
    graduationYear: yup
        .number()
        .required("Graduation Year is required")
        .typeError("Graduation Year must be a number"),
    session: yup.string().required("Session is required"),
});

const GraduationDetails = ({ formData, setFormData, onNext, onPrevious }) => {
    const courseNames = [
        { id: 1, name: "Computer Science" },
        { id: 2, name: "Mechanical" },
        { id: 3, name: "Electrical" },
        { id: 4, name: "Civil" },
    ];

    const courseYears = [2020, 2021, 2022, 2023, 2024];

    const graduationYears = [2020, 2021, 2022, 2023, 2024];

    const sessions = [
        { id: 1, name: "Session 1" },
        { id: 2, name: "Session 2" },
        { id: 3, name: "Session 3" },
    ];

    const [selectedValue, setSelectedValue] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formData,
    });

    const onSubmit = (data) => {
        setFormData(data);
        onNext();
    };

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[159px]"
        >
            <div className="flex flex-col p-4">
                <label className="mb-2 text-[#6F7482]" htmlFor="courseName">
                    Course Name
                </label>
                <select
                    {...register("courseName")}
                    id="courseName"
                    className={`custom-select mb-4 p-2 bg-[#F8FAFC] cursor-pointer ${
                        selectedValue === null ? "text-[#B8BCCA]" : "text-black"
                    }`}
                    onChange={handleSelectChange}
                >
                    <option value="" disabled>Select</option>
                    {courseNames.map((course) => (
                        <option
                            className="text-black"
                            key={course.id}
                            value={course.name}
                        >
                            {course.name}
                        </option>
                    ))}
                </select>
                {errors.courseName && (
                    <p className="text-red-500">{errors.courseName.message}</p>
                )}

                <label className="mb-2 text-[#6F7482]" htmlFor="courseYear">
                    Course Year
                </label>
                <select
                    {...register("courseYear")}
                    id="courseYear"
                    className={`custom-select mb-4 p-2 bg-[#F8FAFC] cursor-pointer ${
                        selectedValue === null ? "text-[#B8BCCA]" : "text-black"
                    }`}
                    onChange={handleSelectChange}
                >
                    <option value="" disabled>Select</option>
                    {courseYears.map((year) => (
                        <option className="text-black" key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                {errors.courseYear && (
                    <p className="text-red-500">{errors.courseYear.message}</p>
                )}

                <label className="mb-2 text-[#6F7482]" htmlFor="graduationYear">
                    Graduation Year
                </label>
                <select
                    {...register("graduationYear")}
                    id="graduationYear"
                    className={`custom-select mb-4 p-2 bg-[#F8FAFC] cursor-pointer ${
                        selectedValue === null ? "text-[#B8BCCA]" : "text-black"
                    }`}
                    onChange={handleSelectChange}
                >
                    <option value="" disabled>Select</option>
                    {graduationYears.map((year) => (
                        <option className="text-black" key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                {errors.graduationYear && (
                    <p className="text-red-500">
                        {errors.graduationYear.message}
                    </p>
                )}

                <label className="mb-2 text-[#6F7482]" htmlFor="session">
                    Session
                </label>
                <select
                    {...register("session")}
                    id="session"
                    className={`custom-select mb-4 p-2 bg-[#F8FAFC] cursor-pointer ${
                        selectedValue === null ? "text-[#B8BCCA]" : "text-black"
                    }`}
                    onChange={handleSelectChange}
                >
                    <option value="" disabled>Select</option>
                    {sessions.map((session) => (
                        <option
                            className="text-black"
                            key={session.id}
                            value={session.name}
                        >
                            {session.name}
                        </option>
                    ))}
                </select>
                {errors.session && (
                    <p className="text-red-500">{errors.session.message}</p>
                )}
            </div>

            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    onClick={onPrevious}
                    className="bg-[#F3F3FF] w-[226px] h-[45px] text-[#2D2E80] hover:bg-[#2D2E80] hover:text-white px-[16px] py-[6px] mr-4 rounded cursor-pointer"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-[#2D2E80] w-[226px] h-[45px] text-white px-[16px] py-[4px] hover:bg-blue-700 rounded cursor-pointer"
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default GraduationDetails;
