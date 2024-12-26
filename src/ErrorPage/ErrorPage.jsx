import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <img
          src="https://via.placeholder.com/400x250.png?text=Error+Image"
          alt="Error Illustration"
          className="my-6 mx-auto rounded-md shadow-lg"
        />
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
