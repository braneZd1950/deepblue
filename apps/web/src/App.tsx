import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/pages/HomePage';
//import { BookingPage } from '@/pages/BookingPage';
import { PricelistPage } from '@/pages/PricelistPage';
import { GalleryPage } from '@/pages/GalleryPage';
//import { ProfilePage } from '@/pages/ProfilePage';
import { CookiesPage } from '@/pages/legal/CookiesPage';
import { PrivacyPage } from '@/pages/legal/PrivacyPage';
import { TermsPage } from '@/pages/legal/TermsPage';
import { ContactPage } from '@/pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
         {/*} <Route path="/rezervacije" element={<BookingPage />} /> */}
          <Route path="/cjenik" element={<PricelistPage />} />
          <Route path="/galerija" element={<GalleryPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          {/*} <Route path="/profil" element={<ProfilePage />} /> */}
          <Route path="/pravila-privatnosti" element={<PrivacyPage />} />
          <Route path="/uvjeti-koristenja" element={<TermsPage />} />
          <Route path="/kolacici" element={<CookiesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
