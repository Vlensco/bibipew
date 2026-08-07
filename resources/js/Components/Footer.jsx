import React from 'react';
import { Link } from '@inertiajs/react';
import PenguinMascot from './PenguinMascot';

export default function Footer() {
  const socialLinks = [
    { name: 'YouTube', icon: '/images/social/yt.png', url: 'https://youtube.com' },
    { name: 'Instagram', icon: '/images/social/ig.png', url: 'https://instagram.com' },
    { name: 'Xiaohongshu', icon: '/images/social/cina.png', url: 'https://xiaohongshu.com' },
    { name: 'TikTok', icon: '/images/social/tiktok.png', url: 'https://tiktok.com' },
    { name: 'X', icon: '/images/social/x.png', url: 'https://x.com' },
    { name: 'Lemon8', icon: '/images/social/lemon8.png', url: 'https://lemon8-app.com' },
    { name: 'Threads', icon: '/images/social/threads.png', url: 'https://threads.net' },
  ];

  return (
    <footer className="w-full font-sans relative">
      {/* Upper Dark Blue Section - Larger & Taller */}
      <div className="bg-[#0057b7] text-white pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Brand Info & Socials */}
            <div className="md:col-span-5 space-y-4 pr-0 lg:pr-6">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden border-2 border-sky-300 shadow-xs">
                  <PenguinMascot pose="default" className="w-9 h-9" animated={false} />
                </div>
                <span className="font-black text-2xl tracking-tight text-white">
                  Bibipew
                </span>
              </Link>
              
              <p className="text-sky-100 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
                Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at libero quis nulla bibendum gravida. Integer porttitor velit ac orci pellentesque.
              </p>

              {/* 7 Social Media Icon Badges */}
              <div className="flex items-center gap-2 pt-2 flex-wrap">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    title={s.name}
                    className="w-8 h-8 rounded-full bg-[#00a8ff] hover:bg-sky-400 p-1.5 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs shrink-0"
                  >
                    <img src={s.icon} alt={s.name} className="w-full h-full object-contain" />
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Column 1: Page Navigation */}
            <div className="md:col-span-2 space-y-2">
              <ul className="space-y-2.5 text-xs sm:text-sm text-sky-100 font-semibold">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/videos" className="hover:text-white transition-colors">Videos</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/travel-guides" className="hover:text-white transition-colors">Travel</Link></li>
                <li><Link href="/merch" className="hover:text-white transition-colors">Merch</Link></li>
                <li><Link href="/collaborate" className="hover:text-white transition-colors">Collab</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Middle Column 2: Food Guides */}
            <div className="md:col-span-2 space-y-2">
              <ul className="space-y-2.5 text-xs sm:text-sm text-sky-100 font-semibold">
                <li><Link href="/travel-guides" className="hover:text-white transition-colors">Singapore Food</Link></li>
                <li><Link href="/travel-guides" className="hover:text-white transition-colors">Johor Bahru Food Guide</Link></li>
                <li><Link href="/travel-guides" className="hover:text-white transition-colors">Batam Food Guide</Link></li>
                <li><Link href="/travel-guides" className="hover:text-white transition-colors">Thailand Food Guide</Link></li>
              </ul>
            </div>

            {/* Right Column: Work Together & CTA Button */}
            <div className="md:col-span-3 space-y-4">
              <p className="text-sky-100 text-xs sm:text-sm font-semibold leading-relaxed">
                Interested in working together? Reach out for collaborations, sponsorships, and media enquiries.
              </p>
              <Link
                href="/contact"
                className="inline-block px-7 py-2.5 rounded-full bg-[#00a8ff] hover:bg-sky-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Lower Bright Blue Collaboration Banner */}
      <div className="bg-[#0091ff] text-white py-4 sm:py-5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Text */}
          <div className="z-10 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Want to collaborate with Bibipew?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 font-medium mt-0.5">
              Restaurant - Brands - Travel
            </p>
          </div>

          {/* Right Side: CTA Button & Overlapping Cookie Penguin Mascot */}
          <div className="relative flex flex-col items-center justify-center z-10 pt-16 md:pt-0">
            {/* Mascot sitting on top border line directly centered above Get in touch button */}
            <img
              src="/images/footer.png"
              alt="Bibipew Footer"
              loading="eager"
              className="w-24 sm:w-28 md:w-32 h-auto absolute bottom-full mb-1 left-1/2 -translate-x-1/2 pointer-events-none drop-shadow-xl z-20"
            />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-white text-[#0077e6] hover:bg-sky-50 font-bold text-xs sm:text-sm shadow-lg transition-all duration-200 transform hover:scale-105 z-10"
            >
              Get in touch
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
