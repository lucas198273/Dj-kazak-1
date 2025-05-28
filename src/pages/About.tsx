import AboutIntro from '../components/AboutIntro/AboutIntro';
import AboutGallery from '../components/AboutGallery/AboutGallery';
import SocialMediaSection from '../components/SocialMediaSection/SocialMediaSection';
import './About.css'; // novo css da página

export default function About() {
  return (
    <div className="about-page">
      <AboutIntro />
      <AboutGallery />
      <SocialMediaSection />
    </div>
  );
}
