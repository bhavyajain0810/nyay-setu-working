import React, { useState, useEffect } from 'react';

/**
 * ScrollButtons Component - Expands a floating action button pair in the bottom-right corner.
 * Implements window scroll threshold triggers, accessibility helpers, and animated smooth transitions.
 */
export const ScrollButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Monitors window scrolling metrics to toggle the Scroll-to-Top node visibility state
  useEffect(() => {
    const handleScrollMetricsToggle = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScrollMetricsToggle);
    return () => {
      window.removeEventListener('scroll', handleScrollMetricsToggle);
    };
  }, []);

  // Executes animated clean smooth transitions to the absolute top of the page viewport layout
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Executes animated clean smooth transitions to the absolute bottom footer layer of the document
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-auto">
      {/* Scroll to Top Button Element - Appears smoothly after scrolling down past 300px threshold */}
      <button
        onClick={handleScrollToTop}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
        }`}
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      {/* Scroll to Bottom Button Element - Permanently pined to assist accessibility and jumping to page footers */}
      <button
        onClick={handleScrollToBottom}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-all duration-300 hover:bg-gray-900 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400"
        title="Scroll to Bottom"
        aria-label="Scroll to Bottom"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollButtons;

