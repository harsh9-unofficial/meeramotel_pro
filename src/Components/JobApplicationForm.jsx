import React, { useState } from "react";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    country: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white md:p-10 rounded-lg w-full max-w-4xl"
      >
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#B2B2B2]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#B2B2B2]"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Apply For Position"
            value={formData.position}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#B2B2B2]"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#B2B2B2]"
            required
          />
        </div>

        {/* Resume Upload */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
          <label className="text-[#888888] text-sm">Your Resume</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 border rounded-md w-full md:w-[180px] focus:outline-none text-[#B2B2B2]"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="mt-4">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-md w-full h-28 focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#B2B2B2]"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
