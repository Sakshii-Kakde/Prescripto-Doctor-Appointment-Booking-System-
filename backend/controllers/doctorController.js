import doctorModel from "../models/doctorModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' 
import appointmentModel from "../models/appointmentModel.js"
import { sendAppointmentEmail } from "../utils/emailService.js"
import userModel from "../models/userModel.js"


// CHANGE AVAILABILITY
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body

    const docData = await doctorModel.findById(docId)
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available
    })

    res.json({ success: true, message: 'Availability Changed' })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// DOCTOR LIST
const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(['-password','-email'])
    res.json({ success: true, doctors })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// GET DOCTOR BY ID
const getDoctorById = async (req, res) => {
  try {
    const { docId } = req.body
    const doctor = await doctorModel.findById(docId)

    res.json({ success: true, doctor })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}


// LOGIN
const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body
    const doctor = await doctorModel.findOne({ email })

    if (!doctor) {
      return res.json({ success: false, message: 'Invalid Credentials' })
    }

    const isMatch = await bcrypt.compare(password, doctor.password)

    if (isMatch) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET)
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: 'Invalid Credentials' })
    }

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// GET DOCTOR APPOINTMENTS
const appointmentsDoctor = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({ docId: req.doctorId })
    res.json({ success: true, appointments })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// ✅ COMPLETE APPOINTMENT (FIXED)
const appointmentComplete = async (req, res) => {
  try {
    const { appointmentId } = req.body

    const appointmentData = await appointmentModel.findById(appointmentId)

    if (!appointmentData) {
      return res.json({ success: false, message: "Appointment not found" })
    }

    // ❗ Prevent re-completing
    if (appointmentData.isCompleted) {
      return res.json({ success: false, message: "Already completed" })
    }

    // ❗ Prevent completing cancelled appointment
    if (appointmentData.cancelled) {
      return res.json({ success: false, message: "Cancelled appointment cannot be completed" })
    }

    // ✅ CORRECT FIELD UPDATED
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      isCompleted: true
    })

    // get user and doctor info
    const userData = await userModel.findById(appointmentData.userId)
    const doctorData = await doctorModel.findById(appointmentData.docId)

    // send email
    await sendAppointmentEmail(
      userData.email,
      doctorData.name,
      appointmentData.slotDate,
      appointmentData.slotTime
    )

    res.json({
      success: true,
      message: "Appointment completed and email sent"
    })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// CANCEL APPOINTMENT
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId, reason } = req.body
    const docId = req.doctorId

    const appointmentData = await appointmentModel.findById(appointmentId)

    if (!appointmentData) {
      return res.json({ success: false, message: "Appointment not found" })
    }

    // ❗ Prevent cancelling completed appointment
    if (appointmentData.isCompleted) {
      return res.json({
        success: false,
        message: "Completed appointment cannot be cancelled"
      })
    }

    if (appointmentData.docId.toString() === docId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        cancelled: true,
        cancelReason: reason,
        cancelledBy: "doctor"
      })

      return res.json({
        success: true,
        message: 'Appointment Cancelled'
      })
    } else {
      return res.json({
        success: false,
        message: 'Cancellation Failed'
      })
    }

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// DASHBOARD
const doctorDashboard = async (req, res) => {
  try {
    const docId = req.doctorId
    const appointments = await appointmentModel.find({ docId })

    let earnings = 0

    appointments.map((item) => {
      if (item.isCompleted || item.payment) {
        earnings += item.amount
      }
    })

    let patients = []

    appointments.map((item) => {
      if (!patients.includes(item.userId.toString())) {
        patients.push(item.userId.toString())
      }
    })

    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0, 5)
    }

    res.json({ success: true, dashData })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// PROFILE
const doctorProfile = async (req, res) => {
  try {
    const profileData = await doctorModel.findById(req.doctorId).select('-password')
    res.json({ success: true, profileData })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// UPDATE PROFILE
import { v2 as cloudinary } from "cloudinary"

const updateDoctorProfile = async (req, res) => {
  try {
    const docId = req.doctorId
    const { fees, address, available } = req.body
    const imageFile = req.file

    let updateData = {
      fees,
      address: JSON.parse(address),
      available
    }

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image"
      })
      updateData.image = imageUpload.secure_url
    }

    await doctorModel.findByIdAndUpdate(docId, updateData)

    res.json({
      success: true,
      message: "Profile Updated"
    })

  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: error.message
    })
  }
}


export {
  changeAvailability,
  doctorList,
  getDoctorById,
  loginDoctor,
  appointmentsDoctor,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
}