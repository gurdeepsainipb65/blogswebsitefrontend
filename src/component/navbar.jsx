import React, { useState } from "react";
import { Link } from "react-router-dom";
import { is_authenticated, Logout } from "../authentication/authentication";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand name  */}
        <Link className="flex justify-center items-center gap-2" to="/">
        <div><img className="h-8" src="src\assets\bloglogo.svg" alt="" /></div>
          <div className="text-2xl font-bold">Bloggers</div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Login and Sign Up Buttons (Desktop) */}
        {is_authenticated() ? (
          <div className="hidden md:flex space-x-4">
            <Link
              to="/profile"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Profile
            </Link>
            <button
              onClick={Logout}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="hidden md:flex space-x-4">
            <Link
              to="/signup"
              className="bg-white lg:w-32 lg:flex lg:justify-center font-semibold lg:items-center lg:rounded-3xl text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="bg-white lg:w-32 lg:flex lg:justify-center font-semibold lg:items-center lg:rounded-3xl text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Log in
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 transition duration-300 ease-in-out transform">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className="block hover:text-blue-200 transition duration-300"
              >
                Blogs
              </Link>
            </li>
            {is_authenticated() ? (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-300"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={Logout}
                    className="block w-full text-left bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-300"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-300"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-300"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
