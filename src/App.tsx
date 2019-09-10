import React from 'react';
import { MainLayout } from './components/MainLayout';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <MainLayout
      renderFooter={() => <Footer />}
      renderHeader={() => <Header text='Hello Martin' />}
    />
  );
}
