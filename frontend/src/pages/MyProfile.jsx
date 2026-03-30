import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const MyProfile = () => {

  const { userData, setUserData, backendUrl, token, loadUserProfileData } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  // UPDATE PROFILE
  const updateUserProfileData = async () => {

    try {

      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("phone", userData.phone);
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      formData.append("address", JSON.stringify(userData.address));

      if (image) {
        formData.append("image", image);
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {

        toast.success(data.message);

        await loadUserProfileData(); // reload updated profile

        setIsEdit(false);
        setImage(null);

      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (

    userData && (

      <div className="max-w-3xl p-8 mx-auto bg-white border shadow-lg rounded-xl">

        {/* PROFILE IMAGE */}
        <div className="flex flex-col items-center gap-4">

          {isEdit ? (
            <label htmlFor="image">

              <div className="relative cursor-pointer">

                <img
                  className="object-contain w-32 h-32 border rounded-full"
                  src={image ? URL.createObjectURL(image) : userData.image}
                  alt=""
                />

                <img
                  className="absolute w-8 bottom-1 right-1"
                  src={assets.upload_icon}
                  alt=""
                />

              </div>

              <input
                type="file"
                id="image"
                hidden
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />

            </label>
          ) : (
            <img
              className="object-contain w-32 h-32 border rounded-full"
              src={userData.image}
              alt=""
            />
          )}

          {/* NAME */}
          {isEdit ? (
            <input
              className="px-2 py-1 text-2xl font-semibold text-center border rounded"
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h2 className="text-2xl font-semibold text-gray-800">
              {userData.name}
            </h2>
          )}
        </div>


        {/* CONTACT INFORMATION */}
        <div className="mt-8">

          <h3 className="pb-2 text-lg font-semibold text-gray-700 border-b">
            Contact Information
          </h3>

          <div className="grid grid-cols-[1fr_2fr] gap-y-4 mt-4 items-center">

            <p className="font-medium">Email :</p>

            {isEdit ? (
              <input
                className="px-2 py-1 border rounded"
                type="text"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-700">{userData.email}</p>
            )}

            <p className="font-medium">Phone :</p>

            {isEdit ? (
              <input
                className="px-2 py-1 border rounded"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-600">{userData.phone}</p>
            )}

            <p className="font-medium">Address :</p>

            {isEdit ? (
              <div>
                <input
                  className="w-full px-2 py-1 mb-2 border rounded"
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />

                <input
                  className="w-full px-2 py-1 border rounded"
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </div>
            ) : (
              <p className="text-gray-600">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}

          </div>
        </div>


        {/* BASIC INFORMATION */}
        <div className="mt-8">

          <h3 className="pb-2 text-lg font-semibold text-gray-700 border-b">
            Basic Information
          </h3>

          <div className="grid grid-cols-[1fr_2fr] gap-y-4 mt-4 items-center">

            <p className="font-medium">Gender :</p>

            {isEdit ? (
              <select
                className="px-2 py-1 border rounded"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}

            <p className="font-medium">Date of Birth :</p>

            {isEdit ? (
              <input
                className="px-2 py-1 border rounded"
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p>{userData.dob}</p>
            )}

          </div>
        </div>


        {/* BUTTON */}
        <div className="mt-10 text-center">

          {isEdit ? (
            <button
              onClick={updateUserProfileData}
              className="px-8 py-2 transition border border-gray-600 rounded-md hover:bg-primary hover:text-white"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-8 py-2 transition border border-gray-600 rounded-md hover:bg-primary hover:text-white"
            >
              Edit Profile
            </button>
          )}

        </div>

      </div>

    )
  );
};

export default MyProfile;