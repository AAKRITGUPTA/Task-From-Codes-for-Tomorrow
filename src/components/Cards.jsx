import React from "react";
import { RxCross2 } from "react-icons/rx";

const Cards = ({ post, onRemove }) => {
  return (
    <div className="w-full max-w-3xl flex flex-col sm:flex-row items-stretch bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">

      <div className="flex items-center justify-center p-4">
        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.title?.slice(0,2) || "NA"}`}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-4 py-2">
        <p className="text-lg font-bold text-gray-800 line-clamp-1">{post.title}</p>
        <p className="text-gray-600 w-[80%] line-clamp-2">{post.body}</p>
      </div>
      {/* Remove button */}
      <button
        onClick={() => onRemove && onRemove(post.id)}
        className="flex items-center justify-center p-4 focus:outline-none"
        aria-label="Remove"
        type="button"
      >
        <RxCross2 className="text-2xl text-red-400 hover:text-red-600 transition-colors" />
      </button>
    </div>
  );
};

export default Cards;
