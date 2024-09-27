import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Logout from '../components/logout/LogOut'
import ProductDetails from '../components/productdetails/ProductDetails'

function RoutesLayout() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/product/:id' element={<ProductDetails/>} /> 
        {/* id is the dynamic segment of the route */}
      </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default RoutesLayout