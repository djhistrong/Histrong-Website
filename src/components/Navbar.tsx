import React, { useState } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { PageId, ProductCategory } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, category?: ProductCategory) => void;
  shortlistCount: number;
  onOpenShortlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  shortlistCount,
  onOpenShortlist,
}) => {
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6E5E0] transition-colors">
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-baseline gap-2.5 text-left group focus:outline-none"
        >
          <span className="font-editorial text-2xl font-bold tracking-tight text-[#165089] group-hover:text-[#0f3c69] transition-colors">
            HISTRONG
          </span>
          <span className="text-xl font-bold text-[#165089] tracking-wider">海创</span>
        </button>

        {/* Desktop Primary Navigation Links */}
        <nav className="flex items-center gap-9 text-[13px] font-medium tracking-wide uppercase">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors py-2 relative ${
              currentPage === 'home'
                ? 'text-[#1E2226] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                : 'text-[#6A6D71] hover:text-[#1E2226]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors py-2 relative ${
              currentPage === 'about'
                ? 'text-[#1E2226] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                : 'text-[#6A6D71] hover:text-[#1E2226]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => onNavigate('project')}
            className={`transition-colors py-2 relative ${
              currentPage === 'project'
                ? 'text-[#1E2226] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                : 'text-[#6A6D71] hover:text-[#1E2226]'
            }`}
          >
            Project
          </button>

          {/* Product with Category Submenu */}
          <div
            className="relative"
            onMouseEnter={() => setProductMenuOpen(true)}
            onMouseLeave={() => setProductMenuOpen(false)}
          >
            <button
              onClick={() => onNavigate('product')}
              className={`flex items-center gap-1.5 transition-colors py-2 relative ${
                currentPage === 'product' || currentPage === 'product-detail'
                  ? 'text-[#1E2226] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                  : 'text-[#6A6D71] hover:text-[#1E2226]'
              }`}
            >
              <span>Product</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
            </button>

            {productMenuOpen && (
              <div className="absolute top-full left-0 w-80 bg-white border border-[#E6E5E0] shadow-xl py-3 z-50 text-xs">
                <div className="px-4 py-1.5 text-[10px] font-semibold tracking-wider text-[#9E8058] uppercase">
                  Main Categories
                </div>
                <button
                  onClick={() => {
                    onNavigate('product', 'bfp');
                    setProductMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-[#F8F8F5] text-[#1E2226] font-medium transition-colors flex items-center justify-between"
                >
                  <span>Bamboo Fibre Panel (BFP)</span>
                  <span className="text-[10px] text-[#9E8058]">18 Finishes</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('product', 'fluted');
                    setProductMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-[#F8F8F5] text-[#1E2226] font-medium transition-colors flex items-center justify-between"
                >
                  <span>Bamboo Fiber Fluted Panel 海创竹木格栅板</span>
                  <span className="text-[10px] text-[#9E8058]">Fluted</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('product', 'ceiling');
                    setProductMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-[#F8F8F5] text-[#1E2226] font-medium transition-colors flex items-center justify-between"
                >
                  <span>Integrated Aluminium Ceiling</span>
                  <span className="text-[10px] text-[#9E8058]">Ceilings</span>
                </button>

                <div className="my-2 border-t border-[#E6E5E0]"></div>

                <div className="px-4 py-1.5 text-[10px] font-semibold tracking-wider text-[#9E8058] uppercase">
                  Featured Product
                </div>
                <button
                  onClick={() => {
                    onNavigate('product-detail');
                    setProductMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#F8F8F5] text-[#1E2226] transition-colors"
                >
                  <p className="font-semibold">HCZ245T-320 淡雅梧桐 Nogal</p>
                  <p className="text-[11px] text-[#6A6D71]">With Interactive Wall Quantity Estimator</p>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className={`transition-colors py-2 relative ${
              currentPage === 'blog'
                ? 'text-[#1E2226] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                : 'text-[#6A6D71] hover:text-[#1E2226]'
            }`}
          >
            Blog
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`transition-colors py-2 relative ${
              currentPage === 'contact'
                ? 'text-[#1E2226] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E2226]'
                : 'text-[#6A6D71] hover:text-[#1E2226]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right side: Social icons, Currency, and Quote Shortlist Cart */}
        <div className="flex items-center gap-5 text-sm">
          {/* Social icons matching PDF */}
          <div className="flex items-center gap-3 text-xs text-[#52565B]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1E2226] transition-colors font-serif font-bold text-sm"
              title="Facebook"
            >
              f
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1E2226] transition-colors font-medium text-xs"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1E2226] transition-colors text-sm"
              title="Instagram"
            >
              ◎
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1E2226] transition-colors font-sans text-xs"
              title="X"
            >
              ×
            </a>
          </div>

          <div className="h-4 w-px bg-[#E6E5E0]"></div>

          {/* Quote Shortlist button with badge */}
          <button
            onClick={onOpenShortlist}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F4F3EE] hover:bg-[#EBE9E1] text-[#1E2226] text-xs font-medium transition-colors"
            title="View Quote Shortlist"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#9E8058]" />
            <span>Shortlist</span>
            {shortlistCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#9E8058] text-white text-[10px] flex items-center justify-center font-bold">
                {shortlistCount}
              </span>
            )}
          </button>

          <span className="text-xs text-[#8E9296] font-mono">RM · EN</span>
        </div>
      </div>
    </header>
  );
};
