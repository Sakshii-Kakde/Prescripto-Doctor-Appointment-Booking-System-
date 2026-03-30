import React, { useState, useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {

  const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(null)

  const updateProfile = async () => {
    try {

      const formData = new FormData()

      formData.append("fees", profileData.fees)
      formData.append("available", profileData.available)
      formData.append("address", JSON.stringify(profileData.address))

      if (image) {
        formData.append("image", image)
      }

      const { data } = await axios.post(
        backendUrl + '/api/doctor/update-profile',
        formData,
        {
          headers: {
            dtoken: dToken,
            "Content-Type": "multipart/form-data"
          }
        }
      )

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  return profileData && (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100">

      <div className='flex flex-col w-full max-w-3xl gap-6 mx-auto'>

        <div className="flex justify-center">
          <div className="flex flex-col items-center p-4 transition-all duration-300 bg-white border border-black shadow-sm rounded-xl hover:bg-primary hover:scale-105">

            {isEdit ? (
              <label htmlFor="image">
                <img
                  className="object-cover cursor-pointer w-44 h-44 rounded-xl"
                  src={image ? URL.createObjectURL(image) : profileData.image}
                  alt=""
                />
                <input
                  type="file"
                  id="image"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            ) : (
              <img
                className="object-cover w-44 h-44 rounded-xl"
                src={profileData.image}
                alt=""
              />
            )}

          </div>
        </div>

        {/* Main Card */}
        <div className='w-full p-10 border border-gray-200 shadow-xl bg-white/80 backdrop-blur-md rounded-2xl'>

          {/* Doctor Info */}
          <p className='text-3xl font-bold tracking-wide text-gray-800'>
            {profileData.name}
          </p>

          <div className='flex items-center gap-3 mt-2 text-gray-600'>
            <p className='text-sm'>
              {profileData.degree} • {profileData.speciality}
            </p>

            <span className='px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary'>
              {profileData.experience}
            </span>
          </div>

          {/* About Section */}
          <div className='mt-6'>
            <p className='text-sm font-semibold text-gray-700'>About</p>
            <p className='mt-2 text-sm leading-relaxed text-gray-600'>
              {profileData.about}
            </p>
          </div>

          {/* Fees */}
          <div className='mt-6'>
            <p className='font-semibold text-gray-700'>Appointment Fees</p>

            {isEdit ? (
              <input
                type="number"
                value={profileData.fees}
                onChange={(e) =>
                  setProfileData(prev => ({ ...prev, fees: e.target.value }))
                }
                className='px-3 py-2 mt-2 border rounded-md outline-none focus:ring-2 focus:ring-primary'
              />
            ) : (
              <p className='mt-1 text-lg font-semibold text-gray-800'>
                {currency}{profileData.fees}
              </p>
            )}
          </div>

          {/* Address */}
          <div className='mt-6'>
            <p className='font-semibold text-gray-700'>Address</p>

            {isEdit ? (
              <div className='flex flex-col gap-2 mt-2'>
                <input
                  type="text"
                  value={profileData.address.line1}
                  onChange={(e) =>
                    setProfileData(prev => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value }
                    }))
                  }
                  className='px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary'
                />

                <input
                  type="text"
                  value={profileData.address.line2}
                  onChange={(e) =>
                    setProfileData(prev => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value }
                    }))
                  }
                  className='px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary'
                />
              </div>
            ) : (
              <p className='mt-2 text-gray-700'>
                {profileData.address.line1}
                <br />
                {profileData.address.line2}
              </p>
            )}
          </div>

          {/* Availability */}
          <div className='flex items-center gap-3 mt-6'>
            <input
              type="checkbox"
              checked={profileData.available}
              onChange={() =>
                isEdit &&
                setProfileData(prev => ({
                  ...prev,
                  available: !prev.available
                }))
              }
              className='w-4 h-4 accent-primary'
            />

            <label className='font-medium text-gray-700'>
              Available for Appointments
            </label>

            <span className={`ml-3 px-3 py-1 text-xs rounded-full ${
              profileData.available
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
            }`}>
              {profileData.available ? "Active" : "Not Active"}
            </span>
          </div>

          {/* Button */}
          <div className='mt-8'>
            {isEdit ? (
              <button
                onClick={updateProfile}
                className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-primary hover:shadow-lg hover:scale-105"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="px-6 py-2 text-sm font-medium text-black transition-all duration-300 border border-black rounded-lg hover:bg-primary hover:text-white"
              >
                Edit Profile
              </button>
            )}
          </div>

        </div>
      </div>

    </div>
  )
}

export default DoctorProfile