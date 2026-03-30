import React from "react";
import { assets } from "../assets/assets"
import { Link } from "react-router-dom"
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer className="mt-40 md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* --------- Left Section --------- */}
        <div>
          <img
            onClick={() => {navigate('/'); window.scrollTo(0,0)}}
            className='cursor-pointer w-44'
            src={assets.icon_logo}
            alt="logo"
          />

          <p className="pt-6 leading-6 text-gray-600 md:w-2/3">
            Prescripto is a modern online doctor appointment booking platform
            designed to make healthcare access simple, secure, and efficient.
            Book appointments with certified doctors anytime, anywhere.
          </p>

          <p className="mt-6 text-sm font-medium text-gray-700">
            Developed with ❤️ by{" "}
            <Link
              to="/developers"
              className="font-semibold text-primary hover:underline"
            >
              S3 Team
            </Link>
          </p>
        </div>

        {/* --------- Center Section --------- */}
        <div>
          <p className="mb-5 text-xl font-semibold text-gray-700">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="transition duration-300 hover:text-primary hover:underline"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="transition duration-300 hover:text-primary hover:underline"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition duration-300 hover:text-primary hover:underline"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/privacy-policy"
                className="transition duration-300 hover:text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* --------- Right Section --------- */}
        <div>
          <p className="mb-5 text-xl font-semibold text-gray-700">
            Get In Touch
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              📞{" "}
              <a
                href="tel:+919022563023"
                className="ml-1 transition hover:text-primary hover:underline"
              >
                +91 9022563023
              </a>
            </li>
            <li>
              📧{" "}
              <a
                href="mailto:kakdesakshi266@email.com"
                className="ml-1 transition hover:text-primary hover:underline"
              >
                kakdesakshi266@gmail.com
              </a>
            </li>
            <li>📍 India</li>
          </ul>
        </div>
      </div>

      {/* --------- Bottom Section --------- */}
      <div className="border-t">
        <p className="py-5 text-sm text-center text-gray-600">
          © 2026 Prescripto. All Rights Reserved. | Designed & Developed by
          <Link to="/developers" className="font-semibold text-primary hover:underline"> {" "}
            S3 Team
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
