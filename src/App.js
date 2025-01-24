import { Helmet } from 'react-helmet';
import './App.scss';
import Nav from './componets/Nav';
import Home from './pages/landingpage/Home';
import Footer from './componets/Footer';
import LoadingAnim from './componets/LoadingAnim';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './scroll-to-top/ScrollToTop';

// Lazy loading components for better performance
const PortfolioService = lazy(() => import('./pages/landingpage/PortfoiloService'));
const ExpertAdvisor = lazy(() => import('./pages/landingpage/ExpertAdvisor'));
const ContactUs = lazy(() => import('./pages/landingpage/ContactUs'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation for 4 seconds
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {/* Preloading fonts */}
      <Helmet>
        <meta name="robots" content="index, follow"/>
        <meta name="description" content="Prefex Solution is a group of professional traders and financial advisors, well-versed in the alpha and omega of various assets in the International Financial Market." />
        <meta name="keywords" content="Prefex Solution, trading, financial advisors, international financial market, portfolio management" />
        <meta name="author" content="Prefex Solution" />
        <title>Prefex Solution - Professional Traders & Financial Advisors</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" />
      </Helmet>

      {loading && <LoadingAnim />}
      <ScrollToTop />
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-service" element={<PortfolioService />} />
          <Route path="/expert-advisor" element={<ExpertAdvisor />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
