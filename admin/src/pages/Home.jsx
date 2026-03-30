import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Home = () => {

  const navigate = useNavigate()
  const { aToken } = useContext(AdminContext)
  const { dToken } = useContext(DoctorContext)

  const today = new Date().toDateString()

  return (
    <div className="p-8">

      {/* Welcome Banner */}
      <div className="p-6 mb-8 text-white shadow-md bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl">

        {aToken && (
          <>
            <h1 className="text-3xl font-bold">
              Welcome to Admin Panel 👨‍💼
            </h1>
            <p className="mt-2 text-indigo-100">
              Manage doctors, appointments and monitor the hospital system.
            </p>
          </>
        )}

        {dToken && (
          <>
            <h1 className="text-3xl font-bold">
              Welcome Doctor 👩‍⚕️
            </h1>
            <p className="mt-2 text-indigo-100">
              Manage your appointments and keep your profile updated.
            </p>
          </>
        )}

        <p className="mt-3 text-sm text-indigo-200">{today}</p>

      </div>

      {/* ADMIN DASHBOARD */}
      {aToken && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div
            onClick={() => navigate("/admin-dashboard")}
            className="p-8 text-center text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white"
          >
            <h2 className="mb-3 font-semibold text-gray-800">
              Dashboard
            </h2>
            <p>
              System overview
            </p>
          </div>

          <div
            onClick={() => navigate("/all-appointments")}
            className="p-8 text-center text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white"
          >
            <h2 className="mb-3 font-semibold text-gray-800">
              Appointments
            </h2>
            <p>
              Manage appointments
            </p>
          </div>

          <div
            onClick={() => navigate("/add-doctor")}
            className="p-8 text-center text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white"
          >
            <h2 className="mb-3 font-semibold text-gray-800">
              Add Doctor
            </h2>
            <p>
              Register a doctor
            </p>
          </div>

          <div
            onClick={() => navigate("/doctor-list")}
            className="p-8 text-center text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white"
          >
            <h2 className="mb-3 font-semibold text-gray-800">
              Doctors List
            </h2>
            <p>
              View all doctors
            </p>
          </div>

        </div>
      )}

      {/* DOCTOR DASHBOARD */}
      {dToken && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div
            onClick={() => navigate("/doctor-dashboard")}
            className="p-8 text-center text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white">
            <h2 className="mb-3 font-semibold text-gray-800">
              Dashboard
            </h2>
            <p>
              View your activity
            </p>
          </div>

          <div
            onClick={() => navigate("/doctor-appointments")}
            className="p-8 text-center text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white"
          >
            <h2 className="mb-3 font-semibold text-gray-800">
              Appointments
            </h2>
            <p>
              View patient bookings
            </p>
          </div>

          <div
            onClick={() => navigate("/doctor-profile")}
            className="p-8 text-center text-gray-700 transition-all duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-2 hover:bg-primary hover:text-white"
          >
            <h2 className="mb-3 font-semibold text-gray-800">
              Profile
            </h2>
            <p>
              Manage your profile
            </p>
          </div>

        </div>
      )}

    </div>
  );
};

export default Home;