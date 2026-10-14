import React, { useState } from 'react';
import { Search, ArrowUpRight, Check } from 'lucide-react';
import { PRODUCTS, APPLICATION_AREAS } from '../data/mockData';
import { PageId, ProductCategory } from '../types';

interface ProductPageProps {
  onNavigate: (page: PageId, category?: ProductCategory) => void;
  initialCategory?: ProductCategory;
  onOpenZoom: (url: string, title: string, subtitle?: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  onNavigate,
  initialCategory = 'bfp',
  onOpenZoom,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [selectedFinish, setSelectedFinish] = useState<string>('Wood grain');
  const [selectedTone, setSelectedTone] = useState<string>('All');
  const [activeColourChip, setActiveColourChip] = useState<string>('All Tones');
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const flutedTexture = '/src/assets/images/texture_fluted_panel_nogal_1791964971357.jpg';
  const heroImage = '/src/assets/images/hero_interior_panels_1791964969336.jpg';

  const colourChips = [
    'All Tones',
    'Charcoal & Slate',
    'Linen & Cream',
    'Morandi Sage',
    'Natural Wood Grain',
    'Metallic & Gold',
    'Pearl White & Marble',
  ];

  // Filtering products
  const filteredProducts = PRODUCTS.filter((item) => {
    // If not searching, category matches
    const matchesCategory = selectedCategory ? item.category === selectedCategory || true : true;
    const matchesSearch =
      searchQuery === '' ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameZh.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case 'bfp':
        return 'Bamboo Fibre Panel';
      case 'fluted':
        return 'Bamboo Fiber Fluted Panel 海创竹木格栅板';
      case 'ceiling':
        return 'Integrated Aluminium Ceiling';
      default:
        return 'Bamboo Fibre Panel';
    }
  };

  return (
    <div className="bg-[#FAF9F5] text-[#1E2226]">
      {/* Header & Breadcrumb */}
      <section className="pt-10 pb-8 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-xs text-[#8E9296] mb-6 font-mono">
            <button onClick={() => onNavigate('home')} className="hover:text-[#1E2226]">
              Home
            </button>
            <span className="mx-2">/</span>
            <span className="text-[#1E2226]">Product collection</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-7">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
                OUR COLLECTION
              </span>
              <h1 className="font-editorial text-5xl font-normal text-[#1E2226] leading-tight">
                Materials for inspired spaces.
              </h1>
            </div>
            <div className="col-span-5 text-sm text-[#52565B] space-y-1">
              <p>
                Explore wall panels, textured finishes and ceiling collections. Find the material that brings your interior vision to life.
              </p>
              <p className="text-xs font-serif italic text-[#9E8058]">
                Walls. Ceilings. A world of possibilities.
              </p>
            </div>
          </div>

          {/* Submenu by Main Category as requested */}
          <div className="flex items-center gap-2 mt-8 p-1 bg-[#F0EEE6] border border-[#E0DED4] rounded-sm text-xs">
            <button
              onClick={() => setSelectedCategory('bfp')}
              className={`flex-1 py-2.5 px-4 font-semibold text-center transition-colors ${
                selectedCategory === 'bfp'
                  ? 'bg-[#9E8058] text-white shadow-xs'
                  : 'text-[#52565B] hover:text-[#1E2226]'
              }`}
            >
              HISTRONG BAMBOO FIBREPANEL (BFP)
            </button>
            <button
              onClick={() => setSelectedCategory('fluted')}
              className={`flex-1 py-2.5 px-4 font-semibold text-center transition-colors ${
                selectedCategory === 'fluted'
                  ? 'bg-[#9E8058] text-white shadow-xs'
                  : 'text-[#52565B] hover:text-[#1E2226]'
              }`}
            >
              HISTRONG BAMBOO FIBER FLUTED PANEL 海创竹木格栅板
            </button>
            <button
              onClick={() => setSelectedCategory('ceiling')}
              className={`flex-1 py-2.5 px-4 font-semibold text-center transition-colors ${
                selectedCategory === 'ceiling'
                  ? 'bg-[#9E8058] text-white shadow-xs'
                  : 'text-[#52565B] hover:text-[#1E2226]'
              }`}
            >
              HISTRONG INTEGRATED ALUMINIUM CEILING
            </button>
          </div>
        </div>
      </section>

      {/* Catalog Main View */}
      <section className="py-12 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Top Search & Filter Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E6E5E0]">
            <div>
              <h2 className="font-editorial text-2xl font-normal text-[#1E2226]">
                {getCategoryTitle()}
              </h2>
              <p className="text-xs text-[#8E9296]">
                Showing 1–{filteredProducts.length} of 18 wood grain finishes
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-72">
                <Search className="w-4 h-4 text-[#8E9296] absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name or product code"
                  className="w-full text-xs pl-9 pr-3 py-2 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                />
              </div>

              <div className="text-xs border border-[#D5D4CE] rounded bg-white px-3 py-2 text-[#52565B]">
                Sort by: <strong className="text-[#1E2226]">Featured ⌄</strong>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-10">
            {/* Sidebar Filters */}
            <div className="col-span-3 space-y-8">
              <div className="p-6 bg-white border border-[#E6E5E0] shadow-2xs space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#E6E5E0]">
                  <h3 className="font-editorial text-lg font-bold text-[#1E2226]">
                    Filter by
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedFinish('Wood grain');
                      setSelectedTone('All');
                      setActiveColourChip('All Tones');
                      setSearchQuery('');
                    }}
                    className="text-[11px] text-[#9E8058] hover:underline"
                  >
                    Reset all
                  </button>
                </div>

                {/* Finish Filter */}
                <div className="space-y-2.5 text-xs">
                  <span className="font-semibold text-[#1E2226] block mb-2">Finish −</span>
                  {[
                    { label: 'Wood grain', count: 18 },
                    { label: 'Stone effect', count: 8 },
                    { label: 'Solid colour', count: 6 },
                  ].map((f) => (
                    <label
                      key={f.label}
                      className="flex items-center justify-between text-[#52565B] cursor-pointer hover:text-[#1E2226]"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedFinish === f.label}
                          onChange={() => setSelectedFinish(f.label)}
                          className="rounded text-[#9E8058] accent-[#9E8058]"
                        />
                        <span>{f.label}</span>
                      </div>
                      <span className="font-mono text-[#8E9296] text-[11px]">{f.count}</span>
                    </label>
                  ))}
                </div>

                {/* Colour tone Filter */}
                <div className="space-y-2.5 text-xs pt-4 border-t border-[#E6E5E0]">
                  <span className="font-semibold text-[#1E2226] block mb-2">Colour tone −</span>
                  {[
                    { label: 'Light & natural', count: 8 },
                    { label: 'Warm & medium', count: 6 },
                    { label: 'Dark & rich', count: 4 },
                  ].map((t) => (
                    <label
                      key={t.label}
                      className="flex items-center justify-between text-[#52565B] cursor-pointer hover:text-[#1E2226]"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedTone === t.label}
                          onChange={() => setSelectedTone(selectedTone === t.label ? 'All' : t.label)}
                          className="rounded text-[#9E8058] accent-[#9E8058]"
                        />
                        <span>{t.label}</span>
                      </div>
                      <span className="font-mono text-[#8E9296] text-[11px]">{t.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guidance Box matching PDF */}
              <div className="p-6 bg-[#FAF9F5] border border-[#E6E5E0] space-y-3">
                <h4 className="font-editorial text-lg font-bold text-[#1E2226]">
                  Need a little guidance?
                </h4>
                <p className="text-xs text-[#52565B] leading-relaxed">
                  Let us help you find the right panel and finish for your space.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-semibold text-[#9E8058] hover:text-[#7f6542] uppercase tracking-wider flex items-center gap-1"
                >
                  <span>TALK TO US</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Products Grid Area */}
            <div className="col-span-9 space-y-6">
              {/* Active filter badge & Colour chips */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#6A6D71]">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#EBE9E1] px-2.5 py-1 text-xs text-[#1E2226] font-medium flex items-center gap-1.5 rounded-xs">
                      <span>{selectedFinish}</span>
                      <button onClick={() => setSelectedFinish('')} className="text-[#8E9296] hover:text-black">
                        ×
                      </button>
                    </span>
                  </div>
                  <span className="text-xs text-[#8E9296]">6 per page</span>
                </div>

                {/* Color Chips Selector */}
                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                  <span className="text-[10px] uppercase font-semibold text-[#8E9296] mr-2">
                    SELECT COLOUR / TONE:
                  </span>
                  {colourChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => setActiveColourChip(chip)}
                      className={`px-3 py-1 text-xs border rounded-xs transition-colors flex items-center gap-1.5 ${
                        activeColourChip === chip
                          ? 'border-[#9E8058] bg-[#FAF9F5] text-[#1E2226] font-semibold'
                          : 'border-[#E6E5E0] bg-white text-[#52565B] hover:border-[#C7C4B8]'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{
                          backgroundColor:
                            chip === 'Charcoal & Slate'
                              ? '#303438'
                              : chip === 'Linen & Cream'
                              ? '#E2DCD0'
                              : chip === 'Morandi Sage'
                              ? '#9DAA97'
                              : chip === 'Natural Wood Grain'
                              ? '#B28E66'
                              : chip === 'Metallic & Gold'
                              ? '#C9A86A'
                              : chip === 'Pearl White & Marble'
                              ? '#F5F5F0'
                              : '#8C6E52',
                        }}
                      ></span>
                      <span>{chip}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Products 3-column Grid */}
              <div className="grid grid-cols-3 gap-6">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => onNavigate('product-detail')}
                    className="border border-[#E6E5E0] bg-white p-4 space-y-3 cursor-pointer hover:border-[#9E8058] hover:shadow-xs transition-all group"
                  >
                    <div className="relative overflow-hidden bg-[#EBE9E1]">
                      <img
                        src={flutedTexture}
                        alt={prod.nameEn}
                        className="w-full h-52 object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      {prod.isNew && (
                        <span className="absolute top-2.5 left-2.5 bg-[#9E8058] text-white text-[10px] font-semibold px-2 py-0.5 tracking-wider uppercase">
                          NEW
                        </span>
                      )}
                      {prod.isConceptPreview && (
                        <span className="absolute top-2.5 left-2.5 bg-[#23272B] text-white text-[9px] font-semibold px-2 py-0.5 tracking-wider uppercase">
                          FINISH PREVIEW
                        </span>
                      )}
                    </div>

                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-1.5 pt-1">
                      {prod.swatches.map((swatch, i) => (
                        <span
                          key={swatch.id}
                          className="w-3 h-3 rounded-full border border-black/10 inline-block"
                          style={{ backgroundColor: swatch.colorHex }}
                          title={swatch.name}
                        ></span>
                      ))}
                      <span className="text-[10px] text-[#8E9296] font-mono ml-1">+3</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#8E9296] font-mono block">
                        Selected finish: {prod.nameEn}
                      </span>
                      <span className="text-[10px] text-[#8E9296] font-mono block">
                        {prod.code}
                      </span>
                      <h4 className="font-editorial text-base font-bold text-[#1E2226] mt-0.5">
                        {prod.nameZh} {prod.nameEn}
                      </h4>

                      <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-[#F0EEE6]">
                        {prod.price ? (
                          <span className="font-mono text-sm font-semibold text-[#1E2226]">
                            RM{prod.price.toFixed(2)}
                          </span>
                        ) : (
                          <span className="text-xs text-[#9E8058] font-medium">
                            Enquire for pricing
                          </span>
                        )}
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#9E8058] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>

                      <p className="text-[10px] text-[#8E9296] mt-1">
                        {prod.categoryLabel} · {prod.finishType}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Concept Note */}
              <p className="text-[11px] text-[#8E9296] italic text-center pt-2">
                Additional finishes are concept previews. Contact us to confirm availability and pricing.
              </p>

              {/* Pagination */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E6E5E0] text-xs text-[#6A6D71]">
                <span>Page {pageNumber} of 3</span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber(pageNumber - 1)}
                    className="px-2.5 py-1 border border-[#D5D4CE] disabled:opacity-40"
                  >
                    ‹
                  </button>
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() => setPageNumber(num)}
                      className={`px-3 py-1 border transition-colors ${
                        pageNumber === num
                          ? 'border-[#9E8058] bg-[#9E8058] text-white font-bold'
                          : 'border-[#D5D4CE] bg-white text-[#1E2226] hover:bg-[#FAF9F5]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <button
                    disabled={pageNumber === 3}
                    onClick={() => setPageNumber(pageNumber + 1)}
                    className="px-2.5 py-1 border border-[#D5D4CE] disabled:opacity-40"
                  >
                    Next ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas Showcase (Page 10) */}
      <section className="py-20 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-editorial text-3xl font-normal text-[#1E2226] mb-2">
              Application Areas
            </h3>
            <p className="text-xs text-[#52565B]">
              HISTRONG PVC Soffit is versatile and fits almost every type of ceiling space:
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {APPLICATION_AREAS.map((area, i) => (
              <div
                key={area.name}
                onClick={() => onOpenZoom(heroImage, area.name, area.subtitle)}
                className="group cursor-zoom-in border border-[#E6E5E0] p-3 bg-[#FAF9F5] hover:border-[#9E8058] transition-all"
              >
                <div className="h-36 overflow-hidden bg-[#EAE8E0] mb-3">
                  <img
                    src={heroImage}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-editorial text-sm font-bold text-[#1E2226]">
                  {area.name}
                </h4>
                <p className="text-[10px] text-[#6A6D71] mt-0.5">{area.subtitle}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#52565B] text-center mt-10">
            HISTRONG PVC Soffit Panels are resistant to humidity and termite attack, making them ideal for Malaysia’s tropical environment.
          </p>
        </div>
      </section>

      {/* LET'S TALK */}
      <section className="py-16 bg-[#F4F3EE]">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-1">
              LET S TALK
            </span>
            <h3 className="font-editorial text-3xl font-normal text-[#1E2226]">
              Your next space starts with the right material.
            </h3>
            <p className="text-xs text-[#52565B] mt-1">
              Share your ideas with us for product guidance and a personalised quotation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#9E8058] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors flex items-center gap-2"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
