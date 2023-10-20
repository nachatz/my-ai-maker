import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Link href="/contact" className="text-gray-500 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/docs" className="text-gray-500 hover:text-gray-900">
              Documentation
            </Link>
            <Link href="/auth/login" className="text-gray-500 hover:text-gray-900">
              Register
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            MyAIMaker seeks to augment the machine learning experience by making
            it more accessible to the general public whilst also enabling
            advanced users to create and manage their models and data.
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
