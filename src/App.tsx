import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import GallerySection from './components/home/GallerySection';
import { EmblaCarousel } from './components/PartnersSlider';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header position="fixed" />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
