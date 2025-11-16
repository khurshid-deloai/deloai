import React, { useState } from "react";
import Right from "../assets/bg-left.svg";
import Left from "../assets/bg-right.svg";
import Hero from "../assets/contact.svg"

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* --- Contact Section --- */}
      <section className="relative w-full py-24 overflow-hidden">
        {/* Desktop (md+): show on left/right */}
        <img
          src={Left}
          alt=""
          className="absolute left-0 top-0 h-full pointer-events-none select-none hidden md:block"
        />
        <img
          src={Right}
          alt=""
          className="absolute right-0 top-0 h-full pointer-events-none select-none hidden md:block"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Contact <span>Our Team</span>
            <br />
            We're here to help!
          </h2>

          <p className="text-gray-600 text-lg mt-6">
            Have questions about our platform or need more information?
            Reach out—we’d love to hear from you.
          </p>

          {/* Open Modal Button */}
          <button
            onClick={() => setOpen(true)}
            className="mt-10 bg-lime-400 hover:bg-lime-300 text-white font-medium px-8 py-3 rounded-lg shadow-md transition"
          >
            Contact Us
          </button>

          {/* Mobile-only space + bottom images */}
          <div className="md:hidden relative mt-20 h-40">
            <img
              src={Left}
              alt=""
              className="absolute bottom-0 left-0 w-[50%] opacity-80"
            />
            <img
              src={Right}
              alt=""
              className="absolute bottom-0 right-0 w-[50%] opacity-80"
            />
          </div>
        </div>
      </section>

      {/* --- Modal --- */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            // Close when clicking outside modal
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-fadeIn">
            
            {/* Left Illustration */}
            <div className="bg-lime-50 flex items-center justify-center p-10 relative">
              <img
                src={Hero}
                alt="Illustration"
                className="max-w-xs opacity-90"
              />
            </div>

            {/* Right Form */}
            <div className="p-10 flex flex-col relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ✕
              </button>

              <h2 className="text-3xl font-semibold mt-6">Connect with Us!</h2>
              <p className="text-gray-500 mt-2">
                Fill in your information, and we will contact you within a couple of hours.
              </p>

              <form className="mt-6 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-300"
                />
                <input
                  type="email"
                  placeholder="E-mail *"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-300"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-300"
                />
                <textarea
                  placeholder="How did you hear about us? *"
                  className="border rounded-xl px-4 py-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-lime-300"
                />

                <button
                  type="submit"
                  className="bg-lime-400 hover:bg-lime-500 transition text-white font-medium py-3 rounded-xl mt-2"
                >
                  Submit
                </button>

                <p className="text-xs text-gray-400 text-center mt-2">
                  Your information is secure with us. Read our
                  <a href="#" className="underline text-lime-600 ml-1">Privacy policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
