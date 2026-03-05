import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Products from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import CalculatorsPage from './components/CalculatorsPage';
import BlogsPage from './components/BlogsPage';
import BlogDetailPage from './components/BlogDetailPage';
import ContactPage from './components/ContactPage';
import CTA from './components/CTA';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<'home' | 'calculators' | 'blogs' | 'contact'>('home');
  const [activeCalculatorType, setActiveCalculatorType] = useState<string>('sip');
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  useEffect(() => {
    const syncFromLocation = () => {
      const path = window.location.pathname;
      const hash = window.location.hash.replace('#', '');

      if (path === '/download-app' || path === '/dowmload-app') {
        const ua = window.navigator.userAgent.toLowerCase();
        const isAndroid = /android/.test(ua);
        const isIOS = /iphone|ipad|ipod/.test(ua);

        if (isAndroid) {
          window.location.replace('https://play.google.com/store/apps/details?id=com.iw.mint.app&pcampaignid=web_share');
          return;
        }

        if (isIOS) {
          window.location.replace('https://apps.apple.com/in/app/mint-by-investwell/id1479042500');
          return;
        }

        window.location.replace('https://dsinvest.investwell.app/');
        return;
      }

      if (path === '/calculators' || path.startsWith('/calculators/')) {
        setSelectedProductId(null);
        setSelectedBlogId(null);
        setActivePage('calculators');
        setActiveAnchor(null);

        const type = path.split('/')[2];
        if (type) setActiveCalculatorType(type);
        return;
      }

      if (path === '/blogs') {
        setSelectedProductId(null);
        setSelectedBlogId(null);
        setActivePage('blogs');
        setActiveAnchor(null);
        return;
      }

      if (path === '/contact') {
        setSelectedProductId(null);
        setSelectedBlogId(null);
        setActivePage('contact');
        setActiveAnchor(null);
        return;
      }

      const homeAnchorFromPath = path !== '/' ? path.replace(/^\/+|\/+$/g, '') : '';
      const resolvedAnchor = hash || homeAnchorFromPath;

      setActivePage('home');
      setSelectedBlogId(null);
      setActiveAnchor(resolvedAnchor || null);

      if (resolvedAnchor) {
        setTimeout(() => {
          const section = document.getElementById(resolvedAnchor);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 0);
      }
    };

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  useEffect(() => {
    if (selectedProductId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProductId]);

  useEffect(() => {
    if (selectedBlogId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedBlogId]);

  useEffect(() => {
    if (activePage === 'calculators' || activePage === 'blogs' || activePage === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePage]);

  const handleNavigate = (target: 'home' | 'calculators' | 'blogs' | 'contact', anchorId?: string) => {
    if (target === 'calculators') {
      setSelectedProductId(null);
      setSelectedBlogId(null);
      setActivePage('calculators');
      setActiveAnchor(null);

      if (anchorId) {
        setActiveCalculatorType(anchorId);
        window.history.pushState(null, '', `/calculators/${anchorId}`);
      } else {
        window.history.pushState(null, '', '/calculators');
      }
      return;
    }

    if (target === 'blogs') {
      setSelectedProductId(null);
      setSelectedBlogId(null);
      setActivePage('blogs');
      setActiveAnchor(null);
      window.history.pushState(null, '', '/blogs');
      return;
    }

    if (target === 'contact') {
      setSelectedProductId(null);
      setSelectedBlogId(null);
      setActivePage('contact');
      setActiveAnchor(null);
      window.history.pushState(null, '', '/contact');
      return;
    }

    setActivePage('home');
    setSelectedBlogId(null);
    setActiveAnchor(anchorId || null);

    if (!anchorId) {
      window.history.pushState(null, '', '/');
    }

    if (anchorId) {
      setTimeout(() => {
        window.history.pushState(null, '', `/${anchorId}`);
        const section = document.getElementById(anchorId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  };

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={`font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col`}>
        <Header onNavigate={handleNavigate} activePage={activePage} activeAnchor={activeAnchor} hasProductDetail={Boolean(selectedProductId)} />
        <main className="flex-grow">
          {activePage === 'calculators' ? (
            <CalculatorsPage initialType={activeCalculatorType} />
          ) : activePage === 'blogs' ? (
            selectedBlogId ? (
              <BlogDetailPage
                blogId={selectedBlogId}
                onBack={() => setSelectedBlogId(null)}
              />
            ) : (
              <BlogsPage onSelectBlog={setSelectedBlogId} />
            )
          ) : activePage === 'contact' ? (
            <ContactPage />
          ) : selectedProductId ? (
            <ProductDetailPage
              productId={selectedProductId}
              onBack={() => setSelectedProductId(null)}
            />
          ) : (
            <>
              <Hero />
              <Features />
              <Services />
              <Products onSelectProduct={setSelectedProductId} />
              <CTA />
              <Resources onViewAll={() => handleNavigate('blogs')} />
              <FAQ />
            </>
          )}
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
};

export default App;