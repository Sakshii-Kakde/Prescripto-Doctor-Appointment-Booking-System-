import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24">

      {/* ---------- Title ---------- */}
      <div className="pt-10 text-3xl font-semibold text-center text-gray-700">
        ABOUT <span className="text-primary">US</span>
      </div>

      {/* ---------- Intro Section ---------- */}
      <div className="flex flex-col items-center gap-10 my-12 md:flex-row">
        <img
          className="w-full rounded-lg shadow-md md:max-w-[380px]"
          src={assets.about_image}
          alt=""
        />

        <div className="flex flex-col gap-6 text-justify text-gray-600 md:w-1/2">
          <p>
            Welcome To Prescripto, Your Trusted Partner In Managing Your
            Healthcare Needs Conveniently And Efficiently. At Prescripto, We
            Understand The Challenges Individuals Face When Scheduling Doctor
            Appointments And Managing Health Records.
          </p>

          <p>
            Prescripto Is Committed To Excellence In Healthcare Technology. We
            Continuously Improve Our Platform By Integrating Modern Technology
            To Deliver Better Healthcare Services And User Experience.
          </p>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Our Vision
            </h3>
            <p>
              Our Vision At Prescripto Is To Create A Seamless Healthcare
              Experience For Every User By Connecting Patients And Healthcare
              Providers Through Technology.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Prescripto System Section ---------- */}
      <div className="py-10">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
          About <span className="text-primary">Prescripto System</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-4 text-justify text-gray-600">
          <p>
            Prescripto is a modern healthcare appointment management system
            designed to simplify the way patients connect with doctors. Our
            platform allows users to easily search doctors based on their
            specialization, view their availability, and book appointments
            online without any hassle.
          </p>

          <p>
            The system helps healthcare providers manage their schedules
            efficiently while giving patients a fast and convenient way to
            access healthcare services. By removing long waiting times and
            manual booking processes, Prescripto makes healthcare more
            accessible and organized.
          </p>

          <p>
            Built with modern web technologies, Prescripto focuses on security,
            reliability, and ease of use. Our goal is to create a trusted
            digital healthcare environment where patients and doctors can
            interact smoothly and manage appointments effectively.
          </p>
        </div>
      </div>

      {/* ---------- Statistics Section ---------- */}
      <div className="py-10 text-center bg-gray-50 rounded-xl">
        <h2 className="mb-3 text-2xl font-semibold text-gray-700">
          Prescripto Healthcare Overview
        </h2>

        <p className="mb-8 text-gray-500">
          Delivering modern healthcare solutions through technology.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold text-primary">300+</h3>
            <p className="text-gray-600">Doctors Connected</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">500+</h3>
            <p className="text-gray-600">Appointments Daily</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">20+</h3>
            <p className="text-gray-600">Hospitals Partnered</p>
          </div>
        </div>
      </div>

      {/* ---------- WHY CHOOSE US ---------- */}
      <div className="mt-16 mb-20">
        <h2 className="mb-10 text-2xl font-semibold text-center text-gray-600">
          WHY <span className="text-primary">CHOOSE US</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="p-8 text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white">
            <h3 className="mb-3 font-semibold text-gray-800">Efficiency</h3>
            <p className="text-justify">
              Streamlined Appointment Scheduling That Fits Into Your Busy
              Lifestyle.
            </p>
          </div>

          <div className="p-8 text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white">
            <h3 className="mb-3 font-semibold text-gray-800">Convenience</h3>
            <p className="text-justify">
              Access To A Network Of Trusted Healthcare Professionals In Your
              Area.
            </p>
          </div>

          <div className='p-8 text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white'>
            <h3 className="mb-3 font-semibold text-gray-800">Personalization</h3>
            <p className="text-justify">
              Tailored Recommendations And Reminders To Help You Stay On Top Of
              Your Health.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;