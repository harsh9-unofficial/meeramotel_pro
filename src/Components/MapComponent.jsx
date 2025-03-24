import React from "react";
import { Mail, Facebook } from "lucide-react";

const MapComponent = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
        {/* Left Side - Map */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.9661761360157!2d137.57423667535534!3d-33.03102157355858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6abb50c52fce72ef%3A0x7dfce28c9ed6ec0c!2sMirambeena%20Motel!5e0!3m2!1sen!2sin!4v1741519221365!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-80 md:h-96 rounded-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side - Social Media & Contact Details */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/share/18YoS1CdYP/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-orange-500 text-white rounded-full shadow-md hover:scale-110 transition cursor-pointer">
                <Facebook size={20} />
              </div>
            </a>

            {/* Mail Icon */}
            <a
              href="mailto:Bookings@mirambeenamotel.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-orange-500 text-white rounded-full shadow-md hover:scale-110 transition cursor-pointer">
                <Mail size={20} />
              </div>
            </a>
          </div>

          {/* Contact Details */}
          <div className="text-gray-700 text-center space-y-2">
            <p>
              <strong>Address:</strong> Mirambeena Motel, 1 Darmody Pl, Whyalla
              SA 5600, Australia
            </p>
            <p>
              <strong>Phone:</strong> +61 422040662
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
