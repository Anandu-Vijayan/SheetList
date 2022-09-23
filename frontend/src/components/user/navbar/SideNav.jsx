import React from "react";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <>
      {/* <!-- sidebar --> */}
      <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* <!-- logo --> */}
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-2xl font-extrabold">Time Sheet</span>
        </a>

        {/* <!-- nav --> */}
        <nav>
          <Link
            to="/"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/currentTasks"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Current Tasks
          </Link>
          <Link
            to="/previousTasks"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Previous Tasks
          </Link>
          <Link
            to="/addATimesheet"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Add a Timesheet
          </Link>

          <Link
            to="/waitingFAccept"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Waiting for Accept
          </Link>
          <Link
            to="/acceptedTasks"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Accepted Tasks
          </Link>
          <Link
            to="/rejectedTask"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Rejected Tasks
          </Link>
        </nav>
      </div>
    </>
  );
};
