import Hero from '../components/HomePage/Hero';
import Highlights from '../components/HomePage/Highlights';
import Testimonials from '../components/HomePage/Testimonials/Testimonials';
import AboutUs from '../components/HomePage/AboutUs';
import RestaurantVideo from '../components/HomePage/RestaurantVideo';
import BloomerangForm from '../components/HomePage/BloomerangForm';

const Home = () => {
  return (
    <main>
      <Hero />
      <BloomerangForm />
      <Highlights />
      <Testimonials />
      <RestaurantVideo />
      <AboutUs />
    </main>
  );
};

export default Home;
