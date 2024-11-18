import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from '../src/components/Header';
import AboutSection from './pages/AboutSection';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import OrderSummary from './pages/OrderSummary';
import Products from './pages/Products';
import NewFile from './pages/NewFile';
import Features from './pages/Features';
import Footer from './components/Footer';
// import ColorFillBox from '../src/ColorFillBox';

const App = () => {
  return (
    <div>
      <div className='min-h-20'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />}>
          Home
        </Route>
        <Route path='/about' element={<AboutSection />}>
          About
        </Route>
        <Route path='/projects' element={<Projects />}>
          Projects
        </Route>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='product' element={<Products />}>
          <Route path='new' element={<NewFile />} />
          <Route path='feature' element={<Features />} />
        </Route>

        {/* 404 Route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
