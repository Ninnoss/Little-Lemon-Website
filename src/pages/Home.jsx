import Hero from '../components/HomePage/Hero';
import Highlights from '../components/HomePage/Highlights';
import Testimonials from '../components/HomePage/Testimonials/Testimonials';
import AboutUs from '../components/HomePage/AboutUs';

const Home = () => {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <AboutUs />
    </main>
  );
};

export default Home;
