'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollReveal from '@/components/ScrollReveal';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setPopupOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('openPopup', handler);
    return () => window.removeEventListener('openPopup', handler);
  }, []);

  const openPopup = () => {
    setPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setPopupOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <Navbar onOpenPopup={openPopup} />
      <main>{children}</main>
      <Footer />
      <Popup isOpen={popupOpen} onClose={closePopup} />
      <FloatingButtons />
      <ScrollReveal />
    </>
  );
}
