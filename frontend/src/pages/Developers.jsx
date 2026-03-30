import React from "react";
import sakshiImg from "../assets/sakshi.jpeg";
import santoshiImg from "../assets/santoshi.jpeg";
import sahyadriImg from "../assets/sahyadri.jpeg";

const Developers = () => {
  return (
    <div className="px-6 py-10 md:px-20">
      
      <h1 className="mb-4 text-3xl font-bold text-center text-gray-800 md:text-4xl">
        Meet the Developers
      </h1>

      <p className="mb-12 text-center text-gray-600">
        The passionate team behind <span className="font-semibold text-primary">Prescripto </span> 
        who worked together to build a smart healthcare platform.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        
        {/* Developer 1 */}
        <div className="max-w-sm p-6 mx-auto text-center transition duration-300 transform bg-white border shadow-lg rounded-xl hover:shadow-2xl hover:scale-105">
          <img src={sakshiImg} alt="Sakshi" className="object-contain w-24 h-24 mx-auto mb-4 border-4 rounded-full "/>
          
          <h2 className="text-xl font-semibold text-gray-800">Kakde Sakshi Shrirang</h2>
          
          <p className="mb-3 text-primary">Full Stack Developer</p>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p><strong>Course:</strong> BCA (Final Year)</p>
            <p><strong>Skills:</strong> React.js, Tailwind CSS, Node.js, Express.js, MongoDB, API Integration</p>
            <p><strong>Role in Project:</strong> Designed complete UI/UX, Developed frontend, Built backend APIs, Integrated database, Managed authentication & routing</p>
            <p><strong>Email:</strong> kakdesakshi266@gmail.com</p>
          </div>
        </div>

        {/* Developer 2 */}
        <div className="max-w-sm p-6 mx-auto text-center transition duration-300 transform bg-white border shadow-lg rounded-xl hover:shadow-2xl hover:scale-105">
            <img src={santoshiImg} alt="Santoshi" className="object-contain w-24 h-24 mx-auto mb-4 border-4 rounded-full"/>

          <h2 className="text-xl font-semibold text-gray-800">Kakde Santoshi Dnyaneshwar</h2>

          <p className="mb-3 text-primary">Project Analyst</p>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p><strong>Course:</strong> BCA (Final Year)</p>
            <p><strong>Skills:</strong> Requirement Analysis, Documentation, Testing & Feedback</p>
            <p><strong>Role in Project:</strong> Assisted in project planning, Prepared documentation, Conducted testing and provided UI improvement suggestions.</p>
            <p><strong>Email:</strong> kakdesantoshi696@gmail.com</p>
          </div>
        </div>

        {/* Developer 3 */}
        <div className="max-w-sm p-6 mx-auto text-center transition duration-300 transform bg-white border shadow-lg rounded-xl hover:shadow-2xl hover:scale-105">
          <img src={sahyadriImg} alt="Sahyadri" className="object-contain w-24 h-24 mx-auto mb-4 border-4 rounded-full"/>

          <h2 className="text-xl font-semibold text-gray-800">Hambarde Sahyadri Anandrao</h2>

          <p className="mb-3 text-primary">QA & Testing</p>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p><strong>Course:</strong> BCA (Final Year)</p>
            <p><strong>Skills:</strong> Manual Testing, Bug Reporting</p>
            <p><strong>Role in Project:</strong> Tested application features, Identified bugs, Assisted in final review and presentation preparation.</p>
            <p><strong>Email:</strong> sahyadrihambarde89@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Developers;