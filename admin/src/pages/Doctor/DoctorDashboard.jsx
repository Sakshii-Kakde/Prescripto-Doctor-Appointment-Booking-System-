import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

  const { dToken, dashData, getDashData, completeAppointment, cancelAppointment } = useContext(DoctorContext)
  const { currency, slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (
    <div className='min-h-screen p-8 bg-gray-50'>

      {/* Page Title */}
      <h1 className='mb-8 text-3xl font-bold text-gray-800'>
        Doctor Dashboard
      </h1>

      {/* Stats Cards */}
      <div className='flex flex-wrap gap-6 mb-10'>

        {/* Earnings */}
        <div className='flex items-center gap-5 p-6 bg-white shadow-lg rounded-2xl min-w-64'>
          <div className='flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl'>
            <img src={assets.earning_icon} className='w-8' alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>
              {currency} {dashData.earnings}
            </p>
            <p className='text-sm text-gray-500'>Total Earnings</p>
          </div>
        </div>

        {/* Appointments */}
        <div className='flex items-center gap-5 p-6 bg-white shadow-lg rounded-2xl min-w-64'>
          <div className='flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl'>
            <img src={assets.appointments_icon} className='w-8' alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>
              {dashData.appointments}
            </p>
            <p className='text-sm text-gray-500'>Total Appointments</p>
          </div>
        </div>

        {/* Patients */}
        <div className='flex items-center gap-5 p-6 bg-white shadow-lg rounded-2xl min-w-64'>
          <div className='flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl'>
            <img src={assets.patients_icon} className='w-8' alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>
              {dashData.patients}
            </p>
            <p className='text-sm text-gray-500'>Total Patients</p>
          </div>
        </div>

      </div>

      {/* Latest Bookings Section */}
      <div className='bg-white shadow-sm rounded-2xl'>

        <div className='flex items-center gap-3 px-6 py-5 border-b'>
          <img className='w-5' src={assets.list_icon} alt="" />
          <p className='text-lg font-semibold text-gray-800'>
            Latest Bookings
          </p>
        </div>

        <div>
          {dashData.latestAppointments.map((item, index) => (
            <div
              key={index}
              className='flex items-center justify-between px-6 py-4 border-b hover:bg-gray-50'
            >

              <div className='flex items-center gap-4'>
                <img
                  className='object-cover w-12 h-12 rounded-full'
                  src={item.userData.image}
                  alt=""
                />

                <div>
                  <p className='font-semibold text-gray-800'>
                    {item.userData.name}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>
              </div>

              {/* Status */}
              {item.cancelled ? (
                <span className='px-4 py-1 text-sm font-medium text-red-500 bg-red-100 rounded-full'>
                  Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className='px-4 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full'>
                  Completed
                </span>
              ) : (
                <div className='flex gap-3'>
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className='px-4 py-1 text-sm text-red-500 bg-red-100 rounded-full hover:bg-red-200'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => completeAppointment(item._id)}
                    className='px-4 py-1 text-sm text-green-600 bg-green-100 rounded-full hover:bg-green-200'
                  >
                    Complete
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default DoctorDashboard