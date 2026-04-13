import { Outlet } from 'react-router-dom';
import { CookieBanner } from '@/components/CookieBanner';
import { SeoHead } from '@/components/SeoHead';
import { Header } from './Header';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="db-app">
      <SeoHead />
      <div className="db-app__glow" aria-hidden />
      <Header />
      <main className="db-main">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
