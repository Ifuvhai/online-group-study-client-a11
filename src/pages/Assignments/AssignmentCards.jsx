import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AssignmentCards = ({ data, setAllAssignments, allAssignments }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, description, marks, thumbnail, creator, difficulty } = data;

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                if (creator.email === user.email) {
                    fetch(`http://localhost:5000/assignments/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            const updatedAssignments = allAssignments.filter((item) => item._id !== id);
                            setAllAssignments(updatedAssignments);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        })
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Only the creator can delete it !"
                      });
                }
            }
        });

    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        className='h-60 object-cover w-full'
                        src={thumbnail}
                        alt="thumbnail" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='w-5/6 overflow-hidden'>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-primary">Update</button>
                        </Link>
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">View Assignment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCards;