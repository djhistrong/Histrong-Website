export type PageId =
  | 'home'
  | 'about'
  | 'project'
  | 'services'
  | 'product'
  | 'product-detail'
  | 'blog'
  | 'contact';

export type ProductCategory =
  | 'bfp'
  | 'fluted'
  | 'ceiling';

export interface ProductFinish {
  id: string;
  name: string;
  nameZh: string;
  code: string;
  sku: string;
  price: number;
  colorHex: string;
  tone: 'Light & natural' | 'Warm & medium' | 'Dark & rich';
  finishClass: 'Wood grain' | 'Stone effect' | 'Solid colour';
}

export interface ProductItem {
  id: string;
  code: string;
  nameZh: string;
  nameEn: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number | null;
  isPriceOnInquiry?: boolean;
  finishType: 'Wood grain' | 'Stone effect' | 'Solid colour';
  colorTone: 'Light & natural' | 'Warm & medium' | 'Dark & rich';
  swatches: ProductFinish[];
  isNew?: boolean;
  isConceptPreview?: boolean;
}

export interface ShortlistItem {
  id: string;
  productCode: string;
  productName: string;
  finishName: string;
  sku: string;
  dimensions: {
    width: number;
    height: number;
    unit: 'm' | 'ft';
  };
  area: number;
  wastePercent: number;
  panelsCount: number;
  unitPrice: number;
  totalPrice: number;
  dateAdded: string;
}

export interface BranchLocation {
  id: 'hq' | 'shanghai' | 'penang';
  name: string;
  tabLabel: string;
  regNo?: string;
  address: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  wazeUrl: string;
  googleMapsUrl: string;
  operatingHours: string;
  closedDay: string;
}
