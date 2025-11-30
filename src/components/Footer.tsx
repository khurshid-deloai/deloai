import Logo from "../assets/logo.png";
import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        {/* LEFT SIDE: Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={Logo} alt="Company Logo" className="h-10 w-auto" />

          <p className="text-xs text-gray-400 text-center md:text-left">
            © 2025 Deloai Pvt. Ltd.
          </p>
        </div>

        {/* RIGHT SIDE: Social on top + Contact icons below */}
        <div className="flex flex-col items-center md:items-end space-y-4">

          {/* Social Icons */}
          <div className="flex space-x-5">
            <a href="https://www.linkedin.com/company/deloai-private-limited/" className="text-gray-600 hover:text-blue-400" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>

            {/* <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a> */}

            <a href="https://www.instagram.com/delo_ai/" className="text-gray-600 hover:text-rose-500" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>

            <a href="https://www.youtube.com/@delo_ai" className="text-gray-600 hover:text-red-500" aria-label="Youtube">
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          {/* Contact */}
          <div className="text-gray-600 text-sm space-y-2 text-center md:text-right">

            <div className="flex items-center space-x-2 md:justify-end">
              <Mail className="h-4 w-4 text-lime-600" />
              <a href="mailto:contact@deloai.com" className="hover:text-lime-600">
                lokesh@deloai.com
              </a>
            </div>

            <div className="flex items-center space-x-2 md:justify-end">
              <Phone className="h-4 w-4 text-lime-600" />
              <p>+919945618018</p>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
