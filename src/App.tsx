import Header from './components/Header';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import Container from './components/Container';
import GallerySection from './components/home/GallerySection';
import { EmblaCarousel } from './components/home/EmblaCarousel';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header position="fixed" />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <EmblaCarousel />
      <Footer />
    </>
  );
}

export default App;
