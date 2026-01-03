import React from "react";

const GetInTouch: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left: Contact Details */}
        <div className="flex flex-col justify-center bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-lime-400 mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-300 mb-8">
            We’d love to hear from you. Reach out using the details below or
            visit us at our office.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-lime-400 uppercase tracking-wide">
                Address
              </h3>
              <p className="text-gray-200 mt-1">
                BMS Institute of Technology and Management <br />Doddaballapura Main Rd, Yelahanka, <br />Avalahalli, Bengaluru, <br />Karnataka 560119
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-lime-400 uppercase tracking-wide">
                Phone
              </h3>
              <p className="text-gray-200 mt-1">
                +919945618018
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-lime-400 uppercase tracking-wide">
                Email
              </h3>
              <p className="text-gray-200 mt-1">
                contact@deloai.com
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-lime-400 uppercase tracking-wide">
                Office Hours
              </h3>
              <p className="text-gray-200 mt-1">
                Monday – Friday<br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right: Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-lime-400/30">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.446884236374!2d77.5693927!3d13.134187599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18a5c54ece35%3A0x49c4c47a68a60b9c!2sBMS%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1766465482381!5m2!1sen!2sin"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
