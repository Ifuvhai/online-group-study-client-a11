import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGooglePlusG } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState("")

    const [showPassword, setShowPassword] = useState(false);

    const { handleGoogleSignIn, handleLogIn, user, setUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleLogIn(email, password)
            .then(res => {
                setUser(res.user);
                Swal.fire({
                    title: "Successful!",
                    text: "Logged in successfully!",
                    icon: "success"
                  });
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))

    }

    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res.user);
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))
    }
    console.log(error);

    return (
        <div>
             <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-xl mb-10 pb-10">
                    <h2 className="text-3xl font-bold text-gray-600 mt-5 text-center">Please Login</h2>
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <div
                                className="absolute right-3 bottom-14 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ?
                                 <FaEyeSlash /> 
                                 : <FaEye />}
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider w-5/6 mx-auto">OR</div>
                    <div onClick={handleGoogle} className='border-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg w-5/6 mx-auto flex items-center gap-20 p-2'>
                        <div className='text-3xl pl-4'>
                            <FaGooglePlusG />
                        </div>
                        <div>
                            <span className='text-xl font-semibold'>Login with Google</span>
                        </div>
                    </div>
                    <p className='w-5/6 mx-auto mt-5 font-semibold text-center'>Didn't have an account? <Link className='text-green-500 font-bold' to="/register">Register</Link></p>
                </div>
        </div>
    );
};

export default Login;