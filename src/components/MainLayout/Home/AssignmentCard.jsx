import React from "react";
import { Link } from "react-router-dom";

const AssignmentCard = ({data}) => {

    const { _id, title, description, marks, thumbnail, difficulty, dueDate, creator } = data;  // Format the due date to a more readable format
  const formattedDueDate = new Date(dueDate).toLocaleString();

  return (
    <>
    <div className=" rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-all">
      {/* Card Thumbnail */}
      <div className="relative">
        <img
          src={thumbnail}
          alt="Assignment Thumbnail"
          className="w-full h-48 object-cover"
        />
        {/* Difficulty Badge */}
        <div className={`absolute top-4 left-4 text-white text-xs font-semibold px-2 py-1 rounded-full ${difficulty === 'easy' ? 'bg-green-600' : 'bg-red-600'}`}>
          {difficulty}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className=" text-sm mb-4">{description}</p>

        {/* Marks */}
        <div className="text-gray-500 text-xs mb-4">
          <span className="font-semibold">Marks:</span> {marks}
        </div>

        {/* Due Date */}
        <div className=" text-xs mb-4">
          <span className="font-semibold">Due Date:</span> {formattedDueDate}
        </div>

        {/* Creator */}
        <div className=" text-xs mb-4">
          <span className="font-semibold">Creator:</span> {creator?.name || "Unknown"}
        </div>

        {/* View Button */}
        <div className="mt-6">
            <Link to={`/details/${_id}`}>
          <button
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
            View Assignment
          </button>
              </Link>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default AssignmentCard;
