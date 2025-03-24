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

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaVisible, setCaptchaVisible] = useState(false); // To track checkbox visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleCaptchaVerify = () => {
    if (captchaInput === captchaValue) {
      setCaptchaVerified(true);
      setCaptchaError(false);
    } else {
      setCaptchaError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      // Proceed with form submission
      console.log("Form submitted:", formData);
      alert("Your message has been sent!");
    } else {
      alert("Please verify the CAPTCHA.");
    }
  };

  const handleCaptchaRefresh = () => {
    setCaptchaValue(generateCaptcha());
    setCaptchaInput("");
    setCaptchaVerified(false);
    setCaptchaError(false);
  };

  return (
    <div className="min-h-screen bg-[#F1EFE1] flex items-center justify-center md:p-12 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="f.jpg" // Replace with the actual image URL
            alt="Fireplace with pizza"
            className="w-full md:h-[550px] rounded-lg "
          />
        </div>

        {/* Right Contact Form Section */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h3
            className="text-4xl lg:text-5xl font-indie-flower text-orange-500 mb-4"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            CONTACT{" "}
            <span
              className="text-[#000000]"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              US
            </span>{" "}
          </h3>
          <p className="text-[#888888] mb-6">
            We specialize in short and long stays for contractors in and around
            Whyalla. Accommodation for large or small groups of working men and
            women, day shifters, night shifters. Our clients rave about us due
            to the one thing that makes us the best Whyalla motel!
          </p>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
            ></textarea>

            {/* Human Verification (Captcha Checkbox) */}
            <div className="mt-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="captchaCheckbox"
                onChange={() => setCaptchaVisible(true)} // Show CAPTCHA when checked
              />
              <label htmlFor="captchaCheckbox" className="text-[#888888]">
                Verify you are a human
              </label>
            </div>

            {/* CAPTCHA */}
            {captchaVisible && (
              <div className="mt-6 mb-4">
                <label className="block text-sm text-[#888888]">Captcha Code</label>
                <div
                  className="relative flex items-center justify-center w-full max-w-[200px] h-12 border border-orange-400 rounded-md"
                  style={{
                    background: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9InByZXNlcnZlIj48cGF0aCBkPSJNMTgsMFYyMEgyOHpNMjQsMjBMMjQsMjB6Ij48cGF0aCBkPSJNMTgsMFYyMEgyOHpNMjQsMjBMMjQsMjB6IiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+') repeat`,
                    filter: 'blur(1px)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-full text-center flex items-center justify-center"
                    style={distortedCaptchaStyle()}
                  >
                    {captchaValue}
                  </div>
                </div>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={handleCaptchaChange}
                  placeholder="Enter CAPTCHA"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888]"
                />
                {captchaError && (
                  <div className="text-red-500 text-sm mt-2">CAPTCHA does not match!</div>
                )}
                <button
                  type="button"
                  onClick={handleCaptchaVerify}
                  className="w-full mt-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Verify CAPTCHA
                </button>
                <button
                  type="button"
                  onClick={handleCaptchaRefresh}
                  className="mt-2 text-sm text-blue-500"
                >
                  Refresh CAPTCHA
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              disabled={!captchaVerified}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
