import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AssignmentCards from './AssignmentCards';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const Assignments = () => {

    const loadedData = useLoaderData()
    const [allAssignments, setAllAssignments] = useState(loadedData)
    // console.log(loadedData);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [difficulty, setDifficulty] = useState(""); // State for selected difficulty level

    // Fetch assignments based on difficulty level
    const handleFilter = async (difficultyLevel) => {
        setDifficulty(difficultyLevel);
    };

    const handleSearch = e => {
        e.preventDefault();
        const searchInput = e.target.search.value;
        const searchFilter = allAssignments.filter(item => item.difficulty === searchInput)
        setAllAssignments(searchFilter);
    }



    return (
        <div>
            <h2 className='text-4xl text-center font-bold my-10'>All Assignments</h2>
            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 container mx-auto">
                {/* Search Bar */}
                <form
                    onSubmit={handleSearch}
                    className="flex items-center w-full md:w-1/2"
                >
                    <input
                        type="text"
                        placeholder={difficulty}
                        value={difficulty}
                        name='search'
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-l focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {/* Filter Dropdown */}
                    <div className="relative">
                        <select
                            onChange={(e) => handleFilter(e.target.value)}
                            value={difficulty}
                            className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="">Filter by Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-all"
                    >
                        Search
                    </button>
                </form>


            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allAssignments.map(data => <AssignmentCards key={data._id} setAllAssignments={setAllAssignments} allAssignments={allAssignments} data={data}></AssignmentCards>)
                }
            </div>
        </div>
    );
};

export default Assignments;