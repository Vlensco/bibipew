import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import ScrollReveal from '../Components/ScrollReveal';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Reviews');

  const categories = [
    'All Reviews',
    'Hawker',
    'Cafe',
    'Restaurant',
    'Street Food',
    'Hidden Gems',
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 3 Restaurant in Singapore',
      category: 'Restaurant',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Top 3 Street Food in JB',
      category: 'Hawker',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'Cutest Cafe in Batam',
      category: 'Cafe',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      title: 'Top 3 Restaurant in Singapore',
      category: 'Restaurant',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      title: 'Top 3 Street Food in JB',
      category: 'Hawker',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      title: 'Cutest Cafe in Batam',
      category: 'Cafe',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 7,
      title: 'Top 3 Restaurant in Singapore',
      category: 'Restaurant',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 8,
      title: 'Top 3 Street Food in JB',
      category: 'Hawker',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 9,
      title: 'Cutest Cafe in Batam',
      category: 'Cafe',
      description: 'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    if (activeCategory === 'All Reviews') return true;
    return post.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <MainLayout>
      <Head title="Food Reviews" />
      {/* 1. HEADER TITLE SECTION */}
      <section className="pt-10 pb-6 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal delay={100}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              <span className="text-[#0091ff]">Bibipew’s</span> Food Reviews
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-slate-500 text-sm sm:text-base font-medium mt-2 max-w-2xl mx-auto leading-relaxed">
              Watch Bibipew’s Latest Videos. Food reviews, travel vlogs, and recommendations from Singapore, JB, Batam and Thailand.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CATEGORY PILL FILTER BAR (CENTERED) */}
      <div className="bg-[#f8fafc] py-4 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2.5 overflow-x-auto scrollbar-none py-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0091ff] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. BLOG POSTS GRID (3 COLUMNS) */}
      <section className="py-10 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg font-bold">No reviews found matching the selected category.</p>
              <button
                onClick={() => setActiveCategory('All Reviews')}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0091ff] text-white font-bold text-sm shadow-md"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post, idx) => (
                <ScrollReveal key={`${activeCategory}-${post.id}`} delay={(idx % 3) * 100}>
                  <div className="group cursor-pointer flex flex-col space-y-3">
                    {/* Light Blue Thumbnail Box */}
                    <div className="relative h-48 bg-[#dbeafe] rounded-2xl p-4 flex items-center justify-center shadow-xs group-hover:shadow-md transition-all">
                      {/* Top Left Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold shadow-xs">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Title & Description */}
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-[#0091ff] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

        </div>
      </section>
    </MainLayout>
  );
}
