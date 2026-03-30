import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center py-24' id='speciality'>

        {/* Heading */}
        <h1 className='text-3xl font-semibold text-gray-800'>
            Find by Speciality
        </h1>

        <p className='mt-3 text-sm text-center text-gray-600 sm:w-1/2'>
            Browse through our trusted doctors by speciality and book your
            appointment easily with just a few clicks.
        </p>

        {/* Speciality Cards */}
        <div className='flex w-full gap-4 px-6 pt-10 overflow-x-auto sm:justify-center scrollbar-hide'>

            {specialityData.map((item, index) => (

                <Link
                    key={index}
                    to={`/doctors/${item.speciality}`}
                    onClick={() => scrollTo(0,0)}
                    className='flex flex-col items-center p-6 transition-all duration-300 bg-white shadow-md cursor-pointer rounded-xl hover:shadow-xl hover:-translate-y-2 min-w-[120px]'
                >

                    <img
                        className='w-16 mb-5 sm:w-20'
                        src={item.image}
                        alt={item.speciality}
                    />

                    <p className='text-sm font-medium text-gray-700'>
                        {item.speciality}
                    </p>

                </Link>

            ))}

        </div>

    </div>
  )
}

export default SpecialityMenu