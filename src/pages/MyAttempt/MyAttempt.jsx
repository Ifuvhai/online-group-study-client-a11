import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const MyAttempt = () => {
    const { user } = useContext(AuthContext); // Get the current logged-in user
    const [submittedAssignments, setSubmittedAssignments] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchSubmittedAssignments = async () => {
            setIsLoading(true);
            setError(null); // Reset error state

            try {
                const response = await fetch(`http://localhost:5000/my-assignments?email=${user.email}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch assignments.'); // Handle non-200 responses
                }

                const data = await response.json();
                console.log(data);
                setSubmittedAssignments(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (user?.email) {
            fetchSubmittedAssignments();
        }
    }, [user]);

    if (isLoading) {
        return <p className="text-center mt-8 text-xl">Loading your submitted assignments...</p>;
    }

    if (error) {
        return <p className="text-center mt-8 text-xl text-red-600">Error: {error}</p>;
    }

    if (submittedAssignments.length === 0) {
        return <p className="text-center mt-8 text-xl">No submitted assignments found.</p>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">My Submitted Assignments</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Assignment Marks</th>
                            <th className="border border-gray-300 px-4 py-2">Obtained Marks</th>
                            <th className="border border-gray-300 px-4 py-2">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedAssignments.map((assignment) => (
                            <tr key={assignment._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{assignment.assignmentTitle}</td>
                                <td className="border border-gray-300 px-4 py-2 capitalize">{assignment.status}</td>
                                <td className="border border-gray-300 px-4 py-2">{assignment.assignmentMarks}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {assignment.obtainedMarks || 'N/A'}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {assignment.feedback || 'No feedback yet'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAttempt;
