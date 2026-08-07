import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import ScrollReveal from '../Components/ScrollReveal';
import { Play, X } from 'lucide-react';

export default function Videos() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const countries = [
    { id: 'All', label: 'All' },
    { id: 'Singapore', label: 'SG Singapore' },
    { id: 'JB', label: 'MY JB' },
    { id: 'Batam', label: 'ID Batam' },
    { id: 'Thailand', label: 'TH Thailand' },
  ];

  const platforms = [
    { id: 'All', label: 'All Platforms' },
    { id: 'Youtube', label: 'Youtube' },
    { id: 'Instagram', label: 'Instagram' },
    { id: 'Tiktok', label: 'Tiktok' },
    { id: 'Facebook', label: 'Facebook' },
    { id: 'Xiaohongshu', label: 'Xiaohongshu' },
  ];

  const videoList = [
    {
      id: 1,
      title: 'Best Street Food in JB You Must Try!!!',
      platform: 'Instagram',
      country: 'JB',
      locationLabel: 'Malaysia',
    },
    {
      id: 2,
      title: 'Hidden Gem Cafe in Batam City',
      platform: 'Youtube',
      country: 'Batam',
      locationLabel: 'Indonesia',
    },
    {
      id: 3,
      title: 'Thai Street Food Recommendation For You',
      platform: 'Facebook',
      country: 'Thailand',
      locationLabel: 'Thailand',
    },
    {
      id: 4,
      title: 'Top 5 Cafe in Singapore',
      platform: 'Instagram',
      country: 'Singapore',
      locationLabel: 'Singapore',
    },
    {
      id: 5,
      title: 'Best Street Food in JB You Must Try!!!',
      platform: 'Youtube',
      country: 'JB',
      locationLabel: 'Malaysia',
    },
    {
      id: 6,
      title: 'Best Street Food in JB You Must Try!!!',
      platform: 'Facebook',
      country: 'JB',
      locationLabel: 'Malaysia',
    },
    {
      id: 7,
      title: 'Top 5 Cafe in Singapore',
      platform: 'Instagram',
      country: 'Singapore',
      locationLabel: 'Singapore',
    },
    {
      id: 8,
      title: 'Best Street Food in JB You Must Try!!!',
      platform: 'Youtube',
      country: 'JB',
      locationLabel: 'Malaysia',
    },
    {
      id: 9,
      title: 'Best Street Food in JB You Must Try!!!',
      platform: 'Facebook',
      country: 'JB',
      locationLabel: 'Malaysia',
    },
  ];

  const filteredVideos = videoList.filter((v) => {
    const matchCountry =
      selectedCountry === 'All' || v.country.toLowerCase() === selectedCountry.toLowerCase();
    const matchPlatform =
      selectedPlatform === 'All' || v.platform.toLowerCase() === selectedPlatform.toLowerCase();
    return matchCountry && matchPlatform;
  });

  return (
    <MainLayout>
      <Head title="Videos" />
      {/* 1. HEADER TITLE SECTION */}
      <section className="pt-10 pb-6 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal delay={100}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Watch <span className="text-[#0091ff]">Bibipew’s</span> Latest Videos
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-slate-500 text-sm sm:text-base font-medium mt-2 max-w-2xl mx-auto leading-relaxed">
              Watch Bibipew’s Latest Videos. Food reviews, travel vlogs, and recommendations from Singapore, JB, Batam and Thailand.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. COUNTRY TAB BAR (Border Underlined Filter) */}
      <div className="border-b border-slate-200 bg-white sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none py-1">
            {countries.map((c) => {
              const isActive = selectedCountry === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountry(c.id)}
                  className={`py-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                    isActive
                      ? 'border-[#0091ff] text-[#0091ff]'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. PLATFORM PILL FILTER BAR */}
      <div className="bg-[#f8fafc] py-4 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2.5 overflow-x-auto scrollbar-none py-1">
            {platforms.map((p) => {
              const isActive = selectedPlatform === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlatform(p.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0091ff] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. VIDEOS GRID */}
      <section className="py-10 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredVideos.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg font-bold">No videos found matching the selected filters.</p>
              <button
                onClick={() => {
                  setSelectedCountry('All');
                  setSelectedPlatform('All');
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0091ff] text-white font-bold text-sm shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredVideos.map((video, idx) => (
                <ScrollReveal
                  key={`${selectedCountry}-${selectedPlatform}-${video.id}`}
                  delay={(idx % 3) * 100}
                >
                  <div
                    onClick={() => setActiveVideoModal(video)}
                    className="group cursor-pointer flex flex-col space-y-3"
                  >
                    {/* Blue Thumbnail Box */}
                    <div className="relative h-48 bg-[#0091ff] rounded-2xl p-4 flex items-center justify-center shadow-xs group-hover:shadow-md transition-all">
                      {/* Top Left Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold shadow-xs">
                          {video.platform}
                        </span>
                      </div>

                      {/* Center Play Button */}
                      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-current translate-x-0.5" />
                      </div>
                    </div>

                    {/* Bottom Title & Location Tag */}
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-[#0091ff] transition-colors">
                        {video.title}
                      </h3>
                      <div>
                        <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold inline-block">
                          {video.locationLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* VIDEO MODAL PREVIEW */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="font-bold text-sm">▶ {activeVideoModal.title}</span>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-64 bg-[#0091ff] flex flex-col items-center justify-center text-white p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                <Play className="w-8 h-8 fill-current translate-x-0.5 text-white" />
              </div>
              <p className="text-sm font-semibold">{activeVideoModal.title}</p>
              <p className="text-xs text-sky-100">Platform: {activeVideoModal.platform} • {activeVideoModal.locationLabel}</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-end">
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-6 py-2 rounded-full bg-[#0091ff] text-white font-bold text-xs hover:bg-sky-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
