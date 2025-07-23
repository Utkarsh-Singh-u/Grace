import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Services from './Pages/Services';
import GalleryPage from './Pages/Gallery';
import ContactPage from './Pages/Contact';
import BlogPage from './Pages/Blog';
import BlogDetailPage from './Pages/BlogDetail';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className='relative'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<BlogDetailPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
