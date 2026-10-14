import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { DETAIL_SWATCHES } from '../data/mockData';
import { PageId, ProductCategory, ProductFinish, ShortlistItem } from '../types';

interface ProductDetailPageProps {
  onNavigate: (page: PageId, category?: ProductCategory) => void;
  onOpenZoom: (url: string, title: string, subtitle?: string) => void;
  onAddToShortlist: (item: Omit<ShortlistItem, 'id' | 'dateAdded'>) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onNavigate,
  onOpenZoom,
  onAddToShortlist,
}) => {
  // Swatch state - Clicking changes SKU, code, name, price
  const [activeSwatch, setActiveSwatch] = useState<ProductFinish>(DETAIL_SWATCHES[0]);

  // View mode: 'profile' vs 'mockup'
  const [viewMode, setViewMode] = useState<'profile' | 'mockup'>('profile');

  // Interactive Calculator State
  const [unit, setUnit] = useState<'m' | 'ft'>('m');
  const [wallWidth, setWallWidth] = useState<number>(4.0);
  const [wallHeight, setWallHeight] = useState<number>(2.8);
  const [wasteAllowance, setWasteAllowance] = useState<number>(5);
  const [addedToast, setAddedToast] = useState(false);

  // PDP Tabs
  const [activeTab, setActiveTab] = useState<'details' | 'installation' | 'related'>('details');

  const flutedTexture = '/src/assets/images/texture_fluted_panel_nogal_1791964971357.jpg';
  const mockupImage = '/src/assets/images/room_mockup_living_wall_1791964971936.jpg';

  // Math Calculations
  const panelCoverageM2 = 3.6; // 1.2m x 3.0m
  const panelCoverageFt2 = 38.75; // in sq ft
  const panelCoverage = unit === 'm' ? panelCoverageM2 : panelCoverageFt2;

  const totalArea = +(wallWidth * wallHeight).toFixed(2);
  const effectiveAreaWithWaste = totalArea * (1 + wasteAllowance / 100);
  const panelsNeeded = Math.max(1, Math.ceil(effectiveAreaWithWaste / panelCoverage));
  const estimatedCost = +(panelsNeeded * activeSwatch.price).toFixed(2);

  const handleUnitToggle = (newUnit: 'm' | 'ft') => {
    if (newUnit === unit) return;
    if (newUnit === 'ft') {
      // convert m to ft (1m ~ 3.28084ft)
      setUnit('ft');
      setWallWidth(+(wallWidth * 3.28084).toFixed(1));
      setWallHeight(+(wallHeight * 3.28084).toFixed(1));
    } else {
      // convert ft to m
      setUnit('m');
      setWallWidth(+(wallWidth / 3.28084).toFixed(1));
      setWallHeight(+(wallHeight / 3.28084).toFixed(1));
    }
  };

  const handleAddMeasurement = () => {
    onAddToShortlist({
      productCode: activeSwatch.code,
      productName: `${activeSwatch.nameZh} ${activeSwatch.name}`,
      finishName: activeSwatch.name,
      sku: activeSwatch.sku,
      dimensions: {
        width: wallWidth,
        height: wallHeight,
        unit,
      },
      area: totalArea,
      wastePercent: wasteAllowance,
      panelsCount: panelsNeeded,
      unitPrice: activeSwatch.price,
      totalPrice: estimatedCost,
    });

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <div className="bg-[#FAF9F5] text-[#1E2226]">
      {/* Breadcrumb & Back button */}
      <section className="pt-8 pb-4 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between text-xs text-[#8E9296]">
          <div className="flex items-center gap-2 font-mono">
            <button onClick={() => onNavigate('home')} className="hover:text-[#1E2226]">
              Home
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('product')} className="hover:text-[#1E2226]">
              Product
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('product', 'bfp')}
              className="hover:text-[#1E2226]"
            >
              Bamboo Fibre Panel
            </button>
            <span>/</span>
            <span className="text-[#1E2226] font-medium">{activeSwatch.code}</span>
          </div>

          <button
            onClick={() => onNavigate('product')}
            className="hover:text-[#1E2226] flex items-center gap-1 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to collection</span>
          </button>
        </div>
      </section>

      {/* Main PDP Section (Page 13) */}
      <section className="py-12 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-start">
            {/* Left Column: Product Visuals & Swatches */}
            <div className="col-span-7 space-y-6">
              {/* Product Header */}
              <div>
                <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-1">
                  HISTRONG BAMBOO FIBREPANEL (BFP)
                </span>
                <div className="flex items-baseline gap-4">
                  <h1 className="font-editorial text-4xl lg:text-5xl font-normal text-[#1E2226]">
                    {activeSwatch.code}
                  </h1>
                  <span className="font-editorial text-3xl text-[#1E2226]">
                    {activeSwatch.nameZh} {activeSwatch.name}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-1 text-xs text-[#8E9296] font-mono">
                  <span>SKU: {activeSwatch.sku}</span>
                  <span>·</span>
                  <span>Collection: Standard Modular 3000mm</span>
                </div>
              </div>

              {/* View Switcher: Profile vs Room Mockup */}
              <div className="flex items-center gap-1 p-1 bg-[#EBE9E1] rounded-xs w-fit text-xs font-medium">
                <button
                  onClick={() => setViewMode('profile')}
                  className={`px-4 py-2 rounded-xs transition-colors ${
                    viewMode === 'profile'
                      ? 'bg-[#1E2226] text-white shadow-xs'
                      : 'text-[#6A6D71] hover:text-[#1E2226]'
                  }`}
                >
                  Profile & product details
                </button>
                <button
                  onClick={() => setViewMode('mockup')}
                  className={`px-4 py-2 rounded-xs transition-colors flex items-center gap-1.5 ${
                    viewMode === 'mockup'
                      ? 'bg-[#1E2226] text-white shadow-xs'
                      : 'text-[#6A6D71] hover:text-[#1E2226]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#9E8058]" />
                  <span>Room mockup</span>
                </button>
              </div>

              {/* Main Media Showcase Box */}
              <div className="relative border border-[#E6E5E0] bg-[#EBE9E1] overflow-hidden group">
                {viewMode === 'profile' ? (
                  // Profile View
                  <div
                    onClick={() =>
                      onOpenZoom(
                        flutedTexture,
                        `${activeSwatch.code} ${activeSwatch.nameZh} ${activeSwatch.name}`,
                        'Close-up material and fluted profile specimen'
                      )
                    }
                    className="cursor-zoom-in relative"
                  >
                    <img
                      src={flutedTexture}
                      alt={activeSwatch.name}
                      className="w-full h-[460px] object-cover group-hover:scale-101 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#9E8058] text-white text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wider">
                      NEW
                    </span>
                    <button
                      className="absolute bottom-4 right-4 bg-white/90 p-2 text-[#1E2226] hover:bg-white shadow-xs transition-colors"
                      title="Enlarge Image"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  // Room Mockup View Auto-generated with Calculator Output
                  <div className="relative h-[460px] overflow-hidden bg-[#23272B]">
                    <img
                      src={mockupImage}
                      alt="Room Mockup"
                      className="w-full h-full object-cover"
                    />

                    {/* Dynamic color tint overlay reflecting the selected swatch tone */}
                    <div
                      className="absolute inset-0 mix-blend-color opacity-35 pointer-events-none transition-colors duration-500"
                      style={{ backgroundColor: activeSwatch.colorHex }}
                    ></div>

                    {/* Visual Panel Divisions preview superimposed over the feature wall */}
                    <div className="absolute top-0 right-1/4 w-1/3 h-full pointer-events-none flex border-l border-r border-[#9E8058]/50 bg-black/5">
                      {Array.from({ length: Math.min(panelsNeeded, 6) }).map((_, idx) => (
                        <div
                          key={idx}
                          className="flex-1 border-r border-[#9E8058]/30 flex flex-col justify-end p-1 text-[8px] text-white/70 font-mono"
                        >
                          P{idx + 1}
                        </div>
                      ))}
                    </div>

                    {/* Room Mockup HUD Auto-generated with Calculator */}
                    <div className="absolute bottom-4 left-4 bg-[#1E2226]/90 backdrop-blur-md p-4 text-white border border-white/10 max-w-sm shadow-xl">
                      <div className="flex items-center gap-2 text-[10px] uppercase font-semibold text-[#9E8058] mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Interactive Wall Mockup HUD</span>
                      </div>
                      <h4 className="font-editorial text-base font-bold text-white mb-2">
                        {activeSwatch.code} · {activeSwatch.nameZh}
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs text-[#C5CAD0] border-t border-white/10 pt-2 font-mono">
                        <div>
                          <span className="text-[10px] text-[#8E9296] block font-sans">Wall Size:</span>
                          <span>
                            {wallWidth} × {wallHeight} {unit}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#8E9296] block font-sans">Wall Area:</span>
                          <span>
                            {totalArea} {unit}²
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#8E9296] block font-sans">Panels Rendered:</span>
                          <span className="text-white font-bold">{panelsNeeded} panels</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#8E9296] block font-sans">Estimate:</span>
                          <span className="text-[#9E8058] font-bold">RM {estimatedCost.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Swatch Selector Row (Updates SKU, Price, and Code Name dynamically) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-xs text-[#52565B]">
                    Selected finish:{' '}
                    <strong className="text-[#1E2226]">
                      {activeSwatch.nameZh} {activeSwatch.name}
                    </strong>
                  </span>
                  <span className="text-[11px] text-[#8E9296] italic">
                    Screen colours may differ from the actual finish.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {DETAIL_SWATCHES.map((swatch) => (
                    <button
                      key={swatch.id}
                      onClick={() => setActiveSwatch(swatch)}
                      className={`relative p-1 border rounded-xs transition-all group ${
                        activeSwatch.id === swatch.id
                          ? 'border-[#1E2226] ring-2 ring-[#9E8058]/40 scale-105'
                          : 'border-[#D5D4CE] hover:border-[#8E9296]'
                      }`}
                      title={`${swatch.code} - ${swatch.nameZh} ${swatch.name} (RM ${swatch.price})`}
                    >
                      <div
                        className="w-12 h-12 rounded-xs shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: swatch.colorHex }}
                      >
                        {activeSwatch.id === swatch.id && (
                          <Check className="w-4 h-4 text-white drop-shadow-md" />
                        )}
                      </div>
                      <span className="block text-[9px] font-mono text-center mt-1 text-[#52565B] max-w-[48px] truncate">
                        {swatch.code.split('-')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Live Wall Panel Quantity Estimator */}
            <div className="col-span-5 space-y-6">
              {/* Price Callout */}
              <div className="p-6 bg-white border border-[#E6E5E0] shadow-xs">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-editorial text-4xl font-bold text-[#1E2226]">
                    RM{activeSwatch.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-[#8E9296] font-medium">/panel</span>
                </div>
                <p className="text-xs text-[#52565B] leading-relaxed">
                  Use our calculator to estimate how much material you need for your project.
                </p>
              </div>

              {/* WALL PANEL QUANTITY ESTIMATOR (Page 13) */}
              <div className="p-6 bg-[#23272B] text-white border border-[#32373D] shadow-md space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    WALL PANEL QUANTITY ESTIMATOR
                  </h3>

                  {/* Meters vs Feet Toggle */}
                  <div className="flex items-center p-0.5 bg-[#14171A] rounded-xs text-[10px] font-bold">
                    <button
                      onClick={() => handleUnitToggle('m')}
                      className={`px-3 py-1 rounded-xs transition-colors ${
                        unit === 'm'
                          ? 'bg-[#9E8058] text-white'
                          : 'text-[#8E9296] hover:text-white'
                      }`}
                    >
                      METERS
                    </button>
                    <button
                      onClick={() => handleUnitToggle('ft')}
                      className={`px-3 py-1 rounded-xs transition-colors ${
                        unit === 'ft'
                          ? 'bg-[#9E8058] text-white'
                          : 'text-[#8E9296] hover:text-white'
                      }`}
                    >
                      FEET
                    </button>
                  </div>
                </div>

                {/* Calculator Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] text-[#A0A5AA] block mb-1">
                      Wall width ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.5"
                      max="100"
                      value={wallWidth}
                      onChange={(e) => setWallWidth(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full text-xs font-mono px-3 py-2 bg-[#1A1D20] border border-white/10 rounded-xs text-white focus:outline-none focus:border-[#9E8058]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#A0A5AA] block mb-1">
                      Wall height ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.5"
                      max="20"
                      value={wallHeight}
                      onChange={(e) => setWallHeight(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full text-xs font-mono px-3 py-2 bg-[#1A1D20] border border-white/10 rounded-xs text-white focus:outline-none focus:border-[#9E8058]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-[#A0A5AA] block mb-1">
                    Waste allowance (%)
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="0"
                    max="50"
                    value={wasteAllowance}
                    onChange={(e) => setWasteAllowance(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full text-xs font-mono px-3 py-2 bg-[#1A1D20] border border-white/10 rounded-xs text-white focus:outline-none focus:border-[#9E8058]"
                  />
                </div>

                {/* Calculation Outputs matching PDF */}
                <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between text-[#A0A5AA]">
                    <span>Total surface area</span>
                    <span className="font-mono text-white font-medium">
                      {totalArea.toFixed(2)} {unit}²
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[#A0A5AA]">
                    <span>Assumed panel coverage</span>
                    <span className="font-mono text-white font-medium">
                      {panelCoverage.toFixed(3)} {unit}²
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm pt-2 border-t border-white/5">
                    <span className="font-semibold text-white">Panels needed</span>
                    <div className="text-right">
                      <span className="font-mono text-lg font-bold text-[#9E8058]">
                        {panelsNeeded} panels
                      </span>
                      <span className="block text-[10px] text-[#8E9296] font-mono">
                        ≈ RM {estimatedCost.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanation text directly from PDF Page 13 */}
                <p className="text-[10px] text-[#8E9296] leading-relaxed italic border-t border-white/5 pt-3">
                  Demo assumption: 1200 × 3000 mm per panel (3.600 m²). Panels = round up [wall area × (1 + waste % / 100) ÷ panel coverage]. Excludes openings, cutting layout, joint losses, installation and transport. Confirm actual product dimensions before ordering.
                </p>

                {/* Action button: Add Measurement to Quote Shortlist */}
                <button
                  onClick={handleAddMeasurement}
                  className="w-full py-3.5 bg-[#9E8058] hover:bg-[#856b46] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>ADD MEASUREMENT TO QUOTE SHORTLIST</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {addedToast && (
                  <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2 rounded-xs animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Added {panelsNeeded} panels of {activeSwatch.code} to quote shortlist!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Product details / Installation & care / Related products (Page 13) */}
      <section className="py-16 border-b border-[#E6E5E0] bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center gap-8 border-b border-[#E6E5E0] pb-4 mb-10 text-xs font-medium uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-2 relative ${
                activeTab === 'details'
                  ? 'text-[#1E2226] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                  : 'text-[#8E9296] hover:text-[#1E2226]'
              }`}
            >
              Product details
            </button>
            <button
              onClick={() => setActiveTab('installation')}
              className={`pb-2 relative ${
                activeTab === 'installation'
                  ? 'text-[#1E2226] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                  : 'text-[#8E9296] hover:text-[#1E2226]'
              }`}
            >
              Installation & care
            </button>
            <button
              onClick={() => setActiveTab('related')}
              className={`pb-2 relative ${
                activeTab === 'related'
                  ? 'text-[#1E2226] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                  : 'text-[#8E9296] hover:text-[#1E2226]'
              }`}
            >
              Related products
            </button>
          </div>

          <div className="grid grid-cols-12 gap-16">
            {/* Left: The Material details */}
            <div className="col-span-6 space-y-6">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block">
                THE MATERIAL
              </span>
              <h3 className="font-editorial text-3xl font-normal text-[#1E2226]">
                Texture, tone and possibility.
              </h3>

              <div className="space-y-3 pt-4 border-t border-[#E6E5E0] text-xs">
                <div className="grid grid-cols-3 py-2 border-b border-[#F0EEE6]">
                  <span className="text-[#8E9296]">Product code</span>
                  <span className="col-span-2 font-mono font-medium text-[#1E2226]">
                    {activeSwatch.code}
                  </span>
                </div>
                <div className="grid grid-cols-3 py-2 border-b border-[#F0EEE6]">
                  <span className="text-[#8E9296]">Collection</span>
                  <span className="col-span-2 text-[#1E2226]">
                    HiStrong Bamboo Fibre Panel (BFP)
                  </span>
                </div>
                <div className="grid grid-cols-3 py-2 border-b border-[#F0EEE6]">
                  <span className="text-[#8E9296]">Finish</span>
                  <span className="col-span-2 text-[#1E2226]">
                    {activeSwatch.nameZh} {activeSwatch.name}
                  </span>
                </div>
                <div className="grid grid-cols-3 py-2 border-b border-[#F0EEE6]">
                  <span className="text-[#8E9296]">Material</span>
                  <span className="col-span-2 text-[#1E2226]">
                    Bamboo fibre panel (ENF Non-Toxic)
                  </span>
                </div>
                <div className="grid grid-cols-3 py-2 border-b border-[#F0EEE6]">
                  <span className="text-[#8E9296]">Project use</span>
                  <span className="col-span-2 text-[#1E2226]">
                    Interior walls & ceilings — confirm suitability
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#8E9296] italic">
                Need dimensions or technical details? Request the current specification for {activeSwatch.code} with your enquiry.
              </p>
            </div>

            {/* Right: Before You Begin (Page 13) */}
            <div className="col-span-6 space-y-6">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block">
                BEFORE YOU BEGIN
              </span>
              <h3 className="font-editorial text-3xl font-normal text-[#1E2226]">
                From selection to installation.
              </h3>

              <div className="space-y-6 pt-4 border-t border-[#E6E5E0]">
                <div className="flex items-start gap-4">
                  <span className="font-editorial text-2xl font-bold text-[#9E8058]">01</span>
                  <div>
                    <h4 className="font-medium text-sm text-[#1E2226]">Plan your surface</h4>
                    <p className="text-xs text-[#52565B] mt-1 leading-relaxed">
                      Share your wall or ceiling dimensions, site photos and intended layout so the team can advise on quantity and suitability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-editorial text-2xl font-bold text-[#9E8058]">02</span>
                  <div>
                    <h4 className="font-medium text-sm text-[#1E2226]">Confirm the installation details</h4>
                    <p className="text-xs text-[#52565B] mt-1 leading-relaxed">
                      Ask for the current product specifications, fixing method, trims and substrate requirements before work begins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-editorial text-2xl font-bold text-[#9E8058]">03</span>
                  <div>
                    <h4 className="font-medium text-sm text-[#1E2226]">Keep the finish considered</h4>
                    <p className="text-xs text-[#52565B] mt-1 leading-relaxed">
                      Review a physical sample in your space and request the recommended cleaning and care instructions for this finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE THE COLLECTION / The same finish. A different rhythm (Page 13) */}
      <section className="py-20 bg-[#1A1D20] text-white border-b border-[#2C3136]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-2">
                EXPLORE THE COLLECTION
              </span>
              <h2 className="font-editorial text-4xl font-normal text-white">
                The same finish.
                <br />
                A different rhythm.
              </h2>
              <p className="text-xs text-[#9EA3A8] mt-2">
                Compare other Nogal profiles to find the expression that suits your space.
              </p>
            </div>
            <button
              onClick={() => onNavigate('product')}
              className="text-xs text-white hover:text-[#9E8058] uppercase font-semibold flex items-center gap-1.5"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div
              onClick={() => {
                setActiveSwatch(DETAIL_SWATCHES[0]);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-white/10 p-5 bg-[#23272B] hover:border-[#9E8058] transition-all cursor-pointer group"
            >
              <div className="overflow-hidden bg-[#1A1D20] mb-4">
                <img
                  src={flutedTexture}
                  alt="HCZ160S-320"
                  className="w-full h-56 object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] text-[#9EA3A8] font-mono block">HCZ160S-320</span>
              <div className="flex items-center justify-between mt-1">
                <h4 className="font-editorial text-lg text-white font-normal">
                  淡雅梧桐 Nogal (160S Fluted)
                </h4>
                <span className="font-mono text-sm text-[#9E8058] font-bold">RM289.00</span>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveSwatch(DETAIL_SWATCHES[3]);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-white/10 p-5 bg-[#23272B] hover:border-[#9E8058] transition-all cursor-pointer group"
            >
              <div className="overflow-hidden bg-[#1A1D20] mb-4">
                <img
                  src={flutedTexture}
                  alt="HCZ145T-320"
                  className="w-full h-56 object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] text-[#9EA3A8] font-mono block">HCZ145T-320</span>
              <div className="flex items-center justify-between mt-1">
                <h4 className="font-editorial text-lg text-white font-normal">
                  淡雅梧桐 Nogal (145T Slim Fluted)
                </h4>
                <span className="font-mono text-sm text-[#9E8058] font-bold">RM198.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S TALK ABOUT YOUR SPACE (Page 13) */}
      <section className="py-16 bg-[#F4F3EE]">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-1">
              LET S TALK ABOUT YOUR SPACE
            </span>
            <h3 className="font-editorial text-3xl font-normal text-[#1E2226]">
              Bring {activeSwatch.name} into your next project.
            </h3>
            <p className="text-xs text-[#52565B] mt-1">
              Share your plans and quote {activeSwatch.code} for product and installation guidance.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#9E8058] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors flex items-center gap-2"
          >
            <span>START A PRODUCT ENQUIRY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
