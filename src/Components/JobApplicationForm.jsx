import React, { useState } from "react";

// Function to generate a random alphanumeric CAPTCHA string
function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

// Function to create a complex distortion effect for the CAPTCHA text (simulated with CSS)
function distortedCaptchaStyle() {
  const styles = {
    transform: `rotate(${Math.random() * 20 - 10}deg) skew(${Math.random() * 20 - 10}deg)`,
    color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
    fontSize: `${Math.random() * 10 + 18}px`,
    letterSpacing: `${Math.random() * 2 - 1}px`,
  };
  return styles;
}

// Function to create a noisy background for the CAPTCHA
function noisyBackground() {
  return {
    background: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9InByZXNlcnZlIj48cGF0aCBkPSJNMTgsMFYyMEgyOHpNMjQsMjBMMjQsMjB6Ij48cGF0aCBkPSJNMTgsMFYyMEgyOHpNMjQsMjBMMjQsMjB6IiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+') repeat`,
    filter: 'blur(1px)',
  };
}

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    country: "",
    resume: null,
    message: "",
    captcha: "",
  });

  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaVisible, setCaptchaVisible] = useState(false); // To toggle CAPTCHA visibility based on checkbox

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleCaptchaChange = (e) => {
    setFormData({ ...formData, captcha: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the CAPTCHA matches
    if (formData.captcha === captchaValue) {
      console.log("Form submitted:", formData);
      alert("Application submitted successfully!");
    } else {
      setCaptchaError(true);
    }
  };

  const handleCaptchaRefresh = () => {
    setCaptchaValue(generateCaptcha());
    setCaptchaError(false); // Reset the error when refreshing the CAPTCHA
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f7fa] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-full max-w-4xl shadow-lg"
      >
        {/* Form Header */}
        <h2 className="text-2xl font-semibold text-center mb-6">Job Application Form</h2>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Apply For Position"
            value={formData.position}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* Resume Upload */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
          <label className="text-[#888888] text-sm">Your Resume</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 border rounded-md w-full md:w-[180px] focus:outline-none"
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
            className="p-3 border rounded-md w-full h-28 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* CAPTCHA Visibility Checkbox */}
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            onChange={() => setCaptchaVisible(!captchaVisible)} // Toggle CAPTCHA visibility
            className="mr-2"
          />
          <label className="text-sm text-[#888888]">Verify you are a human</label>
        </div>

        {/* CAPTCHA Input - Only visible if the checkbox is ticked */}
        {captchaVisible && (
          <div className="mt-6 mb-4 flex items-center justify-between">
            <label className="block text-sm text-[#888888]">Captcha Code</label>
            <div
              className="relative flex items-center justify-center w-full max-w-[200px] h-12 border border-orange-400 rounded-md"
              style={noisyBackground()}
            >
              <div
                className="absolute top-0 left-0 w-full h-full text-center flex items-center justify-center"
                style={distortedCaptchaStyle()}
              >
                {captchaValue}
              </div>
              <button
                type="button"
                onClick={handleCaptchaRefresh}
                className="absolute top-0 right-0 p-2 bg-orange-400 text-white text-xs rounded-full"
              >
                ↻
              </button>
            </div>
          </div>
        )}

        {captchaVisible && (
          <input
            type="text"
            name="captcha"
            placeholder="Enter the CAPTCHA"
            value={formData.captcha}
            onChange={handleCaptchaChange}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        )}
        {captchaError && (
          <div className="text-red-500 text-sm mt-2">CAPTCHA does not match!</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
