import React, { useState, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { RxPencil1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
    const navigate = useNavigate();

    const [date, setDate] = useState(new Date());
    const [editDate, setEditDate] = useState(false);

    const datePickerRef = useRef(null);

    return (
        <>
            <div className="bg-[#fbdebe] h-screen flex justify-center items-center">
                <div className="bg-white h-max w-[30rem] p-10 rounded-xl">

                    {/* Header */}
                    <div className="flex items-center">
                        <BsArrowLeft
                            className="text-green-600 font-extrabold text-4xl cursor-pointer"
                            onClick={() => navigate(-1)}
                        />
                        <div className="bg-purple-800 rounded-full w-10 h-10 ml-5" />
                        <div className="font-xl font-semibold ml-5">
                            Harsh Kumar Yaduvanshi
                        </div>
                    </div>

                    <hr className="h-px my-4 bg-gray-200" />

                    {/* Meeting Info */}
                    <div className="flex mb-7 justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold">
                                Career Mentorship - For Students, Professionals
                            </h1>
                            <p className="text-slate-400 text-sm font-semibold">
                                Video Meeting · 30mins
                            </p>
                        </div>
                        <div className="mt-4">
                            <div className="bg-slate-200 rounded-full h-9 w-14 flex items-center justify-center">
                                <p className="font-bold">₹899</p>
                            </div>
                        </div>
                    </div>

                    {/* Date Picker */}
                    <div className="border border-green-700 rounded-lg w-[25rem] py-2 px-3 flex items-center bg-green-100 mb-6">
                        {!editDate ? (
                            <>
                                <p className="font-bold text-green-800 text-sm flex items-center flex-1">
                                    <MdDateRange className="mr-2 text-lg" />
                                    {date.toLocaleString("en-IN", {
                                        weekday: "short",
                                        day: "2-digit",
                                        month: "short",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                    })}{" "}
                                    (GMT +05:30)
                                </p>

                                <RxPencil1
                                    className="text-green-800 cursor-pointer"
                                    onClick={() => {
                                        setEditDate(true);
                                        setTimeout(() => {
                                            datePickerRef.current?.setOpen(true);
                                        }, 0);
                                    }}
                                />
                            </>
                        ) : (
                            <DatePicker
                                ref={datePickerRef}
                                selected={date}
                                onChange={(d) => {
                                    setDate(d);
                                    setEditDate(false);
                                }}
                                showTimeSelect
                                timeIntervals={30}
                                dateFormat="EEE, dd MMM | h:mm aa"
                                className="bg-white border px-2 py-1 rounded-md w-full"
                                shouldCloseOnSelect
                                onClickOutside={() => setEditDate(false)}
                            />
                        )}
                    </div>

                    {/* Form */}
                    <form className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">
                                Your name
                            </label>
                            <input
                                className="border border-slate-700 rounded-lg w-[25rem] py-2 px-3"
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                className="border border-slate-700 rounded-lg w-[25rem] py-2 px-3"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">
                                Phone number
                            </label>
                            <input
                                className="border border-slate-700 rounded-lg w-[25rem] py-2 px-3"
                                type="text"
                                placeholder="Enter phone number"
                                required
                            />
                        </div>
                    </form>

                    <hr className="h-px my-8 bg-gray-200" />

                    {/* Footer */}
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold">₹899</p>
                        <button
                            className="bg-black hover:bg-slate-800 text-white text-sm font-semibold py-3 px-7 rounded"
                            type="submit"
                        >
                            Confirm and Pay
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
