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
      <div
        className="
          bg-white 
          w-full sm:w-[26rem] md:w-[32rem]
          min-h-[12rem]
          rounded-lg 
          p-4 
          flex flex-col justify-between 
          cursor-pointer 
          hover:shadow-lg 
          transition
        "
      >
        {/* Top */}
        <div className="flex justify-between items-start gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm md:text-base font-bold text-black">
              {title}
            </h1>

            <p className="text-sm text-gray-600 line-clamp-2">
              {description}
            </p>
          </div>

          {/* Book Now */}
          <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full animate-soft-blink whitespace-nowrap">
            Book Now
          </span>
        </div>

        {/* Bottom */}
        <div className="border-t pt-2 mt-3 flex justify-between items-center text-sm">
          <p className="text-black">
            {meetingType} • {duration}
          </p>

          <p className="text-black bg-gray-200 py-1 px-3 rounded-full font-medium">
            ₹{price}
          </p>
        </div>
      </div>
    </a>
  );
};






