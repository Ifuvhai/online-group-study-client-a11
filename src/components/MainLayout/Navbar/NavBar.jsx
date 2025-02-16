import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { ThemeContext } from '../../../provider/ThemeProvider/ThemeProvider';

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, handleSignOut } = useContext(AuthContext); // Change this state dynamically based on authentication

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/assignments"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Assignments
                </NavLink>
            </li>


        </>
    );


    const logOutUser = () => {
        handleSignOut();
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-md fixed z-50 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <img className='w-20 h-20 object-cover rounded-full' src="https://i.ibb.co.com/PMf1RFY/online-study-logo-design-2cf5cf.jpg" alt="" />

                    <a href="/" className="btn btn-ghost text-xl font-bold text-blue-600">
                        Online Study
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
                </div>
                <div className="navbar-end">
                    <div className='mr-2'>
                        <input
                            type="checkbox"
                            className="toggle"
                            onChange={(e) => {
                                const theme = e.target.checked ? "dark" : "light";
                                document.documentElement.setAttribute("data-theme", theme);
                                localStorage.setItem("theme", theme);
                            }}
                            defaultChecked={localStorage.getItem("theme") === "dark"}
                        />
                    </div>
                    {!user ? (
                        <Link to="/login" className="btn bg-blue-600 text-white hover:bg-blue-700">
                            Login
                        </Link>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                                data-tip={user?.displayName || "Anonymous"}>
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="Profile" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li className="px-4 py-2 text-gray-700">{user?.displayName}</li>
                                <li>
                                    <NavLink
                                        to="/create-assignment"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        Create Assignment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/attempted-assignments"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        My Attempted Assignments
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/pending-assignments"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        Pending Assignments
                                    </NavLink>
                                </li>
                                <li>
                                    <button onClick={logOutUser} className="hover:bg-gray-100">Logout</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
