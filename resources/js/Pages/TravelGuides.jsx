import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import ScrollReveal from '../Components/ScrollReveal';
import { MapPin, Compass, ArrowRight, Utensils } from 'lucide-react';

export default function TravelGuides() {
  const guides = [
    {
      code: 'SG',
      country: 'Singapore',
      subtitle: 'BibiPew Recommends',
      desc: 'From world-class hawker centres to trendy cafes, Singapore is a food paradise. Discover the best chicken rice, laksa, chili crab, and hidden gems across the island.',
      mustTry: ['Hainanese Chicken Rice', 'Laksa', 'Chili Crab', 'Char Kway Teow', 'Roti Prata', 'Kaya Toast'],
      topSpots: ['Maxwell Food Centre', 'Lau Pa Sat', 'Newton Food Centre', 'Chinatown Complex', 'Old Airport Road'],
    },
    {
      code: 'MY',
      country: 'Johor Bahru',
      subtitle: 'BibiPew Recommends',
      desc: 'Just across the causeway, JB offers incredible food at affordable prices. From traditional kopitiums to modern cafes, there is always something new to discover.',
      mustTry: ['Ban Lau Hee', 'Kam Heong Lala', 'Hokkien Mee', 'Bak Kut Teh', 'Nasi Lemak'],
      topSpots: ['Jalan Dhoby', 'Meldrum Walk', 'Taman Molek', 'Mount Austin', 'Bukit Indah'],
    },
    {
      code: 'ID',
      country: 'Batam',
      subtitle: 'BibiPew Recommends',
      desc: 'A quick ferry ride from Singapore, Batam serves up ultra fresh seafood, authentic Indonesian cuisine, and amazing value for money.',
      mustTry: ['Fresh Seafood', 'Nasi Padang', 'Mie Tarempa', 'Gong Gong', 'Es Campur'],
      topSpots: ['Nagoya Hill', 'Batam Centre', 'Barelang Area', 'Waterfront City', 'Sei Ladi'],
    },
    {
      code: 'TH',
      country: 'Thailand',
      subtitle: 'BibiPew Recommends',
      desc: 'Thailand is the food capital of Southeast Asia! Experience vibrant street food, night markets, aromatic spicy soups, and sweet desserts.',
      mustTry: ['Pad Thai', 'Som Tum', 'Mango Sticky Rice', 'Tom Yum Goong', 'Khao Man Gai', 'Boat Noodles'],
      topSpots: ['Yaowarat (Chinatown)', 'Khao San Road', 'Chatuchak Market', 'Thonglor', 'Ari'],
    },
  ];

  return (
    <MainLayout>
      <Head title="Travel Guides" />
      {/* HERO BANNER */}
      <section className="bg-slate-50 py-12 lg:py-14 border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0091ff] font-bold text-xs uppercase tracking-wider border border-blue-100">
              <Compass className="w-3.5 h-3.5 text-[#0091ff]" />
              <span>Travel Guides</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              <span className="text-[#0091ff]">BibiPew’s</span> Food Travel Guides
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Your ultimate food travel companion for Singapore, Johor Bahru, Batam, and Thailand.
            </p>
          </ScrollReveal>

          {/* Quick Jump Bar */}
          <ScrollReveal delay={400}>
            <div className="pt-6 flex flex-wrap justify-center gap-3">
              {guides.map((g) => (
                <a
                  key={g.code}
                  href={`#${g.code}`}
                  className="px-5 py-2 rounded-full bg-white border border-slate-200/80 hover:border-[#0091ff] font-bold text-xs text-slate-700 shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span className="font-extrabold text-[#0091ff]">{g.code}</span>
                  <span>{g.country}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GUIDES LIST */}
      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {guides.map((guide, idx) => (
            <ScrollReveal key={guide.code} delay={100 * idx}>
              <div
                id={guide.code}
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 scroll-mt-24 shadow-xs hover:border-blue-200 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Guide Details */}
                  <div className="lg:col-span-8 space-y-6">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#0091ff] text-white font-extrabold text-2xl flex items-center justify-center shadow-md">
                        {guide.code}
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {guide.country} Food Guide
                        </h2>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {guide.subtitle}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      {guide.desc}
                    </p>

                    {/* Must Try Foods */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-[#0091ff]" />
                        Must Try Foods
                      </h3>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {guide.mustTry.map((item, i) => (
                          <span
                            key={i}
                            className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0091ff] font-bold text-xs border border-blue-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Top Food Spots */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#0091ff]" />
                        Top Food Spots
                      </h3>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {guide.topSpots.map((spot, i) => (
                          <span
                            key={i}
                            className="px-3.5 py-1.5 rounded-full bg-white text-slate-700 font-bold text-xs border border-slate-200/80 shadow-2xs"
                          >
                            {spot}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Call-out Sidebar - Compact & Vertically Centered */}
                  <div className="lg:col-span-4 bg-[#0091ff] text-white rounded-2xl p-6 sm:p-7 space-y-4 shadow-md my-auto">
                    <h3 className="font-extrabold text-xl tracking-tight">Plan Your Trip</h3>
                    <p className="text-sky-100 text-xs sm:text-sm leading-relaxed font-medium">
                      Watch BibiPew's {guide.country} food videos for detailed recommendations and insider tips.
                    </p>

                    <div className="pt-2">
                      <Link
                        href="/videos"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#0077e6] hover:bg-sky-50 font-bold text-xs sm:text-sm shadow-md transition-all w-full justify-center transform hover:scale-105"
                      >
                        <span>Watch Videos</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
