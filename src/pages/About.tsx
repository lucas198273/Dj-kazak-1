import AboutIntro from '../components/AboutIntro/AboutIntro';
import AboutGallery from '../components/AboutGallery/AboutGallery';
import AboutContact from '../components/AboutContact/AboutContact';
import './About.css'; // novo css da página

export default function About() {
  return (
    <div className="about-page">
      <AboutIntro />
      <AboutGallery />
      <AboutContact />
    </div>
  );
}
