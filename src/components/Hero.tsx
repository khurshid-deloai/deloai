import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import HeroImage from '../assets/deloai_hero_img.svg';

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [displayedText, setDisplayedText] = useState('Latest Product');
  const typingRef = useRef<number | null>(null);
  const animationIndex = useRef(0);
  const fullText = 'CareerPrep';

  const startTyping = useCallback(() => {
    // Reset any running interval
    if (typingRef.current !== null) {
      window.clearInterval(typingRef.current);
      typingRef.current = null;
    }

    animationIndex.current = 0;
    setDisplayedText('');

    typingRef.current = window.setInterval(() => {
      animationIndex.current += 1;
      setDisplayedText(fullText.slice(0, animationIndex.current));

      if (animationIndex.current >= fullText.length) {
        if (typingRef.current !== null) {
          window.clearInterval(typingRef.current);
          typingRef.current = null;
        }
      }
    }, 60);
  }, []);

  const stopTyping = useCallback(() => {
    if (typingRef.current !== null) {
      window.clearInterval(typingRef.current);
      typingRef.current = null;
    }
    animationIndex.current = 0;
    setDisplayedText('Latest Product');
  }, []);

  useEffect(() => {
    if (isHovering) startTyping();
    else stopTyping();

    return () => {
      if (typingRef.current !== null) {
        window.clearInterval(typingRef.current);
      }
    };
  }, [isHovering, startTyping, stopTyping]);

  // accessibility: allow keyboard users to trigger the hover behavior via focus
  const handleFocus = () => setIsHovering(true);
  const handleBlur = () => setIsHovering(false);

  return (
    <section className="min-h-screen bg-white flex items-center" aria-label="Hero section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Your Product, Delivered.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              A complete product team for strategy, design, development, branding, and go-to-market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => {
                  // Replace this with real navigation logic in your app
                  console.log('Navigate to Services');
                }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                aria-label="View our services"
              >
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Use an anchor for external link (better semantics for new tab + rel) */}
      <a
href="https://careerprep.in"
target="_blank"
rel="noopener noreferrer"
className="inline-flex w-[220px] items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg shadow-lg border-2 border-gray-900 bg-white text-gray-900 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
onMouseEnter={() => setIsHovering(true)}
onMouseLeave={() => setIsHovering(false)}
onFocus={handleFocus}
onBlur={handleBlur}
aria-label="Open CareerPrep in a new tab"
>
<span className="min-w-[140px] text-left" aria-live="polite">
{displayedText}
</span>
<ArrowRight className="w-5 h-5 flex-shrink-0" />
</a>
            </div>
          </div>

          <div className="animate-fade-in-delay flex justify-center lg:justify-end pt-12 lg:pt-0">
            <img
              src={HeroImage}
              alt="Illustration showing product workflow and collaboration"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl object-contain"
              width={560}
              height={420}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
