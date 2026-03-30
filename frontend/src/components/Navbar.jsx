import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()
  const { token, setToken, userData } = useContext(AppContext)

  const [showMenu, setShowMenu] = useState(false)

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
    navigate('/')
    window.scrollTo(0,0)
  }

  return (
    <div className='sticky top-0 z-50 flex items-center justify-between py-4 mb-5 text-sm bg-white border-b border-gray-300'>

      {/* Logo */}
      <img
        onClick={() => {navigate('/'); window.scrollTo(0,0)}}
        className='cursor-pointer w-44'
        src={assets.icon_logo}
        alt="logo"
      />

      {/* Desktop Menu */}
      <ul className='items-start hidden gap-6 font-medium md:flex'>

        <NavLink to="/" className={({isActive}) => isActive ? "text-primary" : ""}>
          <li className='py-1 transition hover:text-primary'>HOME</li>
        </NavLink>

        <NavLink to="/doctors" className={({isActive}) => isActive ? "text-primary" : ""}>
          <li className='py-1 transition hover:text-primary'>ALL DOCTORS</li>
        </NavLink>

        <NavLink to="/about" className={({isActive}) => isActive ? "text-primary" : ""}>
          <li className='py-1 transition hover:text-primary'>ABOUT</li>
        </NavLink>

        <NavLink to="/blog" className={({isActive}) => isActive ? "text-primary" : ""}>
          <li className='py-1 transition hover:text-primary'>BLOG</li>
        </NavLink>

        <NavLink to="/faq" className={({isActive}) => isActive ? "text-primary" : ""}>
          <li className='py-1 transition hover:text-primary'>FAQ</li>
        </NavLink>

        <NavLink to="/contact" className={({isActive}) => isActive ? "text-primary" : ""}>
          <li className='py-1 transition hover:text-primary'>CONTACT</li>
        </NavLink>

      </ul>

      {/* Right Section */}
      <div className='flex items-center gap-4'>

        {token && userData ? (

          <div className='relative flex items-center gap-2 cursor-pointer group'>

            <img
              className='w-8 border rounded-full'
              src={userData.image}
              alt="profile"
            />

            <img className='w-2.5' src={assets.dropdown_icon} alt="" />

            {/* Dropdown */}
            <div className='absolute right-0 z-20 hidden pt-14 group-hover:block'>

              <div className='flex flex-col gap-2 p-4 text-base font-medium text-gray-600 bg-white border rounded-lg shadow-lg w-44'>

                <p
                  onClick={() => navigate('/my-profile')}
                  className='cursor-pointer hover:text-primary'
                >
                  My Profile
                </p>

                <p
                  onClick={() => navigate('/my-appointments')}
                  className='cursor-pointer hover:text-primary'
                >
                  My Appointments
                </p>

                <p
                  onClick={logout}
                  className='cursor-pointer hover:text-red-500'
                >
                  Logout
                </p>

              </div>

            </div>

          </div>

        ) : (

          <button
            onClick={() => navigate('/login')}
            className='hidden px-8 py-3 text-white transition bg-blue-600 rounded-full md:block hover:bg-blue-700'
          >
            Create Account
          </button>

        )}

        {/* Mobile Menu Button */}
        <img
          src={assets.menu_icon}
          className='w-6 cursor-pointer md:hidden'
          alt=""
          onClick={() => setShowMenu(true)}
        />

        {/* Mobile Menu */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>

          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.icon_logo} alt="" />
            <img
              src={assets.cross_icon}
              className='w-7'
              alt=""
              onClick={() => setShowMenu(false)}
            />
          </div>

          <ul className='flex flex-col items-center gap-3 px-5 mt-5 text-lg font-medium'>

            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className='px-4 py-2 rounded hover:bg-gray-100'>HOME</p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className='px-4 py-2 rounded hover:bg-gray-100'>ALL DOCTORS</p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className='px-4 py-2 rounded hover:bg-gray-100'>ABOUT</p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className='px-4 py-2 rounded hover:bg-gray-100'>CONTACT</p>
            </NavLink>

          </ul>

        </div>

      </div>

    </div>
  )
}

export default Navbar