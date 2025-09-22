import HeroSection from './components/features/HeroSection.jsx';
import AboutSection from './components/features/AboutSection.jsx';
import FeaturesSection from './components/features/FeaturesSection.jsx';
import ProductDetailsSection from './components/features/ProductDetailsSection.jsx';
import FullScreenImageSection from './components/features/FullScreenImageSection.jsx';
import TestimonialsSection from './components/features/TestimonialsSection.jsx';
import ProductsSection from './components/features/ProductsSection.jsx';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductDetailsSection />
      <FullScreenImageSection />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
