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
      <div className="bg-[#fbdebe] min-h-screen flex justify-center items-start md:items-center px-4 py-8">
        <div className="bg-white w-full max-w-md md:max-w-lg p-6 md:p-10 rounded-xl">

          {/* Header */}
          <div className="flex items-center">
            <BsArrowLeft
              className="text-green-600 text-2xl md:text-3xl cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <div className="bg-purple-800 rounded-full w-8 h-8 md:w-10 md:h-10 ml-4" />
            <div className="text-sm md:text-base font-semibold ml-4">
              Harsh Kumar Yaduvanshi
            </div>
          </div>

          <hr className="my-4" />

          {/* Meeting Info */}
          <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-6">
            <div>
              <h1 className="text-lg md:text-2xl font-bold">
                Career Mentorship
              </h1>
              <p className="text-slate-400 text-sm font-semibold">
                Video Meeting · 30 mins
              </p>
            </div>

            <div className="flex items-center">
              <div className="bg-slate-200 rounded-full px-4 py-1 font-bold">
                ₹899
              </div>
            </div>
          </div>

          {/* Date Picker */}
          <div className="border border-green-700 rounded-lg w-full py-2 px-3 flex items-center bg-green-100 mb-6">
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
          <form className="space-y-4">
            {[
              { label: "Your name", type: "text", placeholder: "Enter your name" },
              { label: "Email", type: "email", placeholder: "Enter your email" },
              { label: "Phone number", type: "text", placeholder: "Enter phone number" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-gray-700 mb-1 text-sm">
                  {field.label}
                </label>
                <input
                  className="border border-slate-700 rounded-lg w-full py-2 px-3"
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
          </form>

          <hr className="my-6" />

          {/* Footer */}
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">₹899</p>
            <button
              className="bg-black hover:bg-slate-800 text-white text-sm font-semibold py-3 px-6 rounded"
              type="submit"
            >
              Confirm & Pay
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Form;
