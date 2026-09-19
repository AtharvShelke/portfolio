import React, { createContext, useContext, useEffect, useState } from 'react';

export type BrandMode = 'polaris' | 'atharv';

export interface BrandConfig {
  mode: BrandMode;
  name: string;
  fullName: string;
  tagline: string;
  purposeLine: string;
  signOff: string;
  coordinates: string;
  footerKeywords: string[];
  setBrandMode: (mode: BrandMode) => void;
}

const defaultConfig: BrandConfig = {
  mode: 'polaris',
  name: 'POLARIS',
  fullName: 'POLARIS TECHNOLOGIES',
  tagline: 'Technology with direction.',
  purposeLine: 'A clearer path forward.',
  signOff: 'Same direction. A brighter tomorrow.',
  coordinates: '19.0760° N  72.8777° E',
  footerKeywords: ['BUILD', 'ENABLE', 'EMPOWER', 'MOVE FORWARD'],
  setBrandMode: () => {},
};

const BrandContext = createContext<BrandConfig>(defaultConfig);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<BrandMode>('polaris');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const queryBrand = urlParams.get('brand')?.toLowerCase();
      const hostname = window.location.hostname.toLowerCase();

      if (queryBrand === 'atharv' || hostname.includes('atharv-shelke') || hostname.includes('atharv')) {
        setMode('atharv');
      } else {
        setMode('polaris');
      }
    }
  }, []);

  const config: BrandConfig = {
    mode,
    name: mode === 'atharv' ? 'ATHARV' : 'POLARIS',
    fullName: mode === 'atharv' ? 'ATHARV SHELKE' : 'POLARIS TECHNOLOGIES',
    tagline: 'Technology with direction.',
    purposeLine: 'A clearer path forward.',
    signOff: 'Same direction. A brighter tomorrow.',
    coordinates: '19.0760° N  72.8777° E',
    footerKeywords: ['BUILD', 'ENABLE', 'EMPOWER', 'MOVE FORWARD'],
    setBrandMode: (newMode: BrandMode) => setMode(newMode),
  };

  return <BrandContext.Provider value={config}>{children}</BrandContext.Provider>;
};

export const useBrand = () => useContext(BrandContext);
