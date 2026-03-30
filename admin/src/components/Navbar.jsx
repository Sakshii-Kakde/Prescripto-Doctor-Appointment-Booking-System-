import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext)
  const { dToken, setDToken } = useContext(DoctorContext)

  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const logout = () => {

    if (aToken) {
      setAToken('')
      localStorage.removeItem('aToken')
    }

    if (dToken) {
      setDToken('')
      localStorage.removeItem('dToken')
    }

    navigate('/')
  }

  return (
    <div className='sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md'>

      {/* Left Section */}
      <div className='flex items-center gap-4'>

        <img
          onClick={() => navigate('/')}
          className='w-40 transition cursor-pointer hover:scale-105'
          src={assets.icon_logo}
          alt=""
        />

        <span className={`px-4 py-1 text-xs font-semibold rounded-full
          ${aToken 
            ? "bg-blue-100 text-blue-600"
            : "bg-green-100 text-green-600"
          }`}
        >
          {aToken ? "Admin Panel" : "Doctor Panel"}
        </span>

      </div>

      {/* Right Section */}
      <div className='relative'>

        <div
          onClick={() => setOpen(!open)}
          className='flex items-center gap-3 cursor-pointer'
        >
          <div className='flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-primary'>
            {aToken ? "A" : "D"}
          </div>
        </div>

        {/* Dropdown */}
        {open && (
          <div className='absolute right-0 w-40 py-2 mt-3 bg-white border shadow-lg rounded-xl animate-fadeIn'>

            <button
              onClick={() => navigate('/')}
              className='w-full px-4 py-2 text-sm text-left transition hover:bg-gray-100'
            >
              Home
            </button>

            <button
              onClick={logout}
              className='w-full px-4 py-2 text-sm text-left text-red-600 transition hover:bg-red-50'
            >
              Logout
            </button>

          </div>
        )}

      </div>

    </div>
  )
}

export default Navbar