import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdViewList, MdViewModule, MdFeedback } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setViewMode } from "../redux/viewModeSlice";

const Leftsidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const viewMode = useSelector((state) => state.viewMode);
  const dispatch = useDispatch();

  return (
    <aside className="w-[20vw] min-w-[220px] flex flex-col p-4 h-[100vh] bg-gray-300 shadow-lg">
      {/* Profile */}
      <div className="w-full mt-8 flex rounded-2xl h-[90px] bg-white items-center shadow">
        <div className="w-[30%] flex items-center justify-center h-full">
          <div className="w-[60px] h-[60px] bg-red-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200 hover:scale-105 transition-transform">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=HR"
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
              onError={e => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=HR"; }}
            />
          </div>
        </div>
        <div className="w-[70%] h-full flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-gray-700">Hi Rendor,</p>
          <p className="text-base text-gray-500">Here's your News!</p>
        </div>
      </div>

      {/* View Toggle (hide on /feedbackform) */}
      {location.pathname !== "/feedbackform" && (
        <section className="w-full mt-10 flex flex-col items-center justify-center rounded-2xl h-[90px] bg-white shadow">
          <h1 className="text-2xl text-center mb-2 font-semibold text-gray-700">View Toggle</h1>
          <div className="flex gap-3">
            <button
              aria-label="Row View"
              tabIndex={0}
              onClick={() => dispatch(setViewMode("row"))}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition-all duration-150 shadow-sm ${
                viewMode === "row"
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-gray-100 text-gray-500 hover:bg-blue-100"
              }`}
            >
              <MdViewModule className="text-2xl" />
              <span className="hidden md:inline">Row</span>
            </button>
            <button
              aria-label="Column View"
              tabIndex={0}
              onClick={() => dispatch(setViewMode("column"))}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition-all duration-150 shadow-sm ${
                viewMode === "column"
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-gray-100 text-gray-500 hover:bg-blue-100"
              }`}
            >
              <MdViewList className="text-2xl" />
              <span className="hidden md:inline">Column</span>
            </button>
          </div>
        </section>
      )}

      {/* Feedback */}
      <section className="w-full mt-auto flex flex-col rounded-2xl h-[110px] p-4 bg-white shadow">
        <h1 className="text-xl text-center font-semibold text-gray-700">Have a Feedback?</h1>
        <button
          onClick={() => navigate("/feedbackform")}
          className="flex items-center justify-center gap-2 w-full cursor-pointer mt-4 h-10 rounded-2xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition"
        >
          <MdFeedback className="text-xl" />
          We're Listening!
        </button>
      </section>
    </aside>
  );
};

export default Leftsidebar;