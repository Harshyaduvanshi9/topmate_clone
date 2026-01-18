import React from "react";

export const Card = ({
  title,
  description,
  duration,
  price,
  meetingType = "Video Meeting",
}) => {

  const telegramLink = `https://t.me/Harsh_yaduvanshi9?text=${encodeURIComponent(
    `📌 ${title}\n\n📝 ${description}\n\n📞 Meeting Type: ${meetingType}\n⏱ Duration: ${duration}\n💰 Price: ₹${price}\n\nI want to book this session.`
  )}`;

  return (
    <a href={telegramLink} target="_blank" rel="noopener noreferrer">
      <div className="bg-white w-[32rem] h-48 rounded-lg p-3 flex justify-between flex-col cursor-pointer">

        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-1">
            <h1 className="text-base font-bold text-black">
              {title}
            </h1>

            <p className="text-sm text-gray-600 line-clamp-2">
              {description}
            </p>
          </div>

          <button className="border border-black p-2.5 rounded-full hover:bg-black hover:text-white">
            →
          </button>
        </div>

        <div className="border-t pt-2 flex justify-between items-center">
          <p className="text-sm text-black">
            {meetingType} • {duration}
          </p>

          <p className="text-black text-base bg-gray-200 py-1 rounded-full px-3">
            ₹{price}
          </p>
        </div>
      </div>
    </a>
  );
};




