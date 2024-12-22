import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const UpdateAssignment = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const navigate = useNavigate(); 
    const { user } = useContext(AuthContext);
    const [assignmentData, setAssignmentData] = useState(data);


    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAssignmentData({ ...assignmentData, [name]: value });
    };

    // Handle form submission
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/assignments/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(assignmentData),
            });

            if (response.ok) {
                alert('Assignment updated successfully!');
                navigate('/assignments'); // Redirect to assignments page after update
            } else {
                alert('Failed to update the assignment');
            }
        } catch (error) {
            console.error('Error updating assignment:', error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Update Assignment</h1>
            <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={assignmentData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={assignmentData.description}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="marks" className="block text-sm font-medium mb-1">
                        Marks
                    </label>
                    <input
                        type="number"
                        id="marks"
                        name="marks"
                        value={assignmentData.marks}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="difficulty" className="block text-sm font-medium mb-1">
                        Difficulty
                    </label>
                    <input
                        type="text"
                        id="difficulty"
                        name="difficulty"
                        value={assignmentData.difficulty}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="btn btn-secondary mr-2"
                        onClick={() => navigate('/assignments')}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Update Assignment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateAssignment;
