import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import PenguinMascot from '../Components/PenguinMascot';
import ScrollReveal from '../Components/ScrollReveal';
import { ShoppingBag, Check, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Merch() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Merch');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const categories = [
    'All Merch',
    'Apparel',
    'Accessories',
    'Limited Edition',
    'Plush & Toys',
  ];

  const allProducts = [
    {
      id: 1,
      name: 'BibiPew Penguin Tote Bag',
      category: 'Accessories',
      price: '29.90',
      currency: 'SGD',
      desc: 'Cute penguin tote bag perfect for food adventures.',
      pose: 'default',
      available: true,
    },
    {
      id: 2,
      name: 'BibiPew Hoodie T-Shirt',
      category: 'Apparel',
      price: '34.90',
      currency: 'SGD',
      desc: 'Premium cotton tee with the iconic BibiPew penguin.',
      pose: 'cool',
      available: true,
    },
    {
      id: 3,
      name: 'BibiPew Penguin Sticker Pack',
      category: 'Accessories',
      price: '12.90',
      currency: 'SGD',
      desc: 'Set of 10 cute BibiPew penguin stickers.',
      pose: 'foodie',
      available: true,
    },
    {
      id: 4,
      name: 'BibiPew Food Map Poster',
      category: 'Limited Edition',
      price: '19.90',
      currency: 'SGD',
      desc: 'Illustrated food map poster of Singapore.',
      pose: 'travel',
      available: false,
    },
    {
      id: 5,
      name: 'BibiPew Enamel Pin Set',
      category: 'Accessories',
      price: '15.90',
      currency: 'SGD',
      desc: 'Set of 3 custom enamel pins featuring BibiPew poses.',
      pose: 'cool',
      available: true,
    },
    {
      id: 6,
      name: 'BibiPew Boba Plushie',
      category: 'Plush & Toys',
      price: '24.90',
      currency: 'SGD',
      desc: 'Soft & squishy BibiPew penguin holding boba milk tea.',
      pose: 'foodie',
      available: false,
    },
    {
      id: 7,
      name: 'BibiPew Travel Cap',
      category: 'Apparel',
      price: '22.90',
      currency: 'SGD',
      desc: 'Stylish embroidered cap for sunny food trails.',
      pose: 'travel',
      available: true,
    },
    {
      id: 8,
      name: 'BibiPew Stainless Tumbler',
      category: 'Accessories',
      price: '27.90',
      currency: 'SGD',
      desc: '500ml insulated tumbler keeps drinks ice cold.',
      pose: 'default',
      available: false,
    },
    {
      id: 9,
      name: 'BibiPew Keychain Mascot',
      category: 'Plush & Toys',
      price: '9.90',
      currency: 'SGD',
      desc: 'Mini plush keychain to bring BibiPew everywhere.',
      pose: 'foodie',
      available: true,
    },
    {
      id: 10,
      name: 'BibiPew Chef Apron',
      category: 'Apparel',
      price: '25.90',
      currency: 'SGD',
      desc: 'Heavy-duty cotton apron for home chefs & foodies.',
      pose: 'default',
      available: true,
    },
    {
      id: 11,
      name: 'BibiPew Limited Edition Box',
      category: 'Limited Edition',
      price: '59.90',
      currency: 'SGD',
      desc: 'Collector box with plushie, pins & signed food map.',
      pose: 'cool',
      available: false,
    },
    {
      id: 12,
      name: 'BibiPew Desk Mat',
      category: 'Accessories',
      price: '21.90',
      currency: 'SGD',
      desc: 'Large non-slip desk mat featuring BibiPew illustrations.',
      pose: 'travel',
      available: true,
    },
  ];

  const filteredProducts = allProducts.filter((p) => {
    if (selectedCategory === 'All Merch') return true;
    return p.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <MainLayout>
      <Head title="Merch Store" />
      {/* 1. HERO TITLE SECTION */}
      <section className="bg-slate-50 py-12 lg:py-14 border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0091ff] font-bold text-xs uppercase tracking-wider border border-blue-100">
              <ShoppingBag className="w-3.5 h-3.5 text-[#0091ff]" />
              <span>Merch Store</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              <span className="text-[#0091ff]">BibiPew’s</span> Merchandise
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Rep the BibiPew brand with our exclusive penguin merchandise!
            </p>
          </ScrollReveal>

          {cart.length > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0091ff] text-white font-bold text-xs animate-bounce shadow-md">
              <Check className="w-4 h-4" />
              <span>{cart.length} item(s) added to cart!</span>
            </div>
          )}
        </div>
      </section>

      {/* 2. CATEGORY FILTER PILL BAR (CENTERED) */}
      <div className="bg-[#f8fafc] py-4 border-b border-slate-200/60 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2.5 overflow-x-auto scrollbar-none py-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
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

      {/* 3. PRODUCTS GRID */}
      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg font-bold">No products found in this category.</p>
              <button
                onClick={() => handleCategoryChange('All Merch')}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0091ff] text-white font-bold text-sm shadow-md"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div
              key={`${selectedCategory}-page-${currentPage}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {currentProducts.map((product, idx) => {
                const inCart = cart.some((c) => c.id === product.id);
                return (
                  <ScrollReveal
                    key={`${selectedCategory}-${product.id}`}
                    delay={(idx % 4) * 80}
                  >
                    <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1.5 h-full">
                      <div className="space-y-4">
                        {/* Visual Mascot Product Card */}
                        <div className="relative h-48 bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-4 overflow-hidden">
                          {!product.available && (
                            <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 px-3 py-1 rounded-full bg-slate-900/90 text-white font-bold text-xs shadow-md flex items-center gap-1.5 z-20 border border-white/10 backdrop-blur-xs">
                              <Bell className="w-3 h-3 text-sky-400" />
                              <span>Coming Soon</span>
                            </div>
                          )}
                          <div className="pt-5 z-10">
                            <PenguinMascot pose={product.pose} className="w-30 h-30 sm:w-32 sm:h-32 group-hover:scale-105 transition-transform" />
                          </div>
                        </div>

                        <div>
                          <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                            {product.name}
                          </h3>
                          <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium">
                            {product.desc}
                          </p>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="font-extrabold text-xl text-slate-900">${product.price}</span>
                          <span className="text-xs text-slate-500 font-semibold ml-1">{product.currency}</span>
                        </div>

                        {product.available ? (
                          <button
                            onClick={() => addToCart(product)}
                            className={`px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 ${
                              inCart
                                ? 'bg-slate-900 text-white'
                                : 'bg-[#0091ff] hover:bg-sky-600 text-white shadow-md'
                            }`}
                          >
                            {inCart ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                            <span>{inCart ? 'Added' : 'Add to Cart'}</span>
                          </button>
                        ) : (
                          <button
                            disabled
                            className="px-4 py-2 rounded-full bg-slate-200 text-slate-500 font-bold text-xs cursor-not-allowed"
                          >
                            Notify Me
                          </button>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}

          {/* 4. NUMBERED PAGINATION CONTROL */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center gap-3 mt-14">
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    currentPage === 1
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/60'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-xs'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full text-xs font-extrabold transition-all ${
                      currentPage === page
                        ? 'bg-[#0091ff] text-white shadow-md scale-105'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    currentPage === totalPages
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/60'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-xs'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-slate-400 text-xs font-medium">
                Page {currentPage} of {totalPages} ({filteredProducts.length} total items)
              </p>
            </div>
          )}

          {/* COMING SOON BANNER - FULL CONTAINER WIDTH */}
          <ScrollReveal animation="scale">
            <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center w-full space-y-6 shadow-xl">
              <PenguinMascot pose="cool" className="w-24 h-24 mx-auto" />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">More Merch Coming Soon!</h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                We're working on exciting new BibiPew merchandise. Stay tuned for limited edition drops and exclusive collections!
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </MainLayout>
  );
}
