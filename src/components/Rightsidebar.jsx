import React, { useEffect, useState } from "react";
import Cards from "./cards";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, removePost } from "../redux/postsSlice";

const Rightsidebar = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.viewMode);
  const { data, status, error } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postperpage = 6;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const indexofLastPost = currentPage * postperpage;
  const indexofFirstPost = indexofLastPost - postperpage;
  const currentPosts = data.slice(indexofFirstPost, indexofLastPost);
  const totalpages = Math.ceil(data.length / postperpage);

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  return (
    <div className="w-[80vw] h-[100vh] overflow-auto flex flex-col gap-4 bg-gray-200 p-4">
      <div className="flex-1 flex justify-center items-start">
        <div
          className={
            viewMode === "row"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-6xl"
              : "flex flex-col gap-6 w-full max-w-3xl"
          }
        >
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p className="text-red-500">{error}</p>}
          {status === "succeeded" &&
            currentPosts.map((post) => (
              <Cards key={post.id} post={post} onRemove={handleRemove} />
            ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`border-gray-500 px-3 py-1 border rounded-full transition-colors ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "hover:bg-gray-300"
          }`}
        >
          <MdKeyboardArrowLeft className="text-gray-500" />
        </button>
        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalpages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalpages))}
          disabled={currentPage === totalpages}
          className={`border-gray-500 px-3 py-1 border rounded-full transition-colors ${
            currentPage === totalpages ? "bg-gray-300 cursor-not-allowed" : "hover:bg-gray-300"
          }`}
        >
          <MdKeyboardArrowRight className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Rightsidebar;