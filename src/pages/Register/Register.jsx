import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const { handleGoogleSignIn, updateUserProfile, handleRegister, user, setUser } = useContext(AuthContext);

    const validatePassword = (password) => {
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        return ""; 
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const validationError = validatePassword(password);
        if (validationError) {
            setPasswordError(validationError);
            return;
        } else {
            setPasswordError("");
        }



        handleRegister(email, password)
            .then(res => {
                setUser(res.user);
                Swal.fire({
                    title: "Successful",
                    text: "Registration Successful!",
                    icon: "success"
                  });
                navigate("/");
                // updateUserProfile(name, photoURL)
            })
            .catch(err => setError(err.message))
    }



    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res.user);
                navigate("/");
            })
            .catch(err => setError(err.message))
    }

    console.log(user);

    return (
        <div>
             <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-xl mb-10 pb-10">
                    <h2 className="text-3xl font-bold text-gray-600 mt-5 text-center">Please Register</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            <div
                                className="absolute right-3 bottom-4 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                            {passwordError && (
                                <p className="mt-2 text-sm text-red-500">{passwordError}</p>
                            )}
                        </div>
                        {error && (
                            <p className="text-sm text-red-500 mt-2">{error}</p>
                        )}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="divider w-5/6 mx-auto">OR</div>
                    <div onClick={handleGoogle} className='border-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg w-5/6 mx-auto flex gap-20 p-2'>
                        <div className='text-3xl pl-4'>
                            <FaGoogle></FaGoogle>
                        </div>
                        <div>
                            <span className='text-xl font-semibold'>Login with Google</span>
                        </div>
                    </div>
                    <p className='w-5/6 mx-auto mt-5 font-semibold text-center'>Already have an account? <Link className='text-green-500 font-bold' to="/login">Login</Link></p>
                </div>
        </div>
    );
};

export default Register;