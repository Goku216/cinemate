import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white  dark:bg-gray-800">
      <div className="w-full rounded-lg shadow mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030{" "}
          <Link to="/" className="hover:underline">
            Cinemate™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/sagarpariyar42069"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sagar-pariyar-2a5768240/"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@sagarpariyar4065"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Goku216"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
