import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceActions: React.FC = () => {
  // router
  const navigate = useNavigate();
  return (
    <div className="flex justify-end items-center">
      <button className="bg-teal-500 text-white px-6 py-2 rounded-md mr-3">
        Edit
      </button>
      {/* button add with color primary */}
      <button
        className="bg-orange-500 text-white px-3 py-2 rounded-md w-20"
        onClick={() => navigate("/new")}
      >
        Add
      </button>
    </div>
  );
};

export default ServiceActions;
