import React, { useState } from "react";

const Careers = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const openApplicationForm = (role) => {
    setSelectedRole(role);

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: role,
      message: "",
      resume: null,
    });

    setSuccess("");
    setError("");
    setShowForm(true);
  };

  const closeApplicationForm = () => {
    if (!loading) {
      setShowForm(false);
      setSuccess("");
      setError("");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("position", formData.position);
      data.append("message", formData.message);
      data.append("resume", formData.resume);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/careers/apply`,
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSuccess(
        "Application submitted successfully! Your resume has been sent to our careers team."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        position: selectedRole,
        message: "",
        resume: null,
      });

      // Reset file input
      document.getElementById("resume").value = "";

    } catch (err) {
      setError(
        err.message ||
          "Unable to submit your application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const jobs = [
    {
      title: "Frontend Developer",
      description:
        "React, Tailwind, UI/UX focused developer to build modern healthcare interfaces.",
    },
    {
      title: "Backend Developer",
      description:
        "Node.js developer responsible for APIs, database systems, and backend services.",
    },
    {
      title: "UI/UX Designer",
      description:
        "Design intuitive healthcare interfaces and improve the overall user experience.",
    },
  ];

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

        {jobs.map((job) => (
          <div
            key={job.title}
            className="p-6 transition shadow-md rounded-xl hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">
              {job.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {job.description}
            </p>

            <button
              onClick={() => openApplicationForm(job.title)}
              className="px-4 py-2 mt-4 text-sm text-white rounded-md bg-primary"
            >
              Apply Now
            </button>
          </div>
        ))}

      </div>

      {/* Footer Message */}
      <div className="mt-16 mb-20 text-center text-gray-500">
        <p>
          Don't see a role that fits? Send your resume to{" "}
          <a
            href="mailto:careers@prescripto.com"
            className="font-semibold text-primary"
          >
            careers@prescripto.com
          </a>
        </p>
      </div>

      {/* Application Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">

          <div className="w-full max-w-lg p-6 bg-white shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Apply for {selectedRole}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Submit your details and resume.
                </p>
              </div>

              <button
                onClick={closeApplicationForm}
                className="text-xl text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            {/* Success Message */}
            {success && (
              <div className="p-4 mb-4 text-sm text-green-700 border border-green-200 rounded-lg bg-green-50">
                <strong>Success!</strong>
                <p className="mt-1">{success}</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-4 mb-4 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">
                <strong>Error!</strong>
                <p className="mt-1">{error}</p>
              </div>
            )}

            {!success && (
              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md outline-none focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md outline-none focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md outline-none focus:border-primary"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Position */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Position
                  </label>

                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md outline-none focus:border-primary"
                  >
                    <option value="">Select position</option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">
                      Backend Developer
                    </option>
                    <option value="UI/UX Designer">
                      UI/UX Designer
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Cover Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border rounded-md outline-none resize-none focus:border-primary"
                    placeholder="Tell us briefly about yourself..."
                  />
                </div>

                {/* Resume */}
                <div className="mb-5">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Resume
                  </label>

                  <input
                    id="resume"
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 py-2 text-sm border rounded-md"
                  />

                  <p className="mt-1 text-xs text-gray-500">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 text-white rounded-md bg-primary disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

              </form>
            )}

            {success && (
              <button
                onClick={closeApplicationForm}
                className="w-full py-2 mt-3 text-white rounded-md bg-primary"
              >
                Close
              </button>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;