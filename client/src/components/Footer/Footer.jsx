import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 text-center">
          <div className="flex justify-center items-center space-x-4">
            <Link to="/" className="text-gray-500 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900">
              Register
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            MyAIMaker seeks to augment the machine learning experience by making it more accessible to the general public whilst also enabling advanced users to create and manage their models and data.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MyAIMaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
