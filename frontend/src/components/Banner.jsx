import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate();

  return (
    <section className="mx-4 my-24 md:mx-10">

      <div className="relative flex flex-col items-center justify-between px-8 py-16 overflow-hidden border border-gray-100 shadow-xl bg-primary md:flex-row rounded-3xl md:px-16 lg:px-20">

        {/* Soft Background Accent */}
        <div className="absolute top-0 right-0 rounded-full w-72 h-72 bg-primary/5 blur-3xl"></div>

        {/* -------- LEFT SIDE -------- */}
        <div className="z-10 flex-1">

          <p className="text-sm font-semibold tracking-wide uppercase text-primary">
            Trusted Healthcare Platform
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Book Appointments With
            <span className="block mt-2 text-indigo-200">
              Certified Medical Experts
            </span>
          </h1>

          <p className="max-w-lg mt-6 text-base leading-relaxed text-gray-800">
            Connect with 50+ verified doctors across multiple specialities.
            Fast, secure and reliable healthcare booking made simple.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={() => { navigate('/login'); scrollTo(0,0) }}
              className="px-6 py-2 text-sm font-medium text-gray-600 transition-all duration-300 bg-white rounded-full shadow-md hover:border-gray-700 hover:text-white hover:bg-primary"
            >
              Create Account
            </button>

            <button
              onClick={() => scrollTo(0,600)}
              className="px-6 py-2 text-sm font-medium text-gray-600 transition-all duration-300 bg-white rounded-full shadow-md hover:border-gray-700 hover:text-white hover:bg-primary"
            >
              Explore Doctors
            </button>

          </div>

          {/* Trust Indicators */}
          <div className="flex gap-10 mt-10 text-sm text-gray-600">

            <div>
              <p className="text-2xl font-bold text-indigo-200">300+</p>
              <p className='text-black'>Verified Doctors</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-indigo-200">10K+</p>
              <p className='text-black'>Happy Patients</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-indigo-200">24/7</p>
              <p className='text-black'>Support</p>
            </div>

          </div>

        </div>

        {/* -------- RIGHT SIDE -------- */}
        <div className="relative z-10 justify-end hidden mt-12 md:flex md:w-1/2 md:mt-0">

          <img
            src={assets.appointment_img}
            alt="Doctor Appointment"
            className="w-[380px] lg:w-[440px] drop-shadow-xl"
          />

        </div>

      </div>

    </section>
  )
}

export default Banner