import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components//Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />
        <Route
          path="/reservation"
          element={<Reservation />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
