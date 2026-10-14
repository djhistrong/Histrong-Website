import React from 'react';
import { ArrowLeft, ArrowUpRight, ArrowRight, Share2 } from 'lucide-react';
import { PageId } from '../types';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onOpenZoom: (url: string, title: string, subtitle?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenZoom }) => {
  const heroImage = '/src/assets/images/hero_interior_panels_1791964969336.jpg';
  const villaImage = '/src/assets/images/project_villa_alam_sari_1791964970877.jpg';
  const flutedTexture = '/src/assets/images/texture_fluted_panel_nogal_1791964971357.jpg';

  return (
    <div className="bg-[#FAF9F5] text-[#1E2226]">
      {/* Top Navigation / Back */}
      <section className="pt-8 pb-4 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#1E2226] text-xs text-[#8E9296] flex items-center gap-1.5 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Our Blogs</span>
          </button>
        </div>
      </section>

      {/* Article Hero & Header (Page 16) */}
      <section className="py-12 border-b border-[#E6E5E0]">
        <div className="max-w-[1040px] mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
              THOUGHTFUL SPACES
            </span>
            <h1 className="font-editorial text-4xl lg:text-5xl font-normal text-[#1E2226] leading-tight mb-4">
              Modern living in a
              <br />
              thoughtfully designed home
            </h1>
            <div className="flex items-center justify-center gap-3 text-xs text-[#8E9296] font-mono">
              <span className="font-semibold text-[#1E2226]">HISTRONG</span>
              <span>—</span>
              <span>27 Jan 2022</span>
              <span>·</span>
              <span className="text-[#9E8058]">Press Released</span>
            </div>
          </div>

          <div
            onClick={() => onOpenZoom(heroImage, 'Modern living in a thoughtfully designed home', 'Natural light, warm textures and space for everyday life')}
            className="overflow-hidden bg-[#EBE9E1] cursor-zoom-in group shadow-xs mb-3"
          >
            <img
              src={heroImage}
              alt="Modern living in a thoughtfully designed home"
              className="w-full h-[520px] object-cover group-hover:scale-101 transition-transform duration-500"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-[#8E9296] italic pt-2">
            <span>Natural light, warm textures and space for everyday life.</span>
            <span className="font-sans uppercase font-bold tracking-wider text-[10px] text-[#1E2226]">
              DESIGN PERSPECTIVES
            </span>
          </div>
        </div>
      </section>

      {/* Article Content & In-Article Table of Contents */}
      <section className="py-16 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1040px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-start">
            {/* Table of Contents Column */}
            <div className="col-span-4 sticky top-28 space-y-6">
              <div className="p-6 bg-[#FAF9F5] border border-[#E6E5E0] space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E8058] block">
                  IN THIS ARTICLE
                </span>
                <ul className="space-y-2.5 text-xs text-[#52565B]">
                  <li>
                    <a href="#everyday-life" className="hover:text-[#1E2226] hover:underline">
                      Begin with everyday life
                    </a>
                  </li>
                  <li>
                    <a href="#light-lead" className="hover:text-[#1E2226] hover:underline">
                      Let the light lead
                    </a>
                  </li>
                  <li>
                    <a href="#materials-warmth" className="hover:text-[#1E2226] hover:underline">
                      Materials with warmth
                    </a>
                  </li>
                  <li>
                    <a href="#room-evolve" className="hover:text-[#1E2226] hover:underline">
                      Room to evolve
                    </a>
                  </li>
                </ul>

                <p className="text-[11px] text-[#8E9296] italic pt-3 border-t border-[#EBE9E1]">
                  An exploration of design for the way we live.
                </p>
              </div>
            </div>

            {/* Article Prose Column */}
            <div className="col-span-8 space-y-10 text-sm text-[#3E4247] leading-relaxed">
              <div className="border-b border-[#E6E5E0] pb-8 space-y-4">
                <p className="font-editorial text-xl font-normal text-[#1E2226] leading-relaxed">
                  A thoughtful home is defined by how naturally it supports the life within it. Modern living begins with making room for what matters.
                </p>
                <p>
                  Beyond clean lines and a quiet palette, modern design is about the ease of moving through a home, the comfort of a favourite chair, and the changing light across a wall. These small experiences give a home its character.
                </p>
              </div>

              {/* Section 1 */}
              <div id="everyday-life" className="space-y-3">
                <h3 className="font-editorial text-2xl font-normal text-[#1E2226]">
                  Begin with everyday life
                </h3>
                <p>
                  Start with the rhythms of a day: where shoes land, where the family gathers, and where quiet moments happen. A plan shaped around these habits can feel more generous without needing more space.
                </p>
                <p>
                  Clear routes between rooms and built-in storage help keep the room calm. Arrange seating for conversation, not just for a view, and leave enough space to move comfortably.
                </p>
              </div>

              {/* Section 2 */}
              <div id="light-lead" className="space-y-3">
                <h3 className="font-editorial text-2xl font-normal text-[#1E2226]">
                  Let the light lead
                </h3>
                <p>
                  Daylight gives a room a quality that decoration alone cannot. Notice how it moves through the space before deciding where activities belong. Soft morning light can welcome a reading corner.
                </p>
                <p>
                  Sheer curtains soften brightness while preserving a connection to the outside. After sunset, layered light brings intimacy: a pendant over the table, a lamp beside a chair, and a gentle wash across texture.
                </p>
              </div>

              {/* Pull Quote matching PDF Page 16 */}
              <div className="my-8 p-8 border-y border-[#E6E5E0] bg-[#FAF9F5] text-center space-y-2">
                <p className="font-editorial text-2xl italic text-[#1E2226] leading-normal">
                  “The most considered spaces leave room for life, rather than asking life to fit around them.”
                </p>
                <span className="text-[10px] font-mono tracking-widest text-[#9E8058] uppercase block">
                  A PRINCIPLE FOR EVERYDAY DESIGN
                </span>
              </div>

              {/* Section 3 */}
              <div id="materials-warmth" className="space-y-3">
                <h3 className="font-editorial text-2xl font-normal text-[#1E2226]">
                  Choose materials with warmth
                </h3>
                <p>
                  Restraint need not feel cold. Timber grain, woven textiles, and softly finished stone bring depth to a simple room. Repeat a small family of materials with care.
                </p>
                <p>
                  Think about touch as well as appearance. A surface should suit its use and the care it will need. A soft rug, comfortable upholstery, and a well-proportioned handle all matter.
                </p>
              </div>

              {/* Section 4 */}
              <div id="room-evolve" className="space-y-3">
                <h3 className="font-editorial text-2xl font-normal text-[#1E2226]">
                  Leave room to evolve
                </h3>
                <p>
                  A home does not have to be finished all at once. Flexible furniture, a spare stretch of wall, and a welcoming palette allow it to change with its occupants.
                </p>
                <p>
                  Thoughtful modern design is less about a perfect image than finding a lasting balance: openness and privacy, simplicity and comfort, order and individuality. Start with how you want to live.
                </p>
              </div>

              {/* Footer Tags & Share */}
              <div className="pt-8 border-t border-[#E6E5E0] flex items-center justify-between text-xs text-[#8E9296]">
                <span>Modern living / Interior design / Thoughtful spaces</span>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }}
                  className="flex items-center gap-1.5 text-[#1E2226] hover:text-[#9E8058] transition-colors font-medium"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share article ↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUE READING: Related articles (Page 16) */}
      <section className="py-20 border-b border-[#E6E5E0] bg-[#FAF9F5]">
        <div className="max-w-[1040px] mx-auto px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-1">
                CONTINUE READING
              </span>
              <h3 className="font-editorial text-3xl font-normal text-[#1E2226]">
                Related articles
              </h3>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="text-xs uppercase tracking-wider text-[#1E2226] font-semibold hover:text-[#9E8058] transition-colors flex items-center gap-1.5"
            >
              <span>View all blogs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="border border-[#E6E5E0] bg-white p-5 space-y-4 hover:border-[#9E8058] transition-all cursor-pointer group"
            >
              <div className="h-44 bg-[#EAE8E0] overflow-hidden">
                <img
                  src={villaImage}
                  alt="Timeless residential architecture"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#8E9296] font-mono">
                <span>HISTRONG</span>
                <span>·</span>
                <span>27 Feb 2021</span>
                <span>·</span>
                <span>Press Released</span>
              </div>
              <h4 className="font-editorial text-lg font-bold text-[#1E2226] group-hover:text-[#9E8058] transition-colors">
                The beauty of timeless residential architecture
              </h4>
              <div className="flex items-center gap-1 text-xs text-[#9E8058] font-semibold">
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="border border-[#E6E5E0] bg-white p-5 space-y-4 hover:border-[#9E8058] transition-all cursor-pointer group"
            >
              <div className="h-44 bg-[#EAE8E0] overflow-hidden">
                <img
                  src={flutedTexture}
                  alt="Minimalist interiors for everyday living"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#8E9296] font-mono">
                <span>HISTRONG</span>
                <span>·</span>
                <span>27 Feb 2021</span>
                <span>·</span>
                <span>Press Released</span>
              </div>
              <h4 className="font-editorial text-lg font-bold text-[#1E2226] group-hover:text-[#9E8058] transition-colors">
                Minimalist interiors for everyday living
              </h4>
              <div className="flex items-center gap-1 text-xs text-[#9E8058] font-semibold">
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
