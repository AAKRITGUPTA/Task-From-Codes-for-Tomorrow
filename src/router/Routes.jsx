import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import FeedBackForm from "../pages/FeedBackForm";
const Router = createBrowserRouter([
  // Public routes

  { path: "/", element: <Home /> },
  { path: "/feedbackform", element: <FeedBackForm /> },
 
    

]);

export default Router;
