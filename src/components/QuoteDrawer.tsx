import React, { useState } from 'react';
import { X, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';
import { ShortlistItem } from '../types';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ShortlistItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  if (!isOpen) return null;

  const grandTotal = items.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const totalPanels = items.reduce((acc, curr) => acc + curr.panelsCount, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#E6E5E0]">
        {/* Header */}
        <div className="p-6 border-b border-[#E6E5E0] flex items-center justify-between bg-[#FAF9F5]">
          <div>
            <h3 className="font-editorial text-xl font-bold text-[#1E2226]">
              Quote Shortlist
            </h3>
            <p className="text-xs text-[#6A6D71] mt-0.5">
              {items.length} {items.length === 1 ? 'specification' : 'specifications'} added
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[#EBE9E1] text-[#6A6D71] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-editorial text-2xl font-bold text-[#1E2226]">
                Quotation Request Received
              </h4>
              <p className="text-xs text-[#6A6D71] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1E2226]">{formData.name}</strong>. Our HISTRONG technical sales engineer will review your measurements and send an itemized bill of quantities with bracket specifications to <span className="text-[#1E2226]">{formData.email}</span> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClearAll();
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#9E8058] text-white text-xs font-semibold hover:bg-[#856b46] transition-colors uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center text-[#8E9296] space-y-3">
              <p className="text-sm">Your quote shortlist is currently empty.</p>
              <p className="text-xs max-w-xs mx-auto">
                Use the Wall Panel Quantity Estimator on any product detail page to calculate dimensions and add measurements here.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border border-[#E6E5E0] bg-[#FAF9F5] rounded space-y-2 relative"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#9E8058] font-semibold">
                          {item.sku}
                        </span>
                        <h4 className="font-medium text-sm text-[#1E2226]">
                          {item.productCode} — {item.finishName}
                        </h4>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#9EA3A8] hover:text-rose-600 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs text-[#52565B] pt-1 border-t border-[#EBE9E1]">
                      <div>
                        <span className="text-[10px] text-[#8E9296] block">Dimensions:</span>
                        <span className="font-mono font-medium">
                          {item.dimensions.width} × {item.dimensions.height} {item.dimensions.unit}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#8E9296] block">Surface Area:</span>
                        <span className="font-mono font-medium">
                          {item.area} {item.dimensions.unit}²
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#8E9296] block">Panels Needed:</span>
                        <span className="font-mono font-semibold text-[#1E2226]">
                          {item.panelsCount} panels
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="text-[#6A6D71]">
                        RM {item.unitPrice.toFixed(2)} / panel (+{item.wastePercent}% waste allowance)
                      </span>
                      <span className="font-mono font-bold text-[#1E2226]">
                        RM {item.totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quotation inquiry form */}
              <form onSubmit={handleSubmit} className="pt-4 border-t border-[#E6E5E0] space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E2226]">
                  Request Official Quotation
                </h4>

                <div>
                  <label className="text-[11px] font-medium text-[#52565B] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ar. Darren Tan"
                    className="w-full text-xs px-3 py-2 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#52565B] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 12-345 6789"
                      className="w-full text-xs px-3 py-2 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-[#52565B] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="darren@studio.com"
                      className="w-full text-xs px-3 py-2 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-[#52565B] block mb-1">
                    Site Location / Delivery Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. Alam Sari, Bangi, Selangor"
                    className="w-full text-xs px-3 py-2 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 py-3 bg-[#9E8058] hover:bg-[#876c47] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>{submitting ? 'Preparing Request...' : 'Submit Quotation Request'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </>
          )}
        </div>

        {/* Footer Summary */}
        {!submitted && items.length > 0 && (
          <div className="p-6 bg-[#FAF9F5] border-t border-[#E6E5E0] space-y-3">
            <div className="flex items-center justify-between text-xs text-[#52565B]">
              <span>Total Material Estimate:</span>
              <span className="font-mono font-medium">{totalPanels} panels</span>
            </div>
            <div className="flex items-center justify-between text-sm font-bold text-[#1E2226]">
              <span>Estimated Subtotal:</span>
              <span className="font-mono text-base text-[#9E8058]">
                RM {grandTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-[10px] text-[#8E9296] leading-tight">
              * Estimate excludes installation accessories, brackets, trim profiles, and freight.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
