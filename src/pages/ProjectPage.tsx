import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface ProjectPageProps {
  onNavigate: (page: PageId) => void;
  onOpenZoom: (url: string, title: string, subtitle?: string) => void;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ onNavigate, onOpenZoom }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Honed stone');

  const heroImage = '/src/assets/images/project_villa_alam_sari_1791964970877.jpg';
  const interiorImage = '/src/assets/images/hero_interior_panels_1791964969336.jpg';
  const flutedTexture = '/src/assets/images/texture_fluted_panel_nogal_1791964971357.jpg';
  const mockupImage = '/src/assets/images/room_mockup_living_wall_1791964971936.jpg';

  const materials = [
    { name: 'Honed stone', colorHex: '#D5CEC5', desc: 'Pale natural limestone grounding floors and hearth surrounds with calm matte density.' },
    { name: 'Warm timber', colorHex: '#8C6E52', desc: 'HISTRONG Bamboo Fibre fluted wall panels in Nogal tone, adding tactile acoustic warmth.' },
    { name: 'Muted brass', colorHex: '#A68F5E', desc: 'Refined architectural hairline reveal trims defining junctions with quiet precision.' },
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#1E2226]">
      {/* Breadcrumb & Header */}
      <section className="pt-10 pb-12 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-xs text-[#8E9296] mb-6 font-mono">
            <button onClick={() => onNavigate('home')} className="hover:text-[#1E2226]">
              Home
            </button>
            <span className="mx-2">/</span>
            <span className="text-[#6A6D71]">Projects</span>
            <span className="mx-2">/</span>
            <span className="text-[#1E2226]">Luxury Villa</span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
                ARCHITECTURE / RESIDENTIAL
              </span>
              <h1 className="font-editorial text-5xl lg:text-6xl font-normal text-[#1E2226]">
                Villa, Alam Sari
              </h1>
            </div>
            <p className="font-editorial text-xl italic text-[#52565B] max-w-sm text-right">
              A quiet expression of light, material and modern living.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image & Ticker */}
      <section className="border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8 pt-6 pb-12">
          <div
            onClick={() => onOpenZoom(heroImage, 'Villa, Alam Sari', 'The residence — a dialogue between open views and sheltered spaces')}
            className="overflow-hidden bg-[#EBE9E1] cursor-zoom-in group shadow-xs mb-4"
          >
            <img
              src={heroImage}
              alt="Villa, Alam Sari exterior"
              className="w-full h-[580px] object-cover group-hover:scale-101 transition-transform duration-700"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-[#6A6D71] pt-3">
            <span>The residence — a dialogue between open views and sheltered spaces.</span>
            <a
              href="#project-details"
              className="hover:text-[#1E2226] transition-colors flex items-center gap-1 font-semibold uppercase text-[11px]"
            >
              <span>DISCOVER THE PROJECT</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* THE PROJECT Overview */}
      <section id="project-details" className="py-20 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 mb-16">
            <div className="col-span-5">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
                THE PROJECT
              </span>
              <h2 className="font-editorial text-4xl font-normal text-[#1E2226] leading-tight">
                Space to slow down.
                <br />
                Room to live.
              </h2>
            </div>

            <div className="col-span-7 space-y-4 text-sm text-[#52565B] leading-relaxed">
              <p>
                Luxury Villa explores a simple idea: a home can feel generous without being imposing. Open living spaces meet intimate retreats, with daylight giving each room its own character.
              </p>
              <p>
                A restrained palette brings architecture and interiors together. Stone, timber and softly textured surfaces create continuity, allowing the experience of living to take centre stage.
              </p>
            </div>
          </div>

          {/* 3 Specs Blocks */}
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[#E6E5E0]">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8E9296] block mb-1">
                PROJECT TYPE
              </span>
              <p className="font-editorial text-xl text-[#1E2226]">Residential villa</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8E9296] block mb-1">
                DISCIPLINES
              </span>
              <p className="font-editorial text-xl text-[#1E2226]">Architecture & interior design</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8E9296] block mb-1">
                DESIGN LANGUAGE
              </span>
              <p className="font-editorial text-xl text-[#1E2226]">Quiet forms. Natural textures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE DESIGN APPROACH */}
      <section className="py-20 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-start">
            <div className="col-span-5">
              <div
                onClick={() => onOpenZoom(flutedTexture, 'The Design Approach', 'Light and texture bring depth')}
                className="overflow-hidden bg-[#EBE9E1] cursor-zoom-in group shadow-xs mb-3"
              >
                <img
                  src={flutedTexture}
                  alt="Stairs and wall texture"
                  className="w-full h-[520px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] text-[#8E9296] italic">
                Light and texture bring depth to a simple architectural gesture.
              </p>
            </div>

            <div className="col-span-7 space-y-8 pl-4">
              <div>
                <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
                  THE DESIGN APPROACH
                </span>
                <h2 className="font-editorial text-4xl font-normal text-[#1E2226] mb-4">
                  Less noise.
                  <br />
                  More feeling.
                </h2>
                <p className="text-sm text-[#52565B] leading-relaxed">
                  Rather than a collection of statements, the villa is conceived as a sequence of connected experiences. Proportion sets the rhythm; materials hold it together.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#E6E5E0]">
                <div>
                  <h3 className="font-editorial text-xl font-bold text-[#1E2226] mb-1">
                    Light as a material
                  </h3>
                  <p className="text-xs text-[#52565B] leading-relaxed">
                    Deep reveals and generous openings soften the daylight, bringing a changing rhythm to otherwise quiet rooms.
                  </p>
                </div>

                <div>
                  <h3 className="font-editorial text-xl font-bold text-[#1E2226] mb-1">
                    A continuous living landscape
                  </h3>
                  <p className="text-xs text-[#52565B] leading-relaxed">
                    Shared spaces flow towards the terrace, while more private rooms offer a sense of retreat.
                  </p>
                </div>

                <div>
                  <h3 className="font-editorial text-xl font-bold text-[#1E2226] mb-1">
                    Warmth in the details
                  </h3>
                  <p className="text-xs text-[#52565B] leading-relaxed">
                    Timber grain, honed stone and muted metal accents give simple forms a tactile, human quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation Footer */}
          <div className="mt-16 pt-8 border-t border-[#E6E5E0] flex items-center justify-between text-xs">
            <button
              onClick={() => onNavigate('home')}
              className="text-[#52565B] hover:text-[#1E2226] font-semibold uppercase flex items-center gap-1.5"
            >
              <span>BACK TO ALL PROJECTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('project')}
              className="text-[#1E2226] hover:text-[#9E8058] font-semibold uppercase flex items-center gap-2 group"
            >
              <div>
                <span className="text-[10px] text-[#8E9296] block text-right font-normal">
                  NEXT PROJECT
                </span>
                <span className="font-editorial text-base normal-case">
                  Town Villa, Taman Siaga
                </span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* LET'S TALK BANNER */}
      <section className="py-16 bg-[#F4F3EE] border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-1">
              LET S TALK
            </span>
            <h3 className="font-editorial text-3xl font-normal text-[#1E2226] mb-2">
              Your space. Your next chapter.
            </h3>
            <p className="text-xs text-[#52565B]">
              Have a project in mind? Tell us what you imagine, and lets explore it together.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#9E8058] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors flex items-center gap-2"
          >
            <span>INQUIRE ABOUT A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* INSIDE & OUT Gallery */}
      <section className="py-20 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-10">
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
              INSIDE & OUT
            </span>
            <h2 className="font-editorial text-4xl font-normal text-[#1E2226] mb-3">
              A home, in its details.
            </h2>
            <p className="text-sm text-[#52565B]">
              From shared rooms to sheltered edges, a consistent language of warmth and restraint.
            </p>
          </div>

          <div className="space-y-6">
            <div
              onClick={() => onOpenZoom(interiorImage, 'The Living Space', 'Villa, Alam Sari')}
              className="overflow-hidden bg-[#EAE8E0] cursor-zoom-in group shadow-xs"
            >
              <img
                src={interiorImage}
                alt="The Living Space"
                className="w-full h-[480px] object-cover group-hover:scale-101 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-[#6A6D71] pb-10 border-b border-[#E6E5E0]">
              <span className="font-bold text-[#1E2226] uppercase text-[11px]">THE LIVING SPACE</span>
              <span>Soft furnishings and layered light balance the precision of the architecture.</span>
            </div>

            <div
              onClick={() => onOpenZoom(mockupImage, 'The Terrace & Wall Integration', 'Villa, Alam Sari')}
              className="overflow-hidden bg-[#EAE8E0] cursor-zoom-in group shadow-xs"
            >
              <img
                src={mockupImage}
                alt="The Terrace"
                className="w-full h-[480px] object-cover group-hover:scale-101 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-[#6A6D71]">
              The terrace — an extension of the interior, framed by the landscape.
            </p>
          </div>
        </div>
      </section>

      {/* A TACTILE PALETTE */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-5 space-y-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block">
                A TACTILE PALETTE
              </span>
              <h2 className="font-editorial text-4xl font-normal text-[#1E2226]">
                Natural warmth.
                <br />
                Lasting simplicity.
              </h2>
              <p className="text-sm text-[#52565B] leading-relaxed">
                Pale stone grounds the spaces. Timber adds warmth. A fine line of muted metal brings definition without excess.
              </p>
            </div>

            <div className="col-span-7">
              <div className="grid grid-cols-3 gap-6">
                {materials.map((mat) => (
                  <div
                    key={mat.name}
                    onClick={() => setSelectedMaterial(mat.name)}
                    className={`p-4 border transition-all cursor-pointer ${
                      selectedMaterial === mat.name
                        ? 'border-[#9E8058] bg-[#FAF9F5] shadow-xs'
                        : 'border-[#E6E5E0] bg-white hover:border-[#C0BDAF]'
                    }`}
                  >
                    <div
                      className="w-full h-24 mb-3 rounded-xs shadow-inner"
                      style={{ backgroundColor: mat.colorHex }}
                    ></div>
                    <h4 className="font-editorial text-base font-bold text-[#1E2226]">
                      {mat.name}
                    </h4>
                    <p className="text-[11px] text-[#6A6D71] mt-1 leading-snug">
                      {mat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
