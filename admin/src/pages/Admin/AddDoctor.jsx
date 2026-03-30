import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";


const AddDoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [loading, setLoading] = useState(false);

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Please upload doctor image");
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);

        setDocImg(null);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 Year");
        setFees("");
        setAbout("");
        setSpeciality("General Physician");
        setDegree("");
        setAddress1("");
        setAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-gray-100 to-gray-200">
      <form
        onSubmit={onSubmitHandler}
        className="max-w-6xl p-12 mx-auto bg-white shadow-2xl rounded-3xl"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800">
            Add New Doctor
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Register a doctor into the Prescripto system
          </p>
        </div>

        {/* Upload Section */}
        <div className="flex items-center gap-8 p-8 mb-12 transition border border-dashed rounded-2xl bg-gray-50 hover:shadow-md">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              className="object-cover w-32 h-32 transition-all duration-300 border-4 border-white rounded-full shadow-lg hover:scale-105"
              src={
                docImg
                  ? URL.createObjectURL(docImg)
                  : assets.upload_area
              }
              alt="doctor"
            />
          </label>
          <input
            type="file"
            id="doc-img"
            hidden
            onChange={(e) => setDocImg(e.target.files[0])}
          />
          <div>
            <p className="text-lg font-semibold text-gray-700">
              Upload Profile Image
            </p>
            <p className="text-sm text-gray-400">
              JPG, PNG supported • Recommended 500x500px
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div className="space-y-7">
            <InputField label="Doctor Name" value={name} onChange={setName} />
            <InputField label="Email Address" type="email" value={email} onChange={setEmail} />
            <InputField label="Password" type="password" value={password} onChange={setPassword} />

            <SelectField
              label="Experience"
              value={experience}
              onChange={setExperience}
              options={[
                "1 Year","2 Years","3 Years","4 Years","5 Years",
                "6 Years","7 Years","8 Years","9 Years","10 Years"
              ]}
            />

            <InputField
              label="Consultation Fees"
              type="number"
              value={fees}
              onChange={setFees}
            />
          </div>

          {/* Right */}
          <div className="space-y-7">
            <SelectField
              label="Speciality"
              value={speciality}
              onChange={setSpeciality}
              options={[
                "General Physician",
                "Gynecologist",
                "Dermatologist",
                "Pediatrician",
                "Neurologist",
                "Gastroenterologist"
              ]}
            />

            <InputField
              label="Education / Degree"
              value={degree}
              onChange={setDegree}
            />

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="Address Line 1"
                required
                className="w-full px-4 py-3 mb-3 border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Address Line 2"
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-12">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            About Doctor
          </label>
          <textarea
            rows="5"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Write short description..."
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Submit */}
        <div className="text-right mt-14">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-sm font-medium text-black transition-all duration-300 border border-black rounded-lg hover:bg-primary hover:text-white"
          >
            {loading ? "Adding Doctor..." : "Add Doctor"}
          </button>
        </div>
      </form>
    </div>
  );
};


/* Input Component */
const InputField = ({ label, value, onChange, type = "text" }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="w-full px-4 py-3 transition border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
    />
  </div>
);


/* Select Component */
const SelectField = ({ label, value, onChange, options }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-600">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 transition border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
    >
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default AddDoctor;