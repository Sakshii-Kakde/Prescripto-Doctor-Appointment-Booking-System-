import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  const { aToken } = useContext(AdminContext)
  const { dToken } = useContext(DoctorContext)

  const linkClasses = ({ isActive }) =>
    `relative flex items-center gap-4 py-3 px-5 md:px-8 md:min-w-72 rounded-r-2xl
     transition-all duration-300 group
     ${isActive 
        ? 'bg-gradient-to-r from-primary/20 to-primary/5 text-primary font-semibold shadow-sm'
        : 'hover:bg-gray-100 hover:text-primary'
     }`

  return (
    <div className='bg-white border-r shadow-md min-h-[calc(100vh-64px)]'>

      {/* ADMIN SIDEBAR */}
      {aToken && (
        <ul className='mt-6 space-y-2 text-gray-600'>

          <NavLink className={linkClasses} to='/admin-dashboard'>
            <img className='w-5 transition group-hover:scale-110' src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink className={linkClasses} to='/all-appointments'>
            <img className='w-5 transition group-hover:scale-110' src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink className={linkClasses} to='/add-doctor'>
            <img className='w-5 transition group-hover:scale-110' src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Doctor</p>
          </NavLink>

          <NavLink className={linkClasses} to='/doctor-list'>
            <img className='w-5 transition group-hover:scale-110' src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Doctors List</p>
          </NavLink>

          {/* <NavLink className={linkClasses} to='/all-patients'>
            <img className='w-5 transition group-hover:scale-110' src={assets.people_icon} alt="" />
            <p className='hidden md:block'>All Patients</p>
          </NavLink> */}

        </ul>
      )}

      {/* DOCTOR SIDEBAR */}
      {dToken && (
        <ul className='mt-6 space-y-2 text-gray-600'>

          <NavLink className={linkClasses} to='/doctor-dashboard'>
            <img className='w-5 transition group-hover:scale-110' src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink className={linkClasses} to='/doctor-appointments'>
            <img className='w-5 transition group-hover:scale-110' src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink className={linkClasses} to='/doctor-profile'>
            <img className='w-5 transition group-hover:scale-110' src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Profile</p>
          </NavLink>

        </ul>
      )}

    </div>
  )
}

export default Sidebar