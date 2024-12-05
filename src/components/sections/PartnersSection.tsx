import { Partner } from '@/types';

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#D2964B]">
          Our Partners
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {/* Solana */}
          <div className="p-6 hover:opacity-80 transition-opacity">
            <svg className="w-32 h-12 text-white" viewBox="0 0 397 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.8 25.1l7.9-3.9c.8 2.4 2.7 4.1 6.3 4.1 3.3 0 4.8-1.4 4.8-3.2 0-5.6-17.3-2.2-17.3-14.7 0-6 5.2-10.2 12.7-10.2 7.1 0 11.9 3.5 13.5 8.6l-7.7 3.8c-.8-2.4-2.9-3.7-5.8-3.7-2.7 0-4.2 1.2-4.2 2.9 0 5.2 17.3 2.1 17.3 14.5 0 6.1-5 10.7-13.3 10.7-8.1 0-12.8-3.6-14.2-8.9zM98.8 34V1h8.6v33h-8.6zM118.1 34V1h25.5v7.2h-16.9v5.4h15.7v7.2h-15.7v6h16.9V34h-25.5zM155.1 34V1h8.6v25.8h16.1V34h-24.7zM190.4 34V1h8.6v33h-8.6zM209.6 34V1h25.5v7.2h-16.9v5.4h15.7v7.2h-15.7v6h16.9V34h-25.5zM246.7 34V1h14.2c10.7 0 17.9 6.5 17.9 16.5S271.6 34 260.9 34h-14.2zm8.6-7.2h5.3c5.7 0 9.5-3.4 9.5-9.3s-3.8-9.3-9.5-9.3h-5.3v18.6zM289.8 34V1h25.5v7.2h-16.9v5.4h15.7v7.2h-15.7v6h16.9V34h-25.5zM326.8 34V1h14.2c10.7 0 17.9 6.5 17.9 16.5S351.7 34 341 34h-14.2zm8.6-7.2h5.3c5.7 0 9.5-3.4 9.5-9.3s-3.8-9.3-9.5-9.3h-5.3v18.6z" fill="currentColor"/>
            </svg>
          </div>

          {/* Circle */}
          <div className="p-6 hover:opacity-80 transition-opacity">
            <svg className="w-32 h-12 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" />
              <path d="M50 20c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30" stroke="currentColor" strokeWidth="5" />
            </svg>
          </div>

          {/* AWS */}
          <div className="p-6 hover:opacity-80 transition-opacity">
            <svg className="w-32 h-12 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 35h60M20 50h60M20 65h60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M30 20l20 60M50 20l-20 60" stroke="currentColor" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 