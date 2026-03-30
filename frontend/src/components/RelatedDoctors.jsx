import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId, speciality}) => {

    const { doctors } = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter(
                (doc) => doc.speciality === speciality && doc._id !== docId
            )
            setRelDoc(doctorsData)
        }
    }, [doctors, docId, speciality])

  return (
    <div className='px-4 my-20 md:px-10'>

        {/* Section Heading */}
        <div className='text-center'>
            <h1 className='font-bold text-gray-800 md:text-3xl'>
                Related Doctors
            </h1>
            <p className='mt-3 text-gray-500'>
                Find other experienced doctors from the same speciality.
            </p>
        </div>

        {/* Doctors Grid */}
        <div className='grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>

            {relDoc.slice(0,5).map((item, index)=>(
                <div
                key={index}
                onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
                className='overflow-hidden transition-all duration-500 bg-white border border-gray-200 shadow-sm cursor-pointer group rounded-xl hover:-translate-y-2 hover:shadow-xl'
                >

                    {/* Doctor Image */}
                    <div className='overflow-hidden bg-blue-50'>
                        <img
                        className='object-cover w-full transition-transform duration-500 group-hover:scale-110 hover:bg-primary'
                        src={item.image}
                        alt={item.name}
                        />
                    </div>

                    {/* Doctor Info */}
                    <div className='p-4'>

                        <div className='flex items-center gap-2 text-sm text-green-600'>
                            <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                            <span>Available</span>
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

        {/* View All Button */}
        <div className='flex justify-center'>
            <button
            onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}
            className='px-6 py-2 mt-12 text-sm text-center text-black transition-all duration-300 border border-gray-600 rounded-md shadow-lg hover:text-white hover:bg-primary'
            >
                View All Doctors
            </button>
        </div>

    </div>
  )
}

export default RelatedDoctors