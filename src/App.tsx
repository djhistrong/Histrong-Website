import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteDrawer } from './components/QuoteDrawer';
import { ZoomModal } from './components/ZoomModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectPage } from './pages/ProjectPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductPage } from './pages/ProductPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PageId, ProductCategory, ShortlistItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProductCategory, setSelectedProductCategory] = useState<ProductCategory>('bfp');
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);

  // Shortlist items
  const [shortlistItems, setShortlistItems] = useState<ShortlistItem[]>([
    {
      id: 'init-1',
      productCode: 'HCZ245T-320',
      productName: '淡雅梧桐 Nogal',
      finishName: 'Nogal',
      sku: 'HS-BFP-NG245',
      dimensions: { width: 4.0, height: 2.8, unit: 'm' },
      area: 11.2,
      wastePercent: 5,
      panelsCount: 4,
      unitPrice: 289.0,
      totalPrice: 1156.0,
      dateAdded: '2026-10-14',
    },
  ]);

  // Image Zoom Modal state
  const [zoomState, setZoomState] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const handleNavigate = (page: PageId, category?: ProductCategory) => {
    if (category) {
      setSelectedProductCategory(category);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenZoom = (url: string, title: string, subtitle?: string) => {
    setZoomState({
      isOpen: true,
      url,
      title,
      subtitle,
    });
  };

  const handleCloseZoom = () => {
    setZoomState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleAddToShortlist = (item: Omit<ShortlistItem, 'id' | 'dateAdded'>) => {
    const newItem: ShortlistItem = {
      ...item,
      id: `item-${Date.now()}`,
      dateAdded: new Date().toISOString().split('T')[0],
    };
    setShortlistItems((prev) => [newItem, ...prev]);
    setIsQuoteDrawerOpen(true);
  };

  const handleRemoveShortlistItem = (id: string) => {
    setShortlistItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearShortlist = () => {
    setShortlistItems([]);
  };

  // Render current view
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenZoom={handleOpenZoom} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenZoom={handleOpenZoom} />;
      case 'project':
        return <ProjectPage onNavigate={handleNavigate} onOpenZoom={handleOpenZoom} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenZoom={handleOpenZoom} />;
      case 'product':
        return (
          <ProductPage
            key={selectedProductCategory}
            initialCategory={selectedProductCategory}
            onNavigate={handleNavigate}
            onOpenZoom={handleOpenZoom}
          />
        );
      case 'product-detail':
        return (
          <ProductDetailPage
            onNavigate={handleNavigate}
            onOpenZoom={handleOpenZoom}
            onAddToShortlist={handleAddToShortlist}
          />
        );
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} onOpenZoom={handleOpenZoom} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenZoom={handleOpenZoom} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E2226] selection:bg-[#9E8058] selection:text-white">
      {/* Strict Top Navigation Bar matching PDF */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        shortlistCount={shortlistItems.length}
        onOpenShortlist={() => setIsQuoteDrawerOpen(true)}
      />

      {/* Main Content with smooth page transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Strict Footer matching PDF */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Quote Shortlist Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={shortlistItems}
        onRemoveItem={handleRemoveShortlistItem}
        onClearAll={handleClearShortlist}
      />

      {/* Image Inspection Zoom Modal */}
      <ZoomModal
        isOpen={zoomState.isOpen}
        onClose={handleCloseZoom}
        imageUrl={zoomState.url}
        title={zoomState.title}
        subtitle={zoomState.subtitle}
      />
    </div>
  );
}
