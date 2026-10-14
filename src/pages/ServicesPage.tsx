import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenZoom: (url: string, title: string, subtitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenZoom }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    placement: 'walls',
    details: '',
  });

  const heroImage = '/src/assets/images/hero_interior_panels_1791964969336.jpg';
  const flutedTexture = '/src/assets/images/texture_fluted_panel_nogal_1791964971357.jpg';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F5] text-[#1E2226]">
      {/* Top Bar / Breadcrumb */}
      <section className="pt-8 pb-6 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between text-xs text-[#8E9296]">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#1E2226] flex items-center gap-1.5 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All services</span>
          </button>
          <span>Services / Bamboo fibre panels</span>
        </div>
      </section>

      {/* 01 WHAT WE DO */}
      <section className="py-20 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-start">
            <div className="col-span-6 pr-6 space-y-6">
              <span className="font-editorial text-5xl font-bold text-[#9E8058]/80 block">
                01
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block">
                WHAT WE DO
              </span>
              <h1 className="font-editorial text-5xl font-normal text-[#1E2226] leading-tight">
                Leading Bamboo
                <br />
                Fibre Panel Brand
              </h1>
              <p className="text-base text-[#52565B] leading-relaxed max-w-md">
                A trusted Asian brand for eco-friendly interior wall and ceiling panels.
              </p>

              <div className="pt-4">
                <a
                  href="#service-enquiry"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#9E8058] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors"
                >
                  <span>Enquire about bamboo panels</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-[#8E9296] mt-3">
                  Discuss materials, finishes and your space.
                </p>
              </div>
            </div>

            <div className="col-span-6">
              <div
                onClick={() => onOpenZoom(heroImage, 'Material Inspiration', 'Walls & ceilings interior study')}
                className="overflow-hidden bg-[#EAE8E0] cursor-zoom-in group shadow-xs mb-3"
              >
                <img
                  src={heroImage}
                  alt="Material inspiration / Walls & ceilings"
                  className="w-full h-[440px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#8E9296]">
                <span>Material inspiration / Walls & ceilings</span>
                <span>Illustrative interior</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL & SPACE */}
      <section className="py-20 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-start">
            <div className="col-span-5">
              <div
                onClick={() => onOpenZoom(flutedTexture, 'Material & Space', 'Surface, light and proportion study')}
                className="overflow-hidden bg-[#EBE9E1] cursor-zoom-in group shadow-xs mb-3"
              >
                <img
                  src={flutedTexture}
                  alt="A closer look at surface, light and proportion"
                  className="w-full h-[480px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] text-[#8E9296] italic">
                A closer look at surface, light and proportion. Illustrative study.
              </p>
            </div>

            <div className="col-span-7 space-y-8 pl-4">
              <div>
                <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
                  MATERIAL & SPACE
                </span>
                <h2 className="font-editorial text-4xl font-normal text-[#1E2226] leading-tight mb-4">
                  A considered surface.
                  <br />
                  A cohesive space.
                </h2>
                <p className="text-sm text-[#52565B] leading-relaxed">
                  Explore bamboo fibre panels as part of your interior palette. Consider how the finish, panel layout and surrounding materials will work together — from a single feature wall to a continuous wall-and-ceiling composition.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#E6E5E0]">
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-4">
                    <h4 className="font-editorial text-xl font-bold text-[#1E2226]">
                      Interior walls
                    </h4>
                  </div>
                  <div className="col-span-8">
                    <p className="text-xs text-[#52565B] leading-relaxed">
                      Discuss feature walls, full-room surfaces and the panel layout that suits your space.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-6 items-start pt-6 border-t border-[#E6E5E0]">
                  <div className="col-span-4">
                    <h4 className="font-editorial text-xl font-bold text-[#1E2226]">
                      Ceilings
                    </h4>
                  </div>
                  <div className="col-span-8">
                    <p className="text-xs text-[#52565B] leading-relaxed">
                      Explore a coordinated overhead finish, with attention to lighting, junctions and detailing.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#8E9296] pt-4 italic">
                Ask about available finishes, samples and suitability for your project before making a selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S TALK Form */}
      <section id="service-enquiry" className="py-20 bg-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-5 space-y-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block">
                LET S TALK
              </span>
              <h2 className="font-editorial text-4xl font-normal text-[#1E2226] leading-tight">
                Bring your space
                <br />
                into the conversation.
              </h2>
              <p className="text-sm text-[#52565B] leading-relaxed">
                Tell us where you would like to use bamboo fibre panels. Share your plans, material questions or the finishes you have in mind.
              </p>

              <div className="pt-8">
                <span className="text-[10px] uppercase font-semibold text-[#8E9296] block mb-1">
                  YOUR ENQUIRY IS ABOUT
                </span>
                <p className="font-editorial text-lg text-[#1E2226]">
                  Leading Bamboo Fibre Panel Brand
                </p>
              </div>
            </div>

            <div className="col-span-7 bg-white p-8 border border-[#E6E5E0] shadow-xs">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-2xl font-bold text-[#1E2226]">
                    Enquiry Received
                  </h4>
                  <p className="text-xs text-[#52565B] max-w-sm mx-auto">
                    Thank you, {formData.name}. Our architectural specification team will review your panel application and contact you at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', placement: 'walls', details: '' });
                    }}
                    className="text-xs text-[#9E8058] underline mt-3 inline-block"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#52565B] font-medium mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#52565B] font-medium mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email address"
                        className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">
                      Where are you considering panels?
                    </label>
                    <select
                      value={formData.placement}
                      onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    >
                      <option value="walls">Walls only (Feature wall or full room)</option>
                      <option value="ceilings">Ceilings only (Living room, bedroom, or soffit)</option>
                      <option value="both">Both walls and ceilings (Continuous expression)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">Project details</label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about your space, location and material requirements…"
                      className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#9E8058] text-white font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors flex items-center gap-2"
                  >
                    <span>Send enquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-[#8E9296]">
                    Your details will be used to respond to your project enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
