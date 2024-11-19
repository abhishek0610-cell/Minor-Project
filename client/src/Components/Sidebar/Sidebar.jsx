import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaUserGraduate, FaTimes, FaBars, FaSignOutAlt } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); // for navigation

  const toggleSidebar = () => setIsOpen(!isOpen);

  const userData = JSON.parse(localStorage.getItem('userData'));

  if (!userData || !userData.token) {
    console.error('No user data or token found in localStorage');
    toast.error('No token found, please log in.');
    return;
  }
  const handleLogout = async () => {
    try {
      // Retrieve user data from localStorage
  
      // Make the logout request with token and other details
      const { data } = await axios.post(
        '/api/users/logout',
        { isConfirm: true }, // Any necessary body data
        {
          headers: {
            Authorization: `Bearer ${userData.token}`, // Token in the Authorization header
          },
        }
      );
  
      // Check logout response
      if (data.isLoggedOut) {
        localStorage.clear(); // Clear local storage
        navigate('/'); // Redirect to login page
        toast.success('Successfully logged out!'); // Success message
      }
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed. Please try again.'); // Error toast
    }
  };
  

  return (
    <div className="flex h-full fixed">
      <ToastContainer /> {/* Container for toast notifications */}
      <div
        className={`${isOpen ? "w-64" : "w-20"} bg-white shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <FaUserGraduate className="text-blue-600 text-2xl" />
            {isOpen && <span className="ml-2 text-xl font-semibold">{userData.isAdmin ?  "Admin" : "Student"} Console</span>}
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="mt-4">
          {/* Links */}
          <Link to="/dashboard" className="flex items-center w-full p-4 transition-colors duration-200">
            Dashboard
          </Link>
          <Link to="/studyterminal" className="flex items-center w-full p-4 transition-colors duration-200">
            Study Terminal
          </Link>
          <Link to="/quizes" className="flex items-center w-full p-4 transition-colors duration-200">
            Quizzes
          </Link>
          <Link to="/profile" className="flex items-center w-full p-4 transition-colors duration-200">
            Profile
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-4 text-red-500 hover:text-red-700 transition-colors duration-200 mt-6"
          >
            <FaSignOutAlt className="mr-2" />
            {isOpen && <span>Logout</span>}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
