import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

const DoctorAppointments = () => {

  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  const totalAppointments = appointments.length
  const completedAppointments = appointments.filter(item => item.isCompleted).length
  const cancelledAppointments = appointments.filter(item => item.cancelled).length

  // const totalRevenue = appointments
  // .filter(item => item.payment)
  // .reduce((acc, item) => acc + item.amount, 0)

  const totalRevenue = appointments
  .filter(item => item.isCompleted || item.payment)
  .reduce((acc, item) => acc + item.amount, 0)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

  // Cancel with reason
  const handleCancel = (id) => {
    const reason = prompt("Please enter reason for cancelling this appointment:")

    if (!reason || reason.trim() === "") {
      alert("Cancellation reason is required.")
      return
    }

    cancelAppointment(id, reason)
  }

  return (
    <div className='w-full px-6 py-6'>

      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-bold text-gray-800'>
          My Appointments
        </h2>
      </div>

      {/* Stats Section */}
      <div className='grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-4'>

        <div className='p-6 transition bg-white shadow rounded-2xl hover:shadow-lg'>
          <p className='text-center text-gray-500 text-medium'>
            Total Appointments
          </p>
          <h3 className='mt-2 text-2xl font-bold text-center text-primary'>
            {totalAppointments}
          </h3>
        </div>

        <div className='p-6 transition bg-white shadow rounded-2xl hover:shadow-lg'>
          <p className='font-medium text-center text-gray-500'>
            Completed
          </p>
          <h3 className='mt-2 text-2xl font-bold text-center text-green-600'>
            {completedAppointments}
          </h3>
        </div>

        <div className='p-6 transition bg-white shadow rounded-2xl hover:shadow-lg'>
          <p className='font-medium text-center text-gray-500'>
            Cancelled
          </p>
          <h3 className='mt-2 text-2xl font-bold text-center text-red-600'>
            {cancelledAppointments}
          </h3>
        </div>

        <div className='p-6 transition bg-white shadow rounded-2xl hover:shadow-lg'>
          <p className='font-medium text-center text-gray-500'>
            Total Revenue
          </p>
          <h3 className='mt-2 text-2xl font-bold text-center text-primary'>
            {currency}{totalRevenue}
          </h3>
        </div>

      </div>

      {/* Main Card */}
      <div className='overflow-hidden bg-white border shadow-lg rounded-2xl'>

        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[0.5fr_3fr_1fr_3fr_1fr_1fr_1fr] bg-gray-100 text-gray-700 text-sm font-semibold py-4 px-6 sticky top-0 z-10'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Status</p>
          <p>Action</p>
        </div>

        {/* Table Body */}
        <div className='max-h-[70vh] overflow-y-auto'>

          {appointments.map((item, index) => (

            <div
              key={index}
              className='flex flex-col md:grid md:grid-cols-[0.5fr_3fr_1fr_3fr_1fr_1fr_1fr] items-start md:items-center gap-3 md:gap-0 py-4 px-6 border-b hover:bg-gray-50 transition duration-200'
            >

              {/* Index */}
              <p className='hidden font-medium text-gray-600 md:block'>
                {index + 1}
              </p>

              {/* Patient */}
              <div className='flex items-center gap-3'>
                <img
                  className='object-cover w-10 h-10 border rounded-full'
                  src={item.userData.image}
                  alt=""
                />
                <div>
                  <p className='font-medium text-gray-800'>
                    {item.userData.name}
                  </p>
                  <p className='text-xs text-gray-500 md:hidden'>
                    Age: {calculateAge(item.userData.dob)}
                  </p>
                </div>
              </div>

              {/* Age */}
              <p className='hidden text-gray-600 md:block'>
                {calculateAge(item.userData.dob)}
              </p>

              {/* Date */}
              <p className='text-gray-600'>
                {slotDateFormat(item.slotDate)}, {item.slotTime}
              </p>

              {/* Fees */}
              <p className='font-semibold text-gray-700'>
                {currency}{item.amount}
              </p>

              {/* Status */}
              <div>
                {item.cancelled ? (
                  <span className='px-3 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full'>
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className='px-3 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full'>
                    Completed
                  </span>
                ) : (
                  <span className='px-3 py-1 text-xs font-semibold text-yellow-600 bg-yellow-100 rounded-full'>
                    Pending
                  </span>
                )}
              </div>

              {/* Action */}
              <div className='flex gap-2'>

                {!item.cancelled && !item.isCompleted && (
                  <>
                    <button
                      onClick={() => handleCancel(item._id)}
                      className='px-3 py-1 text-xs text-red-600 bg-red-100 rounded-full hover:bg-red-200'
                    >
                      Cancel
                    </button>

                    <button
                      onClick={() => completeAppointment(item._id)}
                      className='px-3 py-1 text-xs text-green-600 bg-green-100 rounded-full hover:bg-green-200'
                    >
                      Complete
                    </button>
                  </>
                )}

              </div>

            </div>

          ))}

          {appointments.length === 0 && (
            <div className='py-16 text-center text-gray-500'>
              No Appointments Found
            </div>
          )}

        </div>
      </div>

    </div>
  )
}

export default DoctorAppointments