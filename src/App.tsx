import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './pages/About';
import MusicSection from './components/MusicSection/MusicSection';
import SocialMediaSection from './components/SocialMediaSection/SocialMediaSection';
import Footer from './components/Footer/Footer';
import AboutVideos from './components/AboutVideos/AboutVideos';
import ScrollTop from './components/ScrollTop/ScrollTop';
import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect } from 'react';

export default function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // tempo das animações em ms
      once: true,     // anima só uma vez
    });
  }, []);
  return (
    <Router>
      <ScrollTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-20 min-h-screen flex flex-col">
              <Hero />
              <AboutVideos />
              <MusicSection />
              <SocialMediaSection />
            </main>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
