import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ADVANTAGES, PRODUCTS, BLOGS } from '../data/mockData';
import { PageId, ProductCategory } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId, category?: ProductCategory) => void;
  onOpenZoom: (url: string, title: string, subtitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenZoom }) => {
  const [activeProjectFilter, setActiveProjectFilter] = useState('All Work');
  const [selectedAdvantage, setSelectedAdvantage] = useState<number | null>(null);

  // Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential, renovation, or new build',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const heroImage = '/src/assets/images/hero_interior_panels_1791964969336.jpg';
  const projectImage = '/src/assets/images/project_villa_alam_sari_1791964970877.jpg';
  const flutedTexture = '/src/assets/images/texture_fluted_panel_nogal_1791964971357.jpg';

  return (
    <div className="bg-[#FAF9F5] text-[#1E2226]">
      {/* 1. HERO SECTION (Page 1) */}
      <section className="relative pt-12 pb-16 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-8 items-start mb-8">
            <div className="col-span-6 pr-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-4">
                BAMBOO FIBRE INTERIOR PANELS
              </span>
              <h1 className="font-editorial text-5xl lg:text-6xl font-normal leading-[1.12] text-[#1E2226] mb-6">
                A natural feeling.
                <br />
                A considered finish.
              </h1>
              <p className="text-base text-[#52565B] max-w-md leading-relaxed mb-8">
                Bring texture, warmth and quiet character to your walls and ceilings.
              </p>
              <button
                onClick={() => onNavigate('product')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E8058] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#866b47] transition-colors"
              >
                <span>Explore the material</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="col-span-6">
              <div
                onClick={() => onOpenZoom(heroImage, 'Bamboo Fibre Interior Panels', 'Modular living space installation')}
                className="relative overflow-hidden cursor-zoom-in group shadow-sm bg-[#EBE9E1]"
              >
                <img
                  src={heroImage}
                  alt="Modern living room with bamboo fibre wall panels"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2.5 py-1 tracking-wider uppercase backdrop-blur-xs">
                  Design Possibilities
                </div>
              </div>
            </div>
          </div>

          {/* Sub-hero ticker */}
          <div className="pt-6 border-t border-[#E6E5E0] flex items-center justify-between text-xs tracking-wider text-[#6A6D71]">
            <span className="font-medium text-[#1E2226]">
              WALL PANELS / CEILING PANELS / FLUTED FINISHES
            </span>
            <a
              href="#who-we-are"
              className="hover:text-[#1E2226] transition-colors flex items-center gap-1 text-[11px] uppercase"
            >
              <span>Discover the possibilities</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Page 1) */}
      <section id="who-we-are" className="py-20 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-5 relative">
              <div className="relative bg-[#23272B] p-2 overflow-hidden shadow-md">
                <img
                  src={projectImage}
                  alt="Architecture and materials"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/95 p-4 shadow-lg text-center min-w-[120px]">
                  <span className="font-editorial text-4xl font-bold text-[#1E2226] block">
                    10
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9E8058]">
                    Years Experience
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-7 pl-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
                WHO WE ARE
              </span>
              <h2 className="font-editorial text-4xl font-normal text-[#1E2226] mb-6 leading-tight">
                Best Designers
                <br />
                Architectures for You.
              </h2>
              <p className="text-sm text-[#52565B] leading-relaxed mb-10 max-w-xl">
                We create thoughtful architectural spaces with a focus on material, proportion and the everyday experience of living. Every project is shaped by a balance of creativity and precision.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E6E5E0]">
                <div>
                  <p className="font-editorial text-3xl font-bold text-[#1E2226]">8++</p>
                  <p className="text-[11px] uppercase tracking-wider text-[#6A6D71] mt-1">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <p className="font-editorial text-3xl font-bold text-[#1E2226]">5++</p>
                  <p className="text-[11px] uppercase tracking-wider text-[#6A6D71] mt-1">
                    Happy Clients
                  </p>
                </div>
                <div>
                  <p className="font-editorial text-3xl font-bold text-[#1E2226]">17</p>
                  <p className="text-[11px] uppercase tracking-wider text-[#6A6D71] mt-1">
                    Awards Won
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 9 ADVANTAGES (Page 1) */}
      <section className="py-20 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
                9 ADVANTAGES
              </span>
              <h2 className="font-editorial text-3xl lg:text-4xl font-normal text-[#1E2226]">
                More than a beautiful surface.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="text-xs uppercase tracking-wider text-[#1E2226] font-medium hover:text-[#9E8058] transition-colors flex items-center gap-1.5"
            >
              <span>01–09 / MORE ADVANTAGES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {ADVANTAGES.map((adv, idx) => (
              <div
                key={adv.num}
                className="p-7 border border-[#E6E5E0] bg-[#FAF9F5] hover:border-[#9E8058] hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="font-editorial text-3xl font-bold text-[#9E8058]/80 group-hover:text-[#9E8058] transition-colors block mb-4">
                    {adv.num}
                  </span>
                  <h3 className="font-editorial text-lg font-bold text-[#1E2226] mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-[#52565B] leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-[#EBE9E1]">
                  <button
                    onClick={() => setSelectedAdvantage(selectedAdvantage === idx ? null : idx)}
                    className="text-[11px] font-semibold tracking-wider text-[#9E8058] hover:text-[#7d6440] uppercase flex items-center gap-1"
                  >
                    <span>{selectedAdvantage === idx ? 'Show Less' : 'Read More'}</span>
                    <span>→</span>
                  </button>
                  {selectedAdvantage === idx && (
                    <div className="mt-3 p-3 bg-white border border-[#E6E5E0] text-[11px] text-[#52565B] leading-relaxed">
                      Rigorous testing per Malaysian SIRIM standards and ENF environmental certifications guarantee performance across residential and high-density commercial specifications.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IN YOUR SPACE (Page 1) */}
      <section className="py-20 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-12">
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
              IN YOUR SPACE
            </span>
            <h2 className="font-editorial text-4xl font-normal text-[#1E2226] mb-3">
              From the walls
              <br />
              to the space above.
            </h2>
            <p className="text-sm text-[#52565B] max-w-xl">
              Explore two applications, one considered material palette. Choose a focal point or create a continuous expression throughout the room.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {/* 01 Walls with character */}
            <div className="space-y-4">
              <div
                onClick={() => onOpenZoom(flutedTexture, '01 Walls with character', 'Living spaces · Feature walls · Bedrooms')}
                className="overflow-hidden bg-[#EAE8E0] cursor-zoom-in group"
              >
                <img
                  src={flutedTexture}
                  alt="Walls with character"
                  className="w-full h-[320px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="text-xs text-[#8E9296] uppercase tracking-wider">
                Living spaces · Feature walls · Bedrooms
              </div>
              <h3 className="font-editorial text-2xl font-normal text-[#1E2226]">
                01 Walls with character
              </h3>
              <p className="text-xs text-[#52565B] leading-relaxed">
                Frame a room with a smooth panelled surface, or introduce depth with a fluted accent. Let the finish shape the mood of your interior.
              </p>
              <p className="text-[11px] text-[#9EA3A8] italic">
                Interior imagery illustrates design possibilities.
              </p>
            </div>

            {/* 02 Ceilings, considered */}
            <div className="space-y-4">
              <div
                onClick={() => onOpenZoom(heroImage, '02 Ceilings, considered', 'Living spaces · Bathrooms · Continuous surfaces')}
                className="overflow-hidden bg-[#EAE8E0] cursor-zoom-in group"
              >
                <img
                  src={heroImage}
                  alt="Ceilings, considered"
                  className="w-full h-[320px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="text-xs text-[#8E9296] uppercase tracking-wider">
                Living spaces · Bathrooms · Continuous surfaces
              </div>
              <h3 className="font-editorial text-2xl font-normal text-[#1E2226]">
                02 Ceilings, considered
              </h3>
              <p className="text-xs text-[#52565B] leading-relaxed">
                Carry the material language overhead. Bamboo fibre panels are suitable for high humidity spaces, including bathroom ceilings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINISHES & CUSTOMIZATION (Page 1) */}
      <section className="py-20 bg-[#23272B] text-white border-b border-[#32373D]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-14 max-w-xl">
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
              FINISHES & CUSTOMIZATION
            </span>
            <h2 className="font-editorial text-4xl font-normal text-white mb-3">
              One material.
              <br />
              Your own expression.
            </h2>
            <p className="text-sm text-[#A0A5AA] leading-relaxed">
              Think in colour, texture and proportion. Explore the finish selection, printing possibilities and fluted aesthetics to find a direction for your space.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-[#1A1D20] border border-white/10 space-y-3">
              <div className="w-full h-40 bg-[#B28E66]/30 overflow-hidden mb-4">
                <img
                  src={flutedTexture}
                  alt="Explore the finish"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl font-normal text-white">
                Explore the finish
              </h3>
              <p className="text-xs text-[#A0A5AA] leading-relaxed">
                Over 100 finishes to consider for your interior.
              </p>
            </div>

            <div className="p-6 bg-[#1A1D20] border border-white/10 space-y-3">
              <div className="w-full h-40 bg-[#604838]/40 overflow-hidden mb-4">
                <img
                  src={heroImage}
                  alt="Make it personal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl font-normal text-white">
                Make it personal
              </h3>
              <p className="text-xs text-[#A0A5AA] leading-relaxed">
                Customizable 3D/5D printing for your design direction.
              </p>
            </div>

            <div className="p-6 bg-[#1A1D20] border border-white/10 space-y-3">
              <div className="w-full h-40 bg-[#303438] overflow-hidden mb-4">
                <img
                  src={flutedTexture}
                  alt="Introduce a rhythm"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl font-normal text-white">
                Introduce a rhythm
              </h3>
              <p className="text-xs text-[#A0A5AA] leading-relaxed">
                Fluted aesthetics for a contemporary expression.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-10 text-xs">
              <div>
                <span className="font-editorial text-xl font-bold text-white block">3m</span>
                <span className="text-[#878D94] uppercase tracking-wider text-[10px]">
                  Standard lengths
                </span>
              </div>
              <div className="h-6 w-px bg-white/20"></div>
              <div>
                <span className="font-editorial text-xl font-bold text-white block">Up to 6m</span>
                <span className="text-[#878D94] uppercase tracking-wider text-[10px]">
                  Expandable sizes
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-xs text-[#878D94] hidden md:inline">
                Finish imagery is illustrative. Discuss the available selection for your project.
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-2.5 bg-[#9E8058] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors flex items-center gap-2"
              >
                <span>Discuss your finish</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SELECTED PROJECTS (Page 1) */}
      <section className="py-20 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
                SELECTED PROJECTS
              </span>
              <h2 className="font-editorial text-4xl font-normal text-[#1E2226]">
                Built Environments
              </h2>
            </div>

            {/* Filter tags */}
            <div className="flex items-center gap-4 text-xs">
              {['All Work', 'Residential', 'Interiors', 'Commercial', 'Cultural'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectFilter(cat)}
                  className={`py-1 transition-colors ${
                    activeProjectFilter === cat
                      ? 'text-[#1E2226] font-semibold border-b border-[#1E2226]'
                      : 'text-[#6A6D71] hover:text-[#1E2226]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Card 1: Villa, Alam Sari */}
            <div
              onClick={() => onNavigate('project')}
              className="group cursor-pointer space-y-3"
            >
              <div className="overflow-hidden bg-[#EBE9E1]">
                <img
                  src={projectImage}
                  alt="Villa, Alam Sari"
                  className="w-full h-[260px] object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#1E2226]">
                    Villa, Alam Sari
                  </h4>
                  <p className="text-xs text-[#6A6D71]">Residential villa · Selangor</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9E8058] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 2: Town Villa, Taman Siaga */}
            <div
              onClick={() => onNavigate('project')}
              className="group cursor-pointer space-y-3"
            >
              <div className="overflow-hidden bg-[#EBE9E1]">
                <img
                  src={heroImage}
                  alt="Town Villa, Taman Siaga"
                  className="w-full h-[260px] object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#1E2226]">
                    Town Villa, Taman Siaga
                  </h4>
                  <p className="text-xs text-[#6A6D71]">Interior Renovation · Kuala Lumpur</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9E8058] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 3: Urban Gallery */}
            <div
              onClick={() => onNavigate('project')}
              className="group cursor-pointer space-y-3"
            >
              <div className="overflow-hidden bg-[#EBE9E1]">
                <img
                  src={flutedTexture}
                  alt="Urban Commercial Pavilion"
                  className="w-full h-[260px] object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#1E2226]">
                    Commercial Pavilion
                  </h4>
                  <p className="text-xs text-[#6A6D71]">Commercial & Hospitality · Penang</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9E8058] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR COLLECTION / NEW COLLECTION (Page 1) */}
      <section className="py-20 bg-[#1E2226] text-white border-b border-[#2C3136]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-10">
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
              OUR COLLECTION
            </span>
            <h2 className="font-editorial text-4xl font-normal text-white mb-6">
              New Collection
            </h2>

            {/* Category tabs */}
            <div className="flex items-center gap-6 text-xs border-b border-white/10 pb-4">
              <button
                onClick={() => onNavigate('product', 'bfp')}
                className="text-white font-semibold hover:text-[#9E8058] transition-colors"
              >
                HISTRONG BAMBOO FIBREPANEL (BFP)
              </button>
              <button
                onClick={() => onNavigate('product', 'fluted')}
                className="text-[#8E9296] hover:text-white transition-colors"
              >
                HISTRONG BAMBOO FIBER FLUTED PANEL 海创竹木格栅板
              </button>
              <button
                onClick={() => onNavigate('product', 'ceiling')}
                className="text-[#8E9296] hover:text-white transition-colors"
              >
                HISTRONG INTEGRATED ALUMINIUM CEILING
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {PRODUCTS.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                onClick={() => onNavigate('product-detail')}
                className="group cursor-pointer bg-[#262B30] border border-white/10 p-5 space-y-4 hover:border-[#9E8058] transition-all"
              >
                <div className="relative overflow-hidden bg-[#1A1D20]">
                  <img
                    src={flutedTexture}
                    alt={prod.code}
                    className="w-full h-[260px] object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {prod.isNew && (
                    <span className="absolute top-3 left-3 bg-[#9E8058] text-white text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wider">
                      NEW
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] text-[#A0A5AA] font-mono block">
                    {prod.code}
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <h4 className="font-editorial text-lg text-white font-normal">
                      {prod.nameZh} {prod.nameEn}
                    </h4>
                    <span className="font-mono text-sm font-semibold text-[#9E8058]">
                      RM{prod.price?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('product')}
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#1E2226] transition-colors"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS / OUR BLOGS (Page 1) */}
      <section className="py-20 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-12">
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
              LATEST NEWS
            </span>
            <h2 className="font-editorial text-4xl font-normal text-[#1E2226]">
              Our Blogs
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <div
                key={blog.id}
                onClick={() => onNavigate('blog')}
                className="border border-[#E6E5E0] bg-[#FAF9F5] p-5 space-y-4 hover:border-[#9E8058] hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 bg-[#EBE9E1] overflow-hidden mb-4">
                    <img
                      src={heroImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#6A6D71] mb-2 font-mono">
                    <span>{blog.author}</span>
                    <span>·</span>
                    <span>{blog.date}</span>
                  </div>
                  <h4 className="font-editorial text-base font-bold text-[#1E2226] leading-snug group-hover:text-[#9E8058] transition-colors">
                    {blog.title}
                  </h4>
                </div>

                <div className="pt-4 border-t border-[#EBE9E1] flex items-center justify-between text-xs text-[#9E8058] font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. START A CONVERSATION & MAP (Page 1) */}
      <section className="py-20 bg-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Form */}
            <div className="col-span-6 bg-white p-8 border border-[#E6E5E0] shadow-xs">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
                START A CONVERSATION
              </span>
              <h2 className="font-editorial text-3xl font-normal text-[#1E2226] mb-6">
                Lets discuss your project
              </h2>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#1E2226]">
                    Inquiry Submitted
                  </h4>
                  <p className="text-xs text-[#52565B] max-w-sm mx-auto">
                    Thank you! We have received your project details and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', projectType: '', message: '' });
                    }}
                    className="text-xs text-[#9E8058] underline mt-3 inline-block"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">Full name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">Email address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@studio.com"
                      className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">Project type</label>
                    <input
                      type="text"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      placeholder="Residential, renovation, or new build"
                      className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">Tell us about your project</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your site, goals, and timeline"
                      className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#9E8058] text-white font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>SEND INQUIRY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Map representation matching Page 1 */}
            <div className="col-span-6 bg-white p-6 border border-[#E6E5E0] shadow-xs">
              <div className="relative h-[380px] bg-[#E8EDE6] overflow-hidden border border-[#DCDAD2] flex flex-col justify-between p-6">
                {/* Simulated stylized architectural map overlay */}
                <div className="space-y-2">
                  <div className="inline-block bg-white/90 backdrop-blur-xs px-3 py-1.5 text-[11px] font-semibold text-[#1E2226] border border-[#DCDAD2]">
                    BANDAR · TAMAN BUKIT SERDANG
                  </div>
                  <p className="text-xs text-[#52565B]">
                    Seri Kembangan, Selangor, Malaysia
                  </p>
                </div>

                {/* HQ Location pin card */}
                <div className="bg-white/95 backdrop-blur-sm p-4 border border-[#E6E5E0] shadow-md max-w-sm">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse"></span>
                    <span>HISTRONG Design (HQ @ BS7)</span>
                  </div>
                  <p className="text-[11px] text-[#52565B] leading-tight">
                    No.8, Jalan BS 7/1C, Taman Perindustrian Bukit Serdang, Seri Kembangan
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs font-semibold text-[#9E8058]">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>Branch Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-[10px] text-[#8E9296] text-right font-mono">
                  GPS: 3.0182° N, 101.7015° E
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
