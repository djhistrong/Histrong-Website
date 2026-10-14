import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, Upload } from 'lucide-react';
import { BRANCHES } from '../data/mockData';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<'hq' | 'shanghai' | 'penang'>('hq');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setFormSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
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
            <span className="text-[#1E2226]">Contact Us</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-7">
              <span className="text-[11px] font-semibold tracking-widest text-[#9E8058] uppercase block mb-3">
                START A CONVERSATION
              </span>
              <h1 className="font-editorial text-5xl lg:text-6xl font-normal text-[#1E2226]">
                Contact Us
              </h1>
            </div>
            <div className="col-span-5">
              <p className="text-sm text-[#52565B] leading-relaxed max-w-md">
                Thoughtful spaces begin with a conversation. Get in touch for product enquiries, project advice or a visit to HiStrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Tabs (Page 19) */}
      <section className="bg-white border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex border-b border-[#E6E5E0]">
            {BRANCHES.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`py-3.5 px-6 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                  selectedBranchId === branch.id
                    ? 'border-[#1E2226] text-white bg-[#1E2226]'
                    : 'border-transparent text-[#6A6D71] hover:text-[#1E2226] hover:bg-[#FAF9F5]'
                }`}
              >
                {branch.tabLabel}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Two Columns: Branch Details & Contact Form */}
      <section className="py-16 border-b border-[#E6E5E0]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-start">
            {/* Left Column: Branch Info Card */}
            <div className="col-span-5 p-8 bg-[#F4F3EE] border border-[#E6E5E0] space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#9E8058] uppercase block mb-1">
                  {selectedBranchId === 'hq'
                    ? 'MALAYSIA · HQ'
                    : selectedBranchId === 'shanghai'
                    ? 'CHINA · SHANGHAI BRANCH'
                    : 'MALAYSIA · NORTHERN KIOSK'}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#1E2226]">
                  {activeBranch.name}
                </h3>
                {activeBranch.regNo && (
                  <p className="text-[10px] text-[#8E9296] font-mono mt-0.5">
                    {activeBranch.regNo}
                  </p>
                )}
              </div>

              <div className="space-y-2 text-xs text-[#52565B]">
                <p className="leading-relaxed">{activeBranch.address}</p>
                <div className="flex items-center gap-4 pt-1 font-semibold text-[#1E2226]">
                  <a
                    href={activeBranch.wazeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#9E8058] flex items-center gap-1 transition-colors"
                  >
                    <span>Waze</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span>·</span>
                  <a
                    href={activeBranch.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#9E8058] flex items-center gap-1 transition-colors"
                  >
                    <span>Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E0DED4] space-y-3">
                <div>
                  <span className="text-[10px] uppercase text-[#8E9296] block">Contact No</span>
                  <a
                    href={`tel:${activeBranch.phone}`}
                    className="font-editorial text-2xl font-bold text-[#1E2226] hover:text-[#9E8058] transition-colors"
                  >
                    {activeBranch.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-[#8E9296] block">Email Address</span>
                  <a
                    href={`mailto:${activeBranch.email}`}
                    className="text-xs text-[#52565B] hover:underline"
                  >
                    {activeBranch.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${activeBranch.whatsappNumber}?text=Hello%20HISTRONG,%20I%20would%20like%20to%20enquire%20about%20bamboo%20fibre%20panels.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-[#EBE9E1] hover:bg-[#E0DDD3] text-[#1E2226] text-xs font-semibold border border-[#D5D4CE] rounded-xs transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>WhatsApp Us · Click to chat</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6A6D71]" />
                </a>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-[#E0DED4] text-xs space-y-1">
                <span className="text-[10px] uppercase font-semibold text-[#8E9296] block mb-1">
                  Operating Hours
                </span>
                <div className="flex items-center justify-between text-[#52565B]">
                  <span>Monday - Saturday</span>
                  <span className="font-mono text-[#1E2226] font-medium">9:00 AM - 5:30 PM</span>
                </div>
                <div className="flex items-center justify-between text-[#8E9296]">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <p className="text-[10px] text-[#8E9296] italic pt-1">
                  *{activeBranch.closedDay}
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Project Inquiry Form */}
            <div className="col-span-7 bg-white p-8 border border-[#E6E5E0] shadow-xs">
              <h2 className="font-editorial text-3xl font-normal text-[#1E2226] mb-1">
                Let’s discuss your project
              </h2>
              <p className="text-xs text-[#6A6D71] mb-6">
                Leave us a message and our team will be in touch.
              </p>

              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-editorial text-2xl font-bold text-[#1E2226]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-[#52565B] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1E2226]">{formData.name}</strong>. Our specification consultant for {activeBranch.name} will reach out to you at {formData.email} or {formData.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                      setFileName(null);
                    }}
                    className="text-xs font-semibold text-[#9E8058] underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">Name*</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name here"
                      className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#52565B] font-medium mb-1">Contact Number*</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter contact number here"
                        className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#52565B] font-medium mb-1">Email*</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email address here"
                        className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                      />
                    </div>
                  </div>

                  {/* Upload file simulated picker */}
                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">
                      Upload File (optional)
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="px-4 py-2 border border-[#D5D4CE] bg-[#FAF9F5] hover:bg-[#EBE9E1] rounded text-xs font-medium text-[#1E2226] cursor-pointer flex items-center gap-1.5 transition-colors">
                        <Upload className="w-3.5 h-3.5 text-[#9E8058]" />
                        <span>Choose Files</span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png,.dwg"
                        />
                      </label>
                      <span className="text-xs text-[#8E9296]">
                        {fileName ? fileName : 'No file chosen'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#52565B] font-medium mb-1">Message (optional)</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter message here"
                      className="w-full px-3.5 py-2.5 border border-[#D5D4CE] rounded bg-white focus:outline-none focus:border-[#9E8058]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#8E9296]">* Required fields</span>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#9E8058] text-white font-semibold uppercase tracking-wider hover:bg-[#856b46] transition-colors flex items-center gap-2"
                    >
                      <span>Send Message</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* KEEP IN TOUCH & Social Matrix (Page 19) */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* QR Code Block */}
            <div className="col-span-4 flex items-center gap-6 p-6 bg-white border border-[#E6E5E0] shadow-2xs">
              <div className="w-28 h-28 bg-[#1E2226] p-2 flex items-center justify-center shrink-0">
                {/* Clean SVG QR Representation */}
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <rect x="0" y="0" width="30" height="30" />
                  <rect x="5" y="5" width="20" height="20" fill="#1E2226" />
                  <rect x="10" y="10" width="10" height="10" />

                  <rect x="70" y="0" width="30" height="30" />
                  <rect x="75" y="5" width="20" height="20" fill="#1E2226" />
                  <rect x="80" y="10" width="10" height="10" />

                  <rect x="0" y="70" width="30" height="30" />
                  <rect x="5" y="75" width="20" height="20" fill="#1E2226" />
                  <rect x="10" y="80" width="10" height="10" />

                  <rect x="40" y="10" width="20" height="10" />
                  <rect x="40" y="30" width="10" height="40" />
                  <rect x="60" y="40" width="30" height="10" />
                  <rect x="55" y="60" width="15" height="15" />
                  <rect x="75" y="80" width="25" height="20" />
                </svg>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E8058] block mb-1">
                  KEEP IN TOUCH
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1E2226]">
                  Scan here to add contact
                </h4>
                <p className="text-xs text-[#6A6D71] mt-1 leading-snug">
                  Save HiStrong’s details for your next project.
                </p>
              </div>
            </div>

            {/* Official Website & Social Channels Matrix (Page 19) */}
            <div className="col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E5E0]">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8E9296] block">
                    Official Website
                  </span>
                  <a
                    href="https://www.myhistrong.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-editorial text-2xl font-bold text-[#1E2226] hover:text-[#9E8058] transition-colors flex items-center gap-1.5"
                  >
                    <span>www.myhistrong.com</span>
                    <ArrowUpRight className="w-4 h-4 text-[#9E8058]" />
                  </a>
                </div>

                <button
                  onClick={() => onNavigate('home')}
                  className="text-xs text-[#6A6D71] hover:text-[#1E2226] flex items-center gap-1"
                >
                  <span>Sitemap</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Social links grid */}
              <div className="grid grid-cols-4 gap-4 text-xs font-medium text-[#52565B]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-[#E6E5E0] hover:border-[#9E8058] hover:text-[#1E2226] transition-colors flex items-center justify-between"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9296]" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-[#E6E5E0] hover:border-[#9E8058] hover:text-[#1E2226] transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9296]" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-[#E6E5E0] hover:border-[#9E8058] hover:text-[#1E2226] transition-colors flex items-center justify-between"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9296]" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-[#E6E5E0] hover:border-[#9E8058] hover:text-[#1E2226] transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9296]" />
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-[#E6E5E0] hover:border-[#9E8058] hover:text-[#1E2226] transition-colors flex items-center justify-between"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9296]" />
                </a>

                <a
                  href="https://xiaohongshu.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-[#E6E5E0] hover:border-[#9E8058] hover:text-[#1E2226] transition-colors flex items-center justify-between"
                >
                  <span>小红书</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9296]" />
                </a>

                <a
                  href="https://lemon8.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-[#E6E5E0] hover:border-[#9E8058] hover:text-[#1E2226] transition-colors flex items-center justify-between"
                >
                  <span>Lemon8</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9296]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
