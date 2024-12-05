import Image from 'next/image';

export default function AppDownloadSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#D2964B]">
          Download the App
        </h2>
        
        <div className="flex justify-center items-center space-x-6">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center bg-[#1D1D1D] hover:bg-[#1D1D1D]/70 transition-colors px-6 py-3 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <svg className="w-8 h-8 text-white mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-300">Download on the</div>
              <div className="text-white font-semibold">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center bg-[#1D1D1D] hover:bg-[#1D1D1D]/70 transition-colors px-6 py-3 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <svg className="w-8 h-8 text-white mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.76.43-1.42 1.05-1.76L14.1 9.5 3 17.26v3.24zm18-17c0-.55-.45-1-1-1h-.09L9.04 9.5l11.96 7H21c.55 0 1-.45 1-1v-12zM3.5 18.25l11.96-7L3.5 4.25v14zm15.5-.75L9.04 14.5l-5.05 3.24C4.6 18.1 5.27 18.5 6 18.5h12c.73 0 1.4-.4 1.76-1.04L14.1 14.5l4.9-3z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-300">Get it on</div>
              <div className="text-white font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
} 