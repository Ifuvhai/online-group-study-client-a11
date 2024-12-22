import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AssignmentCards from './AssignmentCards';

const Assignments = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>All Assignments</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    loadedData.map(data=> <AssignmentCards key={data._id} data={data}></AssignmentCards>)
                }
            </div>
        </div>
    );
};

export default Assignments;