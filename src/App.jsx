// import { Route, Routes } from 'react-router-dom';
import Navbar from './components//Navigation/Navbar';
import './App.css';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
// import images from './data/images';
// import { FaReact } from 'react-icons/fa';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
      </main>
    </>
  );
}

export default App;

/* <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes> */
