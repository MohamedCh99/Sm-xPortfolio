import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Work from '../Components/Work/Work';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Projects from '../Components/Projects/Projects';
import SmeexYt from '../Components/Pages/SmeexYt';
import ItBudnet from '../Components/Pages/ItBudnet';
import Spotify from '../Components/Pages/Spotify';
import NetMovie from '../Components/Pages/NetMovie';
import BarRecherche from '../Components/Pages/BarRecherche';
import FitClub from '../Components/Pages/FitClub';
import Product from '../Components/Pages/Product';
import LandingPage from '../Components/Pages/LandingPage';
const AnimateRoutes = () => {
  const Location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/work" element={<Work />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/project" element={<Projects />}></Route>
      <Route path="/smeexyt" element={<SmeexYt />}></Route>
      <Route path="/itbudnet" element={<ItBudnet />}></Route>
      <Route path="/spotifyclone" element={<Spotify />}></Route>
      <Route path="/netmovie" element={<NetMovie />}></Route>
      <Route path="/searchbar" element={<BarRecherche />}></Route>
      <Route path="/fitclub" element={<FitClub />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/landingpage" element={<LandingPage />}></Route>
    </Routes>
  );
};

export default AnimateRoutes;
