import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import ScrollReveal from '../Components/ScrollReveal';

export default function About() {
  const journey = [
    { year: '2020', desc: 'Started posting food reviews in Singapore on Instagram' },
    { year: '2021', desc: 'Expanded to YouTube & TikTok, grew to 10K followers' },
    { year: '2022', desc: 'First brand collaboration, featured in local media' },
    { year: '2024', desc: 'Expanded coverage to JB, Batam & Thailand; 8 platforms active' },
  ];

  const whatIDo = [
    { title: 'Video Content', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum diam, venenatis fermentum tortor nec, faucibus pretium turpis. Sed augue odio, vehicula sit amet convallis vel, porttitor nec odio.' },
    { title: 'Video Content', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum diam, venenatis fermentum tortor nec, faucibus pretium turpis. Sed augue odio, vehicula sit amet convallis vel, porttitor nec odio.' },
    { title: 'Video Content', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum diam, venenatis fermentum tortor nec, faucibus pretium turpis. Sed augue odio, vehicula sit amet convallis vel, porttitor nec odio.' },
    { title: 'Video Content', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum diam, venenatis fermentum tortor nec, faucibus pretium turpis. Sed augue odio, vehicula sit amet convallis vel, porttitor nec odio.' },
    { title: 'Video Content', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum diam, venenatis fermentum tortor nec, faucibus pretium turpis. Sed augue odio, vehicula sit amet convallis vel, porttitor nec odio.' },
    { title: 'Video Content', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum diam, venenatis fermentum tortor nec, faucibus pretium turpis. Sed augue odio, vehicula sit amet convallis vel, porttitor nec odio.' },
  ];

  const demographics = [
    { stat: '80%', title: 'Singaporean', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { stat: '80%', title: 'Singaporean', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { stat: '80%', title: 'Singaporean', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { stat: '80%', title: 'Singaporean', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <MainLayout>
      <Head title="About" />
      {/* 1. HERO SECTION (Light Blue) */}
      <section className="bg-[#dbeafe] py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 justify-center">
            
            {/* Mascot Hero Image */}
            <ScrollReveal animation="scale">
              <div className="w-56 sm:w-64 md:w-72 shrink-0">
                <img
                  src="/images/about/hero-mascot.jpeg"
                  alt="BibiPew Mascot"
                  className="w-full h-auto rounded-3xl object-cover shadow-sm"
                />
              </div>
            </ScrollReveal>

            {/* Hero Text */}
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <ScrollReveal delay={100}>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Hi, I'm BibiPew!
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
                  A passionate food & lifestyle content creator based in Singapore. I travel across Singapore, Johor Bahru, Batam, and Thailand discovering the best food experiences to share with my community.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-bold">
                  My mission is simple: find the most delicious hidden gems and share them with you!
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MY JOURNEY SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                My Journey
              </h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                From food lover to full-time content creator
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline Layout */}
          <div className="relative max-w-2xl mx-auto pl-6 sm:pl-10">
            {/* Vertical Line */}
            <div className="absolute left-10 sm:left-14 top-4 bottom-8 w-1 bg-sky-400 -translate-x-1/2"></div>

            <div className="space-y-8">
              {journey.map((item, idx) => (
                <ScrollReveal key={idx} delay={100 * idx}>
                  <div className="relative flex items-center gap-6 sm:gap-8">
                    {/* Blue Circle */}
                    <div className="w-8 h-8 rounded-full bg-[#0091ff] border-4 border-white shadow-md shrink-0 z-10"></div>

                    {/* Card */}
                    <div className="flex-grow bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-extrabold text-[#0091ff]">
                        {item.year}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHAT I DO SECTION */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                What I Do
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIDo.map((item, i) => (
              <ScrollReveal key={i} delay={80 * i}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0091ff] shrink-0"></div>
                    <h3 className="font-extrabold text-slate-900 text-base">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHO FOLLOWS BIBIPEW SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Who Follows Bibipew
              </h2>
            </div>
          </ScrollReveal>

          {/* Top Row: Demographics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {demographics.map((d, i) => (
              <ScrollReveal key={i} delay={100 * i}>
                <div className="bg-[#dbeafe] p-6 rounded-2xl text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0077e6]">
                    {d.stat}
                  </div>
                  <div className="font-extrabold text-slate-800 text-sm">
                    {d.title}
                  </div>
                  <p className="text-slate-500 text-xs mt-2 font-medium">
                    {d.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Row: Single Unified Stat Container Card (Matching Foto 1) */}
          <ScrollReveal delay={100}>
            <div className="bg-[#dbeafe] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center justify-between">
                
                {/* 1. Total Followers */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">430K+</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Total Followers</span>
                </div>

                {/* 2. Platforms */}
                <div className="flex items-center gap-3.5 justify-center md:justify-start">
                  <img src="/images/about/platforms.png" alt="Platforms" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">8</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600">Platforms</span>
                  </div>
                </div>

                {/* 3. Countries */}
                <div className="flex items-center gap-3.5 justify-center md:justify-start">
                  <img src="/images/about/countries.png" alt="Countries" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">4</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600">Countries</span>
                  </div>
                </div>

                {/* 4. Collaborations */}
                <div className="flex items-center gap-3.5 justify-center md:justify-start">
                  <img src="/images/about/collab.png" alt="Collaborations" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">500+</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600">Collaborations</span>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </MainLayout>
  );
}
