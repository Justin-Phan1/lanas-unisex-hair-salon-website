import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Routes>
      <Route path ="/" element = {<Layout />} >
      <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Route>
    </Routes>
  );
}

export default App;
