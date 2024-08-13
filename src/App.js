import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import Info from './components/Info';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';

function App() {
  return (
    <Routes>
      <Route path ="/" element = {<Layout />} >
      <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="info" element={<Info />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
}

export default App;
