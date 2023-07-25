import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import  ProductList  from './features/product_list/ProductList';
import './App.css';
import Navbar from './features/navbar/Navbar';
import Login from './features/login/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
