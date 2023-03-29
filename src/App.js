// import React, { useState, useEffect } from "react";
import { Header, Footer } from "./components";
import {Routes, Route} from "react-router-dom"
import { ListingPage, CartPage } from "./pages";
export default function App() {
  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element = {<ListingPage/>} />
        <Route path="/cart" element = {<CartPage/>} />
      </Routes>
      <Footer />
    </div>
  )
}
