import React from 'react';
import { X } from 'lucide-react';

interface ZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle?: string;
}

export const ZoomModal: React.FC<ZoomModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-8 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] bg-[#1E2226] text-white rounded overflow-hidden shadow-2xl flex flex-col"
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10 bg-[#14171A]">
          <div>
            <h4 className="font-editorial text-lg font-bold text-white">{title}</h4>
            {subtitle && <p className="text-xs text-[#9EA3A8]">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-black/40">
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-[75vh] object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
