import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Contact = () => {

  const { backendUrl } = useContext(AppContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const { data } = await axios.post(
        backendUrl + "/api/contact/send-message",
        formData
      )

      if (data.success) {
        toast.success("Message sent successfully")
        setFormData({ name: "", email: "", message: "" })
      }

    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="px-6 md:px-10 lg:px-20">

      <div className="pt-12 text-center">
        <p className="text-3xl font-semibold text-gray-700">
          CONTACT <span className="text-primary">US</span>
        </p>
      </div>

      <div className="flex flex-col gap-12 my-12 md:flex-row">

        <div className="md:w-1/2">
          <img
            className="w-full rounded-lg shadow-lg"
            src={assets.contact_image}
            alt="contact"
          />
        </div>

        <div className="flex flex-col justify-center gap-6 md:w-1/2">

          <div>
            <h3 className="text-xl font-semibold text-gray-700">Our Office</h3>
            <p className="mt-2 text-gray-500">
              ITM College <br />
              Nanded, Maharashtra, India
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Contact Information
            </h3>
            <p className="mt-2 text-gray-500">
              📞 +91 9022563023 <br />
              📧 kakdesakshi266@gmail.com
            </p>
          </div>

          <Link to="/careers">
            <button className='px-6 py-2 mt-10 text-sm text-black border border-gray-700 rounded-md hover:bg-primary hover:text-white'>
              Explore Jobs
            </button>
          </Link>

        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl p-8 mx-auto mb-20 bg-white shadow-lg rounded-xl">

        <h2 className="mb-6 text-xl font-semibold text-center text-gray-700">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="px-4 py-2 border rounded-md outline-none focus:border-primary"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="px-4 py-2 border rounded-md outline-none focus:border-primary"
          />

          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="px-4 py-2 border rounded-md outline-none resize-none focus:border-primary"
          />

          <button className="py-2 mt-2 text-white rounded-md bg-primary hover:bg-opacity-90">
            Send Message
          </button>

        </form>
      </div>

    </div>
  )
}

export default Contact