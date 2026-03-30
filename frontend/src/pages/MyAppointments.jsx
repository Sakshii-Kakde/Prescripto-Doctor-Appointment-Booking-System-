
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const MyAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);

  const slotDateFormat = (slotDate) => {
    if (!slotDate) return "";

    const parts = slotDate.includes("_")
      ? slotDate.split("_")
      : slotDate.split("/");

    const [day, month, year] = parts;

    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/appointments",
        { headers: { token } }
      );

      if (data.success) {
        setAppointments([...data.appointments].reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Appointment Payment",
      description: "Appointment Payment",
      order_id: order.id,
      receipt: order.receipt,

      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razorpay",
            response,
            { headers: { token } }
          );

          if (data.success) {
            getUserAppointments();
            navigate("/my-appointments");
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/payment-razorpay",
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [location]);

  return (
    <div className="min-h-screen px-6 py-4 md:px-16 lg:px-24 bg-gray-50">

      {/* Page Title */}
      <h1 className="pb-4 text-3xl font-bold text-gray-800 border-b">
        My Appointments
      </h1>

      <div className="mt-8 space-y-6">

        {appointments.map((item) => (
          <div
            key={item._id}
            className="flex flex-col gap-6 p-6 transition duration-300 bg-white border border-gray-200 shadow-sm sm:flex-row rounded-2xl hover:shadow-lg"
          >

            {/* Doctor Image */}
            <img
              className="object-cover border w-28 h-28 rounded-xl bg-blue-50"
              src={item.docData?.image}
              alt=""
            />

            {/* Doctor Info */}
            <div className="flex-1 text-sm text-gray-600">

              <p className="text-lg font-semibold text-gray-800">
                {item.docData?.name}
              </p>

              <p className="font-medium text-blue-600">
                {item.docData?.speciality}
              </p>

              <div className="mt-3 space-y-1">
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-xs text-gray-500">
                  {item.docData?.address.line1}
                </p>
                <p className="text-xs text-gray-500">
                  {item.docData?.address.line2}
                </p>
              </div>

              <p className="mt-3 text-sm text-gray-600">
                <span className="font-semibold text-gray-700">
                  Date & Time:
                </span>{" "}
                {slotDateFormat(item?.slotDate)} | {item?.slotTime}
              </p>
            </div>

            {/* Status / Buttons */}
            <div className="flex flex-col justify-center gap-3">

              {!item.cancelled && item.payment && !item.isCompleted && (
                <span className="px-4 py-2 text-sm font-medium text-center text-green-600 border border-green-200 rounded-lg bg-green-50">
                  Paid
                </span>
              )}

              {!item.cancelled && !item.payment && !item.isCompleted && (
                <button
                  onClick={() => appointmentRazorpay(item._id)}
                  className="px-6 py-2 text-sm font-medium transition border rounded-lg border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Pay Online
                </button>
              )}

              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="px-6 py-2 text-sm font-medium text-red-500 transition border border-red-400 rounded-lg hover:bg-red-500 hover:text-white"
                >
                  Cancel Appointment
                </button>
              )}

              {item.cancelled && !item.isCompleted && (
                <div className="space-y-2">

                  <span className="block px-4 py-2 text-sm font-medium text-center text-red-600 border border-red-200 rounded-lg bg-red-50">
                    Cancelled
                  </span>

                  <p className="text-sm text-gray-500">
                    Cancelled by:
                    <span className="ml-1 font-semibold text-red-500 capitalize">
                      {item.cancelledBy === "admin" && "Admin"}
                      {item.cancelledBy === "doctor" && "Doctor"}
                      {item.cancelledBy === "user" && "User"}
                    </span>
                  </p>

                  {item.cancelReason && (
                    <p className="text-sm text-gray-500">
                      Reason:{" "}
                      <span className="font-medium">
                        {item.cancelReason}
                      </span>
                    </p>
                  )}
                </div>
              )}

              {item.isCompleted && (
                <span className="px-4 py-2 text-sm font-medium text-center text-green-600 border border-green-200 rounded-lg bg-green-50">
                  Completed
                </span>
              )}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default MyAppointment;