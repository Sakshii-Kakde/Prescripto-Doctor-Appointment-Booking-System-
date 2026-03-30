import React from "react";

const Careers = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20">

      {/* Page Heading */}
      <div className="pt-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-700">
          Careers at <span className="text-primary">PRESCRIPTO</span>
        </h1>
        <p className="mt-2 text-gray-500">
          Join our mission to improve healthcare through technology.
        </p>
      </div>

      {/* About Careers */}
      <div className="max-w-4xl mx-auto mt-10 text-center text-gray-600">
        <p>
          At PRESCRIPTO, we are passionate about building digital healthcare
          solutions that make medical services accessible for everyone.
          Our team is made up of talented developers, designers, and healthcare
          professionals working together to create innovative products.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">

        <div className="p-6 transition shadow-md rounded-xl hover:shadow-lg">
          <h3 className="text-lg font-semibold">Frontend Developer</h3>
          <p className="mt-2 text-sm text-gray-500">
            React, Tailwind, UI/UX focused developer to build modern interfaces.
          </p>
          <button className="px-4 py-2 mt-4 text-sm text-white rounded-md bg-primary">
            Apply Now
          </button>
        </div>

        <div className="p-6 transition shadow-md rounded-xl hover:shadow-lg">
          <h3 className="text-lg font-semibold">Backend Developer</h3>
          <p className="mt-2 text-sm text-gray-500">
            Node.js developer responsible for APIs and database systems.
          </p>
          <button className="px-4 py-2 mt-4 text-sm text-white rounded-md bg-primary">
            Apply Now
          </button>
        </div>

        <div className="p-6 transition shadow-md rounded-xl hover:shadow-lg">
          <h3 className="text-lg font-semibold">UI/UX Designer</h3>
          <p className="mt-2 text-sm text-gray-500">
            Design intuitive healthcare interfaces and improve user experience.
          </p>
          <button className="px-4 py-2 mt-4 text-sm text-white rounded-md bg-primary">
            Apply Now
          </button>
        </div>

      </div>

      {/* Footer Message */}
      <div className="mt-16 mb-20 text-center text-gray-500">
        <p>
          Don't see a role that fits? Send your resume to
          <span className="font-semibold text-primary"> careers@prescripto.com</span>
        </p>
      </div>

    </div>
  );
};

export default Careers