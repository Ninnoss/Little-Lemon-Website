// import { Route, Routes } from 'react-router-dom';
import Navbar from './components//Navigation/Navbar';
import './App.css';
import Footer from './components/Navigation/Footer';
// import images from './data/images';
// import { FaReact } from 'react-icons/fa';

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="bg-red-300 text-blue-600 font-bold flex justify-center items-center space-x-10 tracking-wider text-4xl h-[20rem] uppercase">
        <p>Start here!</p>
        <img src={images.lemonDessert}></img>
        <FaReact size={'5rem'} />
      </div> */}
      <Footer />
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
