import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CORE_VALUES } from '../data/mockData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenZoom: (url: string, title: string, subtitle?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenZoom }) => {
  const heroImage = '/src/assets/images/hero_interior_panels_1791964969336.jpg';
  const projectImage = '/src/assets/images/project_villa_alam_sari_1791964970877.jpg';
  const flutedTexture = '/src/assets/images/texture_fluted_panel_nogal_1791964971357.jpg';

  return (
    <div className="bg-[#FAF9F5] text-[#1E2226]">
      {/* Header & Breadcrumb */}
      <section className="pt-10 pb-16 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-xs text-[#8E9296] mb-8 font-mono">
            <button onClick={() => onNavigate('home')} className="hover:text-[#1E2226]">
              Home
            </button>
            <span className="mx-2">/</span>
            <span className="text-[#1E2226]">About</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-7">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
                GET TO KNOW HISTRONG
              </span>
              <h1 className="font-editorial text-5xl lg:text-6xl font-normal text-[#1E2226]">
                About HiStrong
              </h1>
            </div>
            <div className="col-span-5">
              <p className="text-sm text-[#52565B] leading-relaxed max-w-md">
                Eco-friendly materials. Thoughtful interiors. A greener way to shape the spaces we call home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Top Bamboo Fibre Panel Brand in Asia */}
      <section className="py-20 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-5">
              <div
                onClick={() => onOpenZoom(heroImage, 'Top Bamboo Fibre Panel Brand in Asia', 'HISTRONG interior showcase')}
                className="overflow-hidden bg-[#EBE9E1] cursor-zoom-in group shadow-xs"
              >
                <img
                  src={heroImage}
                  alt="HISTRONG interior living"
                  className="w-full h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="col-span-7 space-y-6">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block">
                DESIGNED FOR BETTER LIVING
              </span>
              <h2 className="font-editorial text-4xl font-normal text-[#1E2226] leading-tight">
                Top Bamboo Fibre
                <br />
                Panel Brand in Asia
              </h2>
              <p className="text-sm text-[#52565B] leading-relaxed">
                HISTRONG, an internationally renowned brand of eco-friendly interior wall and ceiling panel, is one of the top Bamboo Fibre Panel brand in Asia. We are the No. 1 supplier of quality materials for interior wall, ceiling and flooring. We specialize in solving your interior design and renovation problems, with an aim to revolutionize the Malaysian building industry with green innovation and modern technology.
              </p>

              <blockquote className="py-4 border-y border-[#E6E5E0] font-editorial text-xl italic text-[#1E2226]">
                “Home is simple to renovate over a nimble glimpse.”
              </blockquote>

              <p className="text-xs text-[#6A6D71] leading-relaxed">
                Using Modular Installation, the renovation period can be shortened, thus saving time as well as labour cost. Using non-toxic and eco-friendly materials, the post-renovation property is formaldehyde-free, which is safe for you and also the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Love the earth like how you love your home */}
      <section className="py-20 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-7 space-y-6 pr-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block">
                A HOME IN HARMONY
              </span>
              <h2 className="font-editorial text-4xl font-normal text-[#1E2226] leading-tight">
                Love the earth like
                <br />
                how you love your home.
              </h2>
              <p className="text-sm text-[#52565B] leading-relaxed">
                Renovation is all about bringing new life to your home, both the renovated one and also the home of all humans, the Earth. Therefore, we proudly introduce to you Malaysia’s No. 1 HISTRONG Bamboo Fibre Panel (BFP), which is made of natural materials like bamboo, wood and fibre. This is a recyclable alternative to traditional renovation material. Practise go green in your next renovation and save some green ringgit notes!
              </p>
              <p className="text-sm text-[#52565B] leading-relaxed">
                Ever imagined how your dream home looks like? Our designs are of different themes and styles and they can be customized according to your preference. Besides, green renovation is a new option to satisfy your fantasy of a stylish home. HISTRONG Bamboo FibrePanel is the best solution that is both fashionable and eco-friendly. You deserve to stay in a healthy home.
              </p>
              <p className="text-xs text-[#8E9296] font-medium pt-2">
                Let HISTRONG be your first choice in getting customized interior design, eco-friendly renovation materials and built-to-order integrated ceiling and wall panels.
              </p>
            </div>

            <div className="col-span-5">
              <div
                onClick={() => onOpenZoom(flutedTexture, 'Considered Materials', 'A home in harmony')}
                className="overflow-hidden bg-[#EBE9E1] cursor-zoom-in group shadow-xs"
              >
                <img
                  src={flutedTexture}
                  alt="Eco-friendly bamboo material"
                  className="w-full h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] text-[#8E9296] mt-3 italic text-center">
                Considered materials for a stylish, healthy home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vision & Mission */}
      <section className="py-20 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-5">
              <div className="overflow-hidden bg-[#EBE9E1] shadow-xs">
                <img
                  src={projectImage}
                  alt="Our Vision and Mission"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>

            <div className="col-span-7 space-y-10">
              <div>
                <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
                  WHAT DRIVES US
                </span>
                <h3 className="font-editorial text-3xl font-normal text-[#1E2226] mb-3">
                  Our vision
                </h3>
                <p className="text-sm text-[#52565B] leading-relaxed">
                  To revolutionize the interior design industry with eco-friendly practices.
                </p>
              </div>

              <div className="pt-8 border-t border-[#E6E5E0]">
                <h3 className="font-editorial text-3xl font-normal text-[#1E2226] mb-3">
                  Our mission
                </h3>
                <p className="text-sm text-[#52565B] leading-relaxed">
                  To inspire the industry and the communities in which we operate; towards environmental sustainability by implementing eco friendly solutions at every stage of our business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The HiStrong Way / Core Values */}
      <section className="py-20 bg-[#1A1D20] text-white border-b border-[#2C3136]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-14">
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
              THE HISTRONG WAY
            </span>
            <h2 className="font-editorial text-4xl font-normal text-white">
              HiStrong’s core values
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {CORE_VALUES.map((val) => (
              <div
                key={val.letter}
                className="p-6 bg-[#23272B] border border-white/10 hover:border-[#9E8058] transition-colors"
              >
                <span className="font-editorial text-4xl font-bold text-[#9E8058] block mb-2">
                  {val.letter}
                </span>
                <h4 className="font-medium text-base text-white mb-2">{val.word}</h4>
                <p className="text-xs text-[#9EA3A8] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Philosophy & Team */}
      <section className="py-20 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-6 space-y-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block">
                HISTRONG’S PHILOSOPHY
              </span>
              <h2 className="font-editorial text-4xl lg:text-5xl font-normal text-[#1E2226] leading-tight">
                Think Efficiently
                <br />
                Act Meticulously
              </h2>
              <p className="text-xs font-mono uppercase tracking-widest text-[#9E8058] pt-4">
                T E A M
              </p>
            </div>

            <div className="col-span-6">
              <div className="overflow-hidden bg-[#EAE8E0] shadow-sm">
                <img
                  src={heroImage}
                  alt="HiStrong Team and Studio"
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Bottom Call to Action Banner */}
      <section className="py-16 bg-[#F4F3EE]">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-1">
              START A CONVERSATION
            </span>
            <h3 className="font-editorial text-2xl font-normal text-[#1E2226]">
              Bring your vision of a greener home to life.
            </h3>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#9E8058] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors flex items-center gap-2"
          >
            <span>Contact HiStrong</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
