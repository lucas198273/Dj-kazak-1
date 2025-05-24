import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './pages/About';
import MusicSection from './components/MusicSection/MusicSection';
import SocialMediaSection from './components/SocialMediaSection/SocialMediaSection';
import Footer from './components/Footer/Footer';
import AboutVideos from './components/AboutVideos/AboutVideos';
export default function App() {
  
  return (
    <Router>
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
