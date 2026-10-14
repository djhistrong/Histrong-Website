import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageId, ProductCategory } from '../types';

interface FooterProps {
  onNavigate: (page: PageId, category?: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#191D21] text-[#9EA3A8] pt-16 pb-12 text-sm border-t border-[#292D32]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12 pb-16 border-b border-[#2C3136]">
          {/* Col 1: Brand & Tagline */}
          <div className="col-span-4 pr-8">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-baseline gap-2.5 text-left mb-6 group focus:outline-none"
            >
              <span className="font-editorial text-2xl font-bold tracking-tight text-white group-hover:text-[#9E8058] transition-colors">
                HISTRONG
              </span>
              <span className="text-xl font-bold text-white tracking-wider">海创</span>
            </button>
            <p className="text-sm text-[#878D94] leading-relaxed max-w-sm">
              Bamboo fibre panels for considered interior walls and ceilings.
            </p>
          </div>

          {/* Col 2: Explore */}
          <div className="col-span-2">
            <h4 className="text-[11px] font-semibold tracking-wider text-white uppercase mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#878D94]">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('project')}
                  className="hover:text-white transition-colors"
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product')}
                  className="hover:text-white transition-colors"
                >
                  Product
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Collection */}
          <div className="col-span-3">
            <h4 className="text-[11px] font-semibold tracking-wider text-white uppercase mb-4">
              OUR COLLECTION
            </h4>
            <ul className="space-y-2.5 text-xs text-[#878D94]">
              <li>
                <button
                  onClick={() => onNavigate('product', 'bfp')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bamboo Fibre Panel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product', 'fluted')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bamboo Fiber Fluted Panel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product', 'ceiling')}
                  className="hover:text-white transition-colors text-left"
                >
                  Integrated Aluminium Ceiling
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div className="col-span-3">
            <h4 className="text-[11px] font-semibold tracking-wider text-white uppercase mb-4">
              GET IN TOUCH
            </h4>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#9E8058] transition-colors mb-5 font-medium"
            >
              <span>Contact HiStrong</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-3.5 text-xs text-[#878D94]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors font-serif font-bold text-sm"
              >
                f
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-xs font-semibold"
              >
                in
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-sm"
              >
                ◎
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-xs"
              >
                ×
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex items-center justify-between text-xs text-[#6A7077]">
          <p>© 2026 HiStrong. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
