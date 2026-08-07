import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import ScrollReveal from '../Components/ScrollReveal';
import { Download, ArrowRight, Video, Share2, FileText, MapPin, Calendar, Award, BarChart3, Handshake } from 'lucide-react';

export default function Collaborate() {
  const stats = [
    { label: 'Total Followers', value: '2M+', sub: 'Across 8 platforms' },
    { label: 'Singaporean Audience', value: '90%', sub: 'Highly targeted' },
    { label: 'Monthly Views', value: '50M+', sub: 'Consistent reach' },
    { label: 'Engagement Rate', value: '8%+', sub: 'Above industry avg' },
  ];

  const platforms = [
    { name: 'YouTube', reach: '800K+' },
    { name: 'TikTok', reach: '600K+' },
    { name: 'Instagram', reach: '400K+' },
    { name: 'Facebook', reach: '300K+' },
    { name: 'Xiaohongshu', reach: '100K+' },
    { name: 'Threads', reach: '50K+' },
    { name: 'Twitter', reach: '30K+' },
    { name: 'Telegram', reach: '20K+' },
  ];

  const services = [
    {
      title: 'Sponsored Videos',
      desc: 'Dedicated food review videos featuring your restaurant, product, or destination.',
      icon: <Video className="w-6 h-6 text-[#0091ff]" />,
    },
    {
      title: 'Social Media Posts',
      desc: 'Instagram, TikTok, and Facebook posts with high engagement and reach.',
      icon: <Share2 className="w-6 h-6 text-[#0091ff]" />,
    },
    {
      title: 'Blog Reviews',
      desc: 'SEO-optimized blog articles that rank on Google and drive long-term traffic.',
      icon: <FileText className="w-6 h-6 text-[#0091ff]" />,
    },
    {
      title: 'Tourism Campaigns',
      desc: 'Multi-platform campaigns promoting travel destinations and food tours.',
      icon: <MapPin className="w-6 h-6 text-[#0091ff]" />,
    },
    {
      title: 'Event Coverage',
      desc: 'Live coverage of restaurant openings, food festivals, and brand events.',
      icon: <Calendar className="w-6 h-6 text-[#0091ff]" />,
    },
    {
      title: 'Brand Ambassador',
      desc: 'Long-term partnerships as the face of your food or lifestyle brand.',
      icon: <Award className="w-6 h-6 text-[#0091ff]" />,
    },
  ];

  const previousCollabs = [
    { brand: 'Brand A', type: 'Sponsored Video - 2024' },
    { brand: 'Brand B', type: 'Restaurant Review - 2024' },
    { brand: 'Brand C', type: 'Tourism Campaign - 2024' },
    { brand: 'Brand D', type: 'Product Launch - 2023' },
    { brand: 'Brand E', type: 'Event Coverage - 2023' },
    { brand: 'Brand F', type: 'Brand Ambassador - 2023' },
  ];

  return (
    <MainLayout>
      <Head title="Collaborate" />
      {/* 1. HERO BANNER */}
      <section className="bg-slate-50 py-12 lg:py-14 border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0091ff] font-bold text-xs uppercase tracking-wider border border-blue-100">
              <Handshake className="w-3.5 h-3.5 text-[#0091ff]" />
              <span>Brand Collaborations</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Partner With <span className="text-[#0091ff]">BibiPew</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Reach millions of food lovers across Singapore and Southeast Asia through authentic, engaging content.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. KEY STATS & DEMOGRAPHICS */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0091ff] uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" /> Reach & Impact
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Audience Demographics</h2>
              <p className="text-slate-500 text-sm font-medium">Who you'll reach by partnering with BibiPew</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <ScrollReveal key={idx} delay={80 * idx}>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 text-center space-y-2 hover:border-[#0091ff] transition-all shadow-xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0091ff]">{s.value}</div>
                  <div className="font-bold text-slate-900 text-sm">{s.label}</div>
                  <div className="text-xs text-slate-500 font-medium">{s.sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* AUDIENCE BREAKDOWN & PLATFORM REACH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={150}>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-6 h-full shadow-xs">
                <h3 className="font-extrabold text-xl text-slate-900">Audience Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                      <span>Singaporean</span>
                      <span className="text-[#0091ff]">90%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-[#0091ff] h-full rounded-full w-[90%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                      <span>Malaysian</span>
                      <span>5%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full rounded-full w-[5%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                      <span>Indonesian</span>
                      <span>3%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full rounded-full w-[3%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                      <span>Others</span>
                      <span>2%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-slate-300 h-full rounded-full w-[2%]" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4 h-full shadow-xs">
                <h3 className="font-extrabold text-xl text-slate-900 mb-4">Platform Reach</h3>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((p) => (
                    <div key={p.name} className="bg-white p-4 rounded-2xl border border-slate-200/80 flex justify-between items-center shadow-xs hover:border-[#0091ff] transition-all">
                      <span className="font-bold text-slate-700 text-sm">{p.name}</span>
                      <span className="font-extrabold text-[#0091ff] text-sm">{p.reach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. SERVICES OFFERED */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Services Offered</h2>
              <p className="text-slate-500 text-sm font-medium">How BibiPew can help promote your brand</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((serv, idx) => (
              <ScrollReveal key={idx} delay={80 * idx}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 hover:border-[#0091ff] transition-all transform hover:-translate-y-1.5 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    {serv.icon}
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-900">{serv.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">{serv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PREVIOUS COLLABORATIONS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          
          <ScrollReveal>
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Previous Collaborations</h2>
              <p className="text-slate-500 text-sm font-medium">Brands that trust BibiPew</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {previousCollabs.map((collab, idx) => (
              <ScrollReveal key={idx} delay={60 * idx}>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 flex flex-col justify-center space-y-2 hover:border-[#0091ff] transition-all transform hover:-translate-y-1 shadow-xs">
                  <div className="font-extrabold text-slate-900 text-base">{collab.brand}</div>
                  <div className="text-xs text-slate-500 font-medium">{collab.type}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA MEDIA KIT BANNER */}
      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="bg-[#0091ff] text-white rounded-3xl p-8 sm:p-12 text-center w-full space-y-6 shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Collaborate?</h2>
              <p className="text-sky-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                Download the BibiPew media kit or get in touch to discuss partnership opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button
                  onClick={() => alert('Media Kit Download started!')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0077e6] font-bold text-sm shadow-md hover:bg-sky-50 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 text-[#0077e6]" />
                  <span>Download Media Kit</span>
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-600/60 hover:bg-sky-600 text-white border border-white/30 font-bold text-sm transition-all transform hover:-translate-y-0.5"
                >
                  <span>Contact BibiPew</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </MainLayout>
  );
}
