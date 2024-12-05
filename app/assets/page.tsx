'use client';

import Navbar from '@/components/Navbar';

export default function AssetsPage() {
  const assets = [
    {
      title: 'Luxury Apartment Complex',
      location: 'Miami, Florida',
      price: '$250,000',
      roi: '12%',
      type: 'Residential',
      occupancy: '95%',
      units: '24',
      area: '1,200 sq ft',
      yearBuilt: '2020'
    },
    {
      title: 'Commercial Office Space',
      location: 'New York City',
      price: '$500,000',
      roi: '15%',
      type: 'Commercial',
      occupancy: '100%',
      units: '12',
      area: '2,500 sq ft',
      yearBuilt: '2018'
    },
    {
      title: 'Retail Shopping Center',
      location: 'Los Angeles',
      price: '$750,000',
      roi: '18%',
      type: 'Retail',
      occupancy: '90%',
      units: '8',
      area: '5,000 sq ft',
      yearBuilt: '2019'
    },
    {
      title: 'Modern Residential Complex',
      location: 'Austin, Texas',
      price: '$350,000',
      roi: '14%',
      type: 'Residential',
      occupancy: '98%',
      units: '16',
      area: '1,500 sq ft',
      yearBuilt: '2021'
    },
    {
      title: 'Industrial Warehouse',
      location: 'Chicago, Illinois',
      price: '$600,000',
      roi: '16%',
      type: 'Industrial',
      occupancy: '100%',
      units: '4',
      area: '10,000 sq ft',
      yearBuilt: '2017'
    },
    {
      title: 'Mixed-Use Development',
      location: 'Seattle, Washington',
      price: '$450,000',
      roi: '13%',
      type: 'Mixed-Use',
      occupancy: '92%',
      units: '20',
      area: '3,000 sq ft',
      yearBuilt: '2022'
    }
  ];

  const propertyTypes = ['All', 'Residential', 'Commercial', 'Retail', 'Industrial', 'Mixed-Use'];
  const locations = ['All', 'Miami', 'New York City', 'Los Angeles', 'Austin', 'Chicago', 'Seattle'];
  const priceRanges = ['All', '$0-$300k', '$300k-$500k', '$500k+'];

  const BuildingIcon = () => (
    <svg className="w-12 h-12 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#D2964B] mb-4">Available Assets</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our curated selection of high-quality real estate investment opportunities.
              Each property is thoroughly vetted and offers unique potential for returns.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-[#1D1D1D] p-6 rounded-lg mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">Filter Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Property Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Property Type</label>
                <select className="w-full bg-[#292929] text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2964B]">
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <select className="w-full bg-[#292929] text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2964B]">
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select className="w-full bg-[#292929] text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2964B]">
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Assets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assets.map((asset, index) => (
              <div 
                key={index}
                className="bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#1D1D1D]/70 transition-all duration-300"
              >
                <div className="mb-4">
                  <BuildingIcon />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{asset.title}</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {asset.location}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {asset.price}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    ROI: {asset.roi}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {asset.type}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    Occupancy: {asset.occupancy}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                    Units: {asset.units}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    Area: {asset.area}
                  </p>
                </div>
                <button className="w-full mt-6 bg-[#D2964B] hover:bg-[#c48a45] text-white py-2 rounded transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Investment Guide Section */}
          <div className="mt-16 bg-[#1D1D1D] rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">New to Real Estate Investment?</h2>
              <p className="text-gray-300 mb-6">
                Download our comprehensive guide to learn everything you need to know about real estate investment tokenization.
              </p>
              <button className="bg-[#D2964B] hover:bg-[#c48a45] text-white px-8 py-3 rounded transition-colors">
                Download Investment Guide
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 