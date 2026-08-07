import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import ScrollReveal from '../Components/ScrollReveal';
import { Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Brand Collaboration',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    'Brand Collaboration',
    'Media Enquiry',
    'Restaurant Invitation',
    'General Business',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: 'Brand Collaboration',
        message: '',
      });
    }, 4000);
  };

  return (
    <MainLayout>
      <Head title="Contact" />
      {/* 1. HERO BANNER */}
      <section className="bg-slate-50 py-12 lg:py-14 border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0091ff] font-bold text-xs uppercase tracking-wider border border-blue-100">
              <MessageSquare className="w-3.5 h-3.5 text-[#0091ff]" />
              <span>Get In Touch</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Contact <span className="text-[#0091ff]">BibiPew</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Have a business opportunity, restaurant invitation, or collaboration idea? Let's talk!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FORM & INFO SECTION */}
      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={200}>
                <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                  <h2 className="text-2xl font-extrabold text-slate-900">Send a Message</h2>

                  {submitted ? (
                    <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-start gap-4 animate-in fade-in duration-300">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-extrabold text-base">Message Sent Successfully!</h3>
                        <p className="text-sm text-emerald-700 mt-1 font-medium">
                          Thank you for reaching out. BibiPew will respond to your enquiry soon!
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:border-[#0091ff] focus:ring-2 focus:ring-sky-100 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:border-[#0091ff] focus:ring-2 focus:ring-sky-100 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:border-[#0091ff] focus:ring-2 focus:ring-sky-100 transition-all"
                        />
                      </div>

                      {/* Inquiry Type selector buttons */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Inquiry Type *
                        </label>
                        <div className="grid grid-cols-2 gap-2.5">
                          {inquiryTypes.map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setFormData({ ...formData, inquiryType: type })}
                              className={`p-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between ${
                                formData.inquiryType === type
                                  ? 'bg-[#0091ff] text-white border-[#0091ff] shadow-xs'
                                  : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100'
                              }`}
                            >
                              <span>{type}</span>
                              {formData.inquiryType === type && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project, event, or collaboration idea..."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:border-[#0091ff] focus:ring-2 focus:ring-sky-100 transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#0091ff] hover:bg-sky-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Info Box */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal delay={300}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-6 shadow-xs">
                  <h3 className="font-extrabold text-xl text-slate-900">Quick Contact</h3>

                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0091ff] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold">Email</div>
                        <a href="mailto:hello@bibipew.com" className="font-bold text-slate-900 hover:text-[#0091ff] transition-colors">
                          hello@bibipew.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0091ff] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold">Based In</div>
                        <div className="font-bold text-slate-900">Singapore 🇸🇬</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Follow Grid */}
              <ScrollReveal delay={400}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4 shadow-xs">
                  <h3 className="font-extrabold text-xl text-slate-900">Follow BibiPew</h3>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {['YouTube', 'TikTok', 'Instagram', 'Facebook', 'Twitter', 'Telegram'].map((plat) => (
                      <div key={plat} className="p-3 bg-white rounded-2xl border border-slate-200/80 text-xs font-bold text-slate-700 hover:border-[#0091ff] hover:text-[#0091ff] transition-all shadow-xs cursor-pointer">
                        {plat}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Response Time Box */}
              <ScrollReveal delay={500}>
                <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100 flex items-start gap-4 text-blue-900">
                  <Clock className="w-6 h-6 text-[#0091ff] shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed font-medium">
                    <strong className="block text-sm font-extrabold text-blue-950 mb-1">Response Time</strong>
                    BibiPew typically responds within 2-3 business days. For urgent enquiries, please mention it in your message.
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>

        </div>
      </section>
    </MainLayout>
  );
}
