import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const CreateAssignment = () => {
    const {user} = useContext(AuthContext)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [marks, setMarks] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [difficulty, setDifficulty] = useState('easy');
    const [dueDate, setDueDate] = useState(new Date());
    const [creatorName, setCreatorName] = useState('');
    const [creatorEmail, setCreatorEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Assignment data to be sent to the backend
        const assignmentData = {
            title,
            description,
            marks,
            thumbnail,
            difficulty,
            dueDate,
            creator: {
                name: user?.displayName,
                email: user?.email
            },
        };

        // Simulating assignment creation
        console.log('Assignment Created:', assignmentData);

        fetch("http://localhost:5000/assignments",{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(assignmentData)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        // setSuccessMessage('Assignment created successfully!');
        Swal.fire({
            title: "Good job!",
            text: "Assignment created successfully!!",
            icon: "success"
          });

        // Reset form fields
        setTitle('');
        setDescription('');
        setMarks('');
        setThumbnail('');
        setDifficulty('easy');
        setDueDate(new Date());
        setCreatorName('');
        setCreatorEmail('');

        // Clear the success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Create New Assignment</h1>

            {successMessage && (
                <div className="mb-6 p-3 text-center text-green-700 border border-green-300 bg-green-50 rounded-md">
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-lg font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                        placeholder="Enter assignment title"
                        required
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                        rows="4"
                        placeholder="Enter assignment description"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Marks</label>
                    <input
                        type="number"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                        className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                        placeholder="Enter total marks"
                        required
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Thumbnail Image URL</label>
                    <input
                        type="url"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                        placeholder="Enter thumbnail image URL"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Difficulty Level</label>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Due Date</label>
                    <DatePicker
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
                        className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                    />
                </div>

                {/* <div className="optional-section bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Optional: Creator Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Creator Name</label>
                            <input
                                type="text"
                                value={creatorName}
                                onChange={(e) => setCreatorName(e.target.value)}
                                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700">Creator Email</label>
                            <input
                                type="email"
                                value={creatorEmail}
                                onChange={(e) => setCreatorEmail(e.target.value)}
                                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                </div> */}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Create Assignment
                </button>
            </form>
        </div>
    );
};

export default CreateAssignment;
