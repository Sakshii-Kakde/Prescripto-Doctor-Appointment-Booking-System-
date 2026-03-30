import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center py-16 bg-gray-50'>

        {/* Heading */}
        <h1 className='text-3xl font-semibold text-gray-800'>
            Top Doctors to Book
        </h1>

        <p className='mt-3 text-sm text-center text-gray-600 sm:w-1/2'>
            Browse through our trusted doctors and book your appointment easily.
        </p>

        {/* Doctors Grid */}
        <div className='grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

            {doctors.slice(0,10).map((item, index) => (

                <div
                    key={index}
                    onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
                    className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                >

                    {/* Doctor Image */}
                    <div className='bg-blue-50'>
                        <img
                            className='object-cover w-full h-48 hover:bg-primary'
                            src={item.image}
                            alt={item.name}
                        />
                    </div>

                    {/* Doctor Info */}
                    <div className='p-4'>

                        <div className='flex items-center gap-2 text-sm text-green-500'>
                            <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                            <p>Available</p>
                        </div>

                        <p className='mt-2 text-lg font-semibold text-gray-800'>
                            {item.name}
                        </p>

                        <p className='text-sm text-gray-500'>
                            {item.speciality}
                        </p>

                    </div>

                </div>

            ))}

        </div>

        {/* Button */}
        <button
            onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}
            className='px-6 py-2 mt-12 text-sm text-center text-black transition-all duration-300 border border-gray-600 rounded-md shadow-lg hover:text-white hover:bg-primary'
        >
            View More Doctors
        </button>

    </div>
  )
}

export default TopDoctors