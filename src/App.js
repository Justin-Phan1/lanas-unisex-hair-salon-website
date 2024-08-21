import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import Reviews from './components/Reviews';

function App() {
  return (
    <Routes>
      <Route path ="/" element = {<Layout />} >
      <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
}

export default App;
