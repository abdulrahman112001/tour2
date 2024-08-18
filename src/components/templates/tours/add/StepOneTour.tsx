import React, { useState } from "react";
import { FaSuitcase, FaHiking } from "react-icons/fa"; // استيراد الأيقونات المطلوبة

function StepOneTour() {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="h-[69vh] flex items-center">
      <div className="grid grid-cols-2 px-5 w-2/3 justify-between m-auto gap-5">
        <div
          className={`border p-5 py-10 rounded-md text-center cursor-pointer capitalize flex justify-center flex-col gap-3 items-center ${
            active === 1 ? "bg-gray-300" : "hover:bg-gray-300"
          }`}
          onClick={() => handleClick(1)}
        >
          <FaSuitcase className="text-5xl mb-3 text-gray-700" />
          <h3 className="text-2xl font-bold">tour package</h3>
        </div>
        <div
          className={`border p-5 py-10 rounded-md text-center cursor-pointer capitalize flex justify-center flex-col gap-3 items-center ${
            active === 2 ? "bg-gray-300" : "hover:bg-gray-300"
          }`}
          onClick={() => handleClick(2)}
        >
          <FaHiking className="text-5xl mb-3 text-gray-700" />
          <h3 className="text-2xl font-bold">excursion</h3>
        </div>
      </div>
    </div>
  );
}

export default StepOneTour;
