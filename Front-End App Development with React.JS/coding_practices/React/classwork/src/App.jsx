import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import  Navbar from './components/Navbar'
import Product from './components/Product'


export default function App() {
  const myName='Kalisa'
  return (
    <div className='app'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/product"}element={<Product/>}/>
          <Route path={"/contact"}element={<Contact/>}/>
          <Route path={"/login"}element={<Login/>}/>
        </Routes>
        <footer/>
        </BrowserRouter>
      </div>
  )
}
