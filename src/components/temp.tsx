import { Shield, TrendingUp, Activity } from 'lucide-react';
import HeroImage from '../assets/hero4.svg';

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center" aria-label="Hero section">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Put{' '}
                <span className="relative inline-block">
                  performance
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 -z-10"></span>
                </span>{' '}
                first
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Fast, scalable and intuitive — transform IT operations into automation,
                insight and innovation, and streamline your workflows with your own platform.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  Enterprise-ready architecture
                </div>
              </div>

              <p className="text-sm text-gray-500">
                Verified for uptime, security and resilience
              </p>
            </div>

            {/* Metrics */}
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-gray-900">74%</div>
                <div className="text-base text-gray-600 font-medium">faster workflow execution</div>
                <div className="text-sm text-gray-500">Average operational acceleration</div>
              </div>

              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-gray-900">90%</div>
                <div className="text-base text-gray-600 font-medium">clearer decision-making</div>
                <div className="text-sm text-gray-500">Insight-driven outcomes within 30 days</div>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
         <div className="animate-fade-in-delay flex justify-center lg:justify-end pt-12 lg:pt-0">
            <img
              src={HeroImage}
              alt="Illustration showing product workflow and collaboration"
              className="w-full max-w-md lg:max-w-lg object-cover"
            
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
