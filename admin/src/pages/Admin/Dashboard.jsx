import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'


const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='min-h-screen px-6 py-6 bg-gray-50'>

      {/* Page Title */}
      <h2 className='mb-8 text-3xl font-bold text-gray-800'>
        Admin Dashboard
      </h2>

      {/* Stats Section */}
      <div className='grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-3'>

        {/* Doctors */}
        <div className='flex items-center gap-4 p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-lg'>
          <div className='p-3 bg-blue-100 rounded-xl'>
            <img className='w-10' src={assets.doctor_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>
              {dashData.doctors}
            </p>
            <p className='text-sm text-gray-500'>
              Total Doctors
            </p>
          </div>
        </div>

        {/* Appointments */}
        <div className='flex items-center gap-4 p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-lg'>
          <div className='p-3 bg-green-100 rounded-xl'>
            <img className='w-10' src={assets.appointments_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>
              {dashData.appointments}
            </p>
            <p className='text-sm text-gray-500'>
              Total Appointments
            </p>
          </div>
        </div>

        {/* Patients */}
        <div className='flex items-center gap-4 p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-lg'>
          <div className='p-3 bg-purple-100 rounded-xl'>
            <img className='w-10' src={assets.patients_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>
              {dashData.patients}
            </p>
            <p className='text-sm text-gray-500'>
              Total Patients
            </p>
          </div>
        </div>

      </div>

      {/* Latest Bookings */}
      <div className='overflow-hidden bg-white border shadow rounded-2xl'>

        {/* Header */}
        <div className='flex items-center gap-3 px-6 py-4 border-b bg-gray-50'>
          <img className='w-5' src={assets.list_icon} alt="" />
          <p className='text-lg font-semibold text-gray-800'>
            Latest Bookings
          </p>
        </div>

        {/* Booking List */}
        <div className='divide-y'>

          {dashData.latestAppointments.map((item, index) => (

            <div
              key={index}
              className='flex items-center gap-4 px-6 py-4 transition hover:bg-gray-50'
            >

              {/* Doctor Image */}
              <img
                className='object-cover w-12 h-12 border rounded-full'
                src={item.docData.image}
                alt=""
              />

              {/* Doctor Info */}
              <div className='flex-1'>
                <p className='font-semibold text-gray-800'>
                  {item.docData.name}
                </p>
                <p className='text-sm text-gray-500'>
                  {slotDateFormat(item.slotDate)}
                </p>
              </div>

              {/* Status / Action */}
              {item.cancelled ? (
                <span className='px-4 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full'>
                  Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className='px-4 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full'>
                  Completed
                </span>
              ) : (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className='flex items-center gap-2 px-3 py-1 text-sm text-red-600 transition rounded-full bg-red-50 hover:bg-red-100'
                >
                  <img
                    className='w-4'
                    src={assets.cancel_icon}
                    alt=""
                  />
                  Cancel
                </button>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Dashboard