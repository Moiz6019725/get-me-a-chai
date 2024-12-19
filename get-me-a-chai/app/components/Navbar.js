"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropDown, setshowDropDown] = useState(false);
  console.log(session);
  
  return (
    <nav className="bg-gray-900 sticky top-0 z-10 text-white flex justify-between items-center px-4 h-16 shadow-2xl">
      <div className="logo font-bold text-xl">
        <Link href="/" className="flex items-center justify-center gap-3">
          <span>
            <img src="/tea.gif" width={33} alt="" />
          </span>
          GetMeAChai!
        </Link>
      </div>
      {/* <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}
      <div>
        {session && (
          <>
            <button
              onClick={() => {
                setshowDropDown(!showDropDown);
              }}
              id="dropdownDefaultButton"
              className="relative"
              data-dropdown-toggle="dropdown"
              type="button"
            >
              <img
                className="rounded-full"
                src={session.user.image}
                width={44}
                alt=""
              />
              <svg
                className="w-3 invert h-3 bg-gray-900 rounded-full ms-3 absolute bottom-0 right-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 ${
                showDropDown ? "" : "hidden"
              } absolute right-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href={`/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Sign out
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
        {!session && (
          <Link href="/login">
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;