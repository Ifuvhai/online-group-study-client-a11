import React from 'react';

const AssignmentCards = ({data}) => {
    const {_id, title, description, marks, thumbnail, difficulty} = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                    className='h-80'
                        src={thumbnail}
                        alt="thumbnail" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='w-5/6 overflow-hidden'>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCards;