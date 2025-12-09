import { Shield } from 'lucide-react';
import HeroImage from '../assets/hero4.svg';

function HeroSection() {
  return (
    <section
      className="min-h-screen lg:h-screen flex items-center"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium
 text-gray-900 leading-tight">
                Speed{' '}
               
               That
                 {' '}
           <span className="relative inline-block">
 Scales
  <svg
  className="absolute left-0 bottom-[-6px] -z-10"
    width="100%"
    height="16"
    viewBox="0 0 300 45"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 25 C85 45, 215 5, 290 25"
      stroke="#000"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M10 50 C90 52, 210 8, 290 33"
      stroke="#000"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
</span>


              </h1>

              <p className="text-base sm:text-lg lg:text-lg text-gray-900 tracking-wide leading-relaxed mx-auto lg:mx-0 max-w-xl">
                Fast, scalable and intuitive — transform IT operations into automation,
                insight and innovation, and streamline your workflows with your own platform.
              </p>

              <div className="flex justify-center lg:justify-start items-center gap-3 pt-1">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium shadow-sm">
                  <Shield className="w-4 h-4" />
                  Enterprise-ready architecture
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-500">
                Verified for uptime, security and resilience
              </p>
            </div>

            {/* Metrics */}
            <div className="pt-4">
              <div className="grid sm:grid-cols-2 gap-6 relative">
                
                {/* vertical separator */}
                <div className="absolute left-1/2 top-1/3 bottom-1/3 w-px bg-gray-300 hidden sm:block"></div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">74%</div>
                  <div className="text-sm sm:text-base text-gray-700 font-medium">
                    faster workflow execution
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Average operational acceleration
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">90%</div>
                  <div className="text-sm sm:text-base text-gray-700 font-medium">
                    clearer decision-making
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Insight-driven outcomes within 30 days
                  </div>
                </div>
              </div>

              {/* horizontal separator line */}
              <div className="w-full h-px bg-gray-300 mt-6"></div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-fade-in-delay flex justify-center lg:justify-end pt-8 lg:pt-0">
            <img
              src={HeroImage}
              alt="Illustration showing product workflow and collaboration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
