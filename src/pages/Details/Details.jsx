import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const Details = () => {
    const assignment = useLoaderData()
    const { id } = useParams(); // Get assignment ID from URL
    const { user } = useContext(AuthContext); // Get user details
    const [showModal, setShowModal] = useState(false);
    const [submissionData, setSubmissionData] = useState({
        googleDocsLink: '',
        note: '',
    });

    // Find the assignment details using the ID
    // const assignment = assignments.find((item) => item._id === id);

    // if (!assignment) {
    //     return <p>Assignment not found</p>;
    // }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSubmissionData({ ...submissionData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submission = {
            assignmentId: id,
            assignmentTitle: assignment.title,
            assignmentMarks:assignment.marks,
            userEmail: user.email,
            googleDocsLink: submissionData.googleDocsLink,
            note: submissionData.note,
            status: 'pending',
        };

        try {
            const response = await fetch('http://localhost:5000/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submission),
            });

            if (response.ok) {
                alert('Assignment submitted successfully!');
                setShowModal(false);
            } else {
                alert('Failed to submit the assignment');
            }
        } catch (error) {
            console.error('Error submitting assignment:', error);
        }
    };


    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="bg-white p-6 rounded shadow">
                    <h1 className="text-3xl font-bold mb-4">{assignment.title}</h1>
                    <p className="mb-4"><strong>Description:</strong> {assignment.description}</p>
                    <p className="mb-4"><strong>Marks:</strong> {assignment.marks}</p>
                    <p className="mb-4"><strong>Difficulty:</strong> {assignment.difficulty}</p>
                    <p className="mb-4"><strong>Creator:</strong> {assignment.creator.name}</p>
                    <button
                        className="btn btn-primary mt-4"
                        onClick={() => setShowModal(true)}
                    >
                        Take Assignment
                    </button>
                </div>

                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-lg w-1/3">
                            <h2 className="text-2xl font-bold mb-4">Submit Assignment</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="googleDocsLink" className="block text-sm font-medium mb-1">
                                        Google Docs Link
                                    </label>
                                    <input
                                        type="url"
                                        id="googleDocsLink"
                                        name="googleDocsLink"
                                        value={submissionData.googleDocsLink}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="note" className="block text-sm font-medium mb-1">
                                        Quick Note
                                    </label>
                                    <textarea
                                        id="note"
                                        name="note"
                                        value={submissionData.note}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full p-2 border border-gray-300 rounded"
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="btn btn-secondary mr-2"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;