import Logo from "../assets/logo.png";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";


export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* PRODUCT */}
        <div className="order-1">
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-black">CareerPrep</a></li>
            <li><a href="#" className="hover:text-black">MathQuest</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="order-2">
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-black">Why us?</a></li>
            <li><a href="#" className="hover:text-black">About us</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="order-3">
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="mailto:contact@monotree.com" className="hover:text-black">
                contact@deloai.com
              </a>
            </li>
            <li><p>+45 3111 0003</p></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="order-4">
          <h4 className="font-semibold mb-4">Follow Us</h4>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black" aria-label="Youtube">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* LEFT SECTION (Moves to bottom on phone) */}
        <div className="order-5 md:order-none border-t pt-6 md:border-0 space-y-6">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Monotree Logo" className="h-8 w-auto" />
          </div>
          <p className="text-sm text-gray-500">2025 © Deloai Pvt. Ltd.</p>
        </div>

      </div>
    </footer>
  );
}
