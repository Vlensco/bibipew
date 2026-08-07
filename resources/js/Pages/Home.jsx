import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import PenguinMascot from '../Components/PenguinMascot';
import ScrollReveal from '../Components/ScrollReveal';
import { Play, Users, Globe, MapPin, Handshake } from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: '/images/stats/total_foll.png', value: '430K+', label: 'Total Followers' },
    { icon: '/images/stats/platforms.png', value: '8', label: 'Platforms' },
    { icon: '/images/stats/countries.png', value: '4', label: 'Countries' },
    { icon: '/images/stats/collab.png', value: '500+', label: 'Collaborations' },
  ];

  const latestAdventures = [
    {
      id: 1,
      title: 'Best Street Food in JB You Must Try!!!',
      platform: 'Youtube',
      location: 'Malaysia',
    },
    {
      id: 2,
      title: 'Hidden Gems Cafe in Batam City',
      platform: 'Tiktok',
      location: 'Indonesia',
    },
    {
      id: 3,
      title: 'Thai Street Food Recommendation For You',
      platform: 'VNS',
      location: 'Thailand',
    },
    {
      id: 4,
      title: 'Top 5 Cafe in Singapore',
      platform: 'Instagram',
      location: 'Singapore',
    },
    {
      id: 5,
      title: 'Best Street Food in JB You Must Try!!!',
      platform: 'Youtube',
      location: 'Malaysia',
    },
    {
      id: 6,
      title: 'Best Street Food in JB You Must Try!!!',
      platform: 'Facebook',
      location: 'Malaysia',
    },
  ];

  const bibipewRecommends = [
    {
      id: 1,
      tag: 'Restaurant',
      title: 'Top 3 Restaurant in Singapore',
      desc: 'Description + Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      tag: 'Hawker',
      title: 'Top 3 Street Food in JB',
      desc: 'Description + Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 3,
      tag: 'Cafe',
      title: 'Cutest Cafe in Batam',
      desc: 'Description + Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 4,
      tag: 'Hawker',
      title: 'Top 3 Street Food in JB',
      desc: 'Description + Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 5,
      tag: 'Cafe',
      title: 'Cutest Cafe in Batam',
      desc: 'Description + Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
  ];

  const travelHighlights = [
    { name: 'Singapore', desc: 'Trendy cafes, Michelin stalls, Hawker centres' },
    { name: 'Johor Bahru', desc: 'Trendy cafes, Michelin stalls, Hawker centres' },
    { name: 'Batam', desc: 'Trendy cafes, Michelin stalls, Hawker centres' },
    { name: 'Thailand', desc: 'Trendy cafes, Michelin stalls, Hawker centres' },
  ];

  return (
    <MainLayout>
      <Head title="Home" />
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Hi! I'm
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-none">
                  Bibipew
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-lg sm:text-xl font-bold text-slate-900 pt-1">
                  Your friendly food & travel penguin
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p className="text-sm sm:text-base font-bold text-[#00a8ff] max-w-md pt-2 leading-relaxed">
                  Let's exploring delicious places in Singapore, Johor Bahru, Batam, and Thailand.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Mascot with Starburst */}
            <div className="lg:col-span-5 flex justify-center items-center py-4">
              <ScrollReveal delay={250} animation="scale">
                <PenguinMascot pose="default" className="w-72 h-72 sm:w-96 sm:h-96" />
              </ScrollReveal>
            </div>

          </div>

          {/* Stats Banner Row */}
          <ScrollReveal delay={500}>
            <div className="mt-12 bg-[#e3f2fd]/90 rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-xs">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                      <img src={s.icon} alt={s.label} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-black text-2xl sm:text-3xl text-slate-900 leading-tight">{s.value}</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 2. LATEST ADVENTURES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="mb-10 text-left">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Latest Adventures
              </h2>
              <p className="text-slate-400 text-sm mt-1 font-medium">
                Check out my latest food adventures videos
              </p>
            </div>
          </ScrollReveal>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestAdventures.map((video, idx) => (
              <ScrollReveal key={video.id} delay={100 * idx}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                  {/* Top Thumbnail Box */}
                  <div className="relative h-48 bg-[#0088ff] rounded-t-2xl p-4 flex items-center justify-center">
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold">
                        {video.platform}
                      </span>
                    </div>
                    
                    {/* Play Triangle Icon */}
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="p-5 flex-grow space-y-3 bg-white">
                    <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-[#0088ff] transition-colors">
                      {video.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold inline-block">
                      {video.location}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* See More Button */}
          <ScrollReveal delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/videos"
                className="inline-flex items-center justify-center px-10 py-2.5 rounded-full bg-[#00a8ff] hover:bg-sky-500 text-white font-bold text-sm shadow-sm transition-all"
              >
                See More
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 3. BIBIPEW RECOMMENDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="mb-10 text-left">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Bibipew Recommends
              </h2>
              <p className="text-slate-400 text-sm mt-1 font-medium">
                Bibipew's top recommendation you don't want to miss
              </p>
            </div>
          </ScrollReveal>

          {/* 5 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {bibipewRecommends.map((item, idx) => (
              <ScrollReveal key={item.id} delay={100 * idx}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                  <div className="h-40 bg-[#e0f2fe] rounded-2xl p-3 relative">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-slate-700 text-xs font-semibold inline-block">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-4 space-y-2 bg-white flex-grow">
                    <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* See More Button */}
          <ScrollReveal delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-10 py-2.5 rounded-full bg-[#00a8ff] hover:bg-sky-500 text-white font-bold text-sm shadow-sm transition-all"
              >
                See More
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. TRAVEL HIGHLIGHTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="mb-10 text-left">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Travel Highlights
              </h2>
              <p className="text-slate-400 text-sm mt-1 font-medium">
                Bibipew's guides to the best food spots in each country
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelHighlights.map((country, idx) => (
              <ScrollReveal key={idx} delay={100 * idx}>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center gap-5 hover:border-sky-300 transition-all">
                  <div className="w-20 h-20 rounded-xl bg-[#0088ff] shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-xl text-slate-900">{country.name}</h3>
                    <p className="text-slate-400 text-xs font-medium">{country.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">Category 1</span>
                      <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">Category 2</span>
                      <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">Category 3</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. BRANDS WHO TRUST BIBIPEW */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Brands Who Trust Bibipew
            </h2>
          </ScrollReveal>
        </div>

        {/* Continuous Scrolling Marquee Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="animate-marquee flex gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((b, i) => (
              <div
                key={i}
                className="w-44 sm:w-52 h-28 sm:h-32 bg-[#e3f2fd] border border-sky-100 rounded-2xl flex-none shrink-0 flex items-center justify-center shadow-2xs hover:scale-105 hover:border-sky-300 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-sky-200/60 flex items-center justify-center opacity-60">
                  <span className="font-bold text-sky-700 text-xs sm:text-sm">Brand</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
