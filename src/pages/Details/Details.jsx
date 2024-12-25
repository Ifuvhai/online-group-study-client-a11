import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  const assignment = useLoaderData();
  const { id } = useParams(); // Get assignment ID from URL
  const { user } = useContext(AuthContext); // Get user details
  const [showModal, setShowModal] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    googleDocsLink: "",
    note: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmissionData({ ...submissionData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submission = {
      assignmentId: id,
      assignmentTitle: assignment.title,
      assignmentMarks: assignment.marks,
      userEmail: user.email,
      userName: user.displayName,
      googleDocsLink: submissionData.googleDocsLink,
      note: submissionData.note,
      status: "pending",
    };

    try {
      const response = await fetch("http://localhost:5000/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (response.ok) {
        Swal.fire({
            title: "Submitted!",
            text: "Assignment submitted successfully!",
            icon: "success"
          });
        setShowModal(false);
      } else {
        alert("Failed to submit the assignment");
      }
    } catch (error) {
      console.error("Error submitting assignment:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Assignment Details Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
        <img
          src={assignment.thumbnail}
          alt={assignment.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {assignment.title}
        </h1>
        <p className="text-gray-600 mb-4">
          <strong>Description:</strong> {assignment.description}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Marks:</strong> {assignment.marks}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Difficulty:</strong> {assignment.difficulty}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Creator:</strong> {assignment.creator.name}
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          onClick={() => setShowModal(true)}
        >
          Take Assignment
        </button>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Submit Assignment
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="googleDocsLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Google Docs Link
                </label>
                <input
                  type="url"
                  id="googleDocsLink"
                  name="googleDocsLink"
                  value={submissionData.googleDocsLink}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="note"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quick Note
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={submissionData.note}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-all"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
