import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";
import GallerySection from "./components/home/GallerySection";
import { EmblaCarousel } from "./components/home/EmblaCarousel";
import Footer from "./components/Footer";

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
