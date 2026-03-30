
// import express from "express"
// import { changeAvailability, doctorList, getDoctorById, loginDoctor, appointmentsDoctor, appointmentComplete, appointmentCancel, doctorDashboard, doctorProfile, updateDoctorProfile  } from "../controllers/doctorController.js"
// import authDoctor from "../middlewares/authDoctor.js"
// import upload from "../middlewares/multer.js"

// const doctorRouter = express.Router()

// doctorRouter.post('/change-availability', changeAvailability)
// doctorRouter.get('/list', doctorList)
// doctorRouter.post('/get-doctor', getDoctorById)
// doctorRouter.post('/login', loginDoctor)
// doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)
// doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
// doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
// doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
// doctorRouter.get('/profile', authDoctor, doctorProfile)
// doctorRouter.post('/update-profile', authDoctor, upload.single("image"), updateDoctorProfile)


// export default doctorRouter


import express from "express"
import { changeAvailability, doctorList, getDoctorById, loginDoctor, appointmentsDoctor, appointmentComplete, appointmentCancel, doctorDashboard, doctorProfile, updateDoctorProfile } from "../controllers/doctorController.js"
import authDoctor from "../middlewares/authDoctor.js"
import upload from "../middlewares/multer.js"

const doctorRouter = express.Router()

doctorRouter.post('/change-availability', changeAvailability)
doctorRouter.get('/list', doctorList)
doctorRouter.post('/get-doctor', getDoctorById)
doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/profile', authDoctor, doctorProfile)

doctorRouter.post('/update-profile', authDoctor, upload.single("image"), updateDoctorProfile)

export default doctorRouter