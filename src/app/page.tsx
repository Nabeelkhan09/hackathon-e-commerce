import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Properties from './components/properties'
import Product from './components/product'
import Items from './components/items'
import Signup from './components/signup'
import Features from './components/features'
import Footer from './components/footer'




export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Properties />
      <Product />
      <Items />
      <Signup />
      <Features />
      <Footer />
    </div>
  )
}