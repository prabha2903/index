import React from 'react'
import Profile from './components/Profile.jsx'
import State from './hooks/State.jsx'
import Parent from './components/Parent.jsx'
import Form from './hooks/Form.jsx'
import Home  from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

const App = () => {
  return (
   <>
   <Navbar />
   <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/products" element={<Products/>}/>
   <Route path="/products/:id" element={<ProductDetails/>}/>
   </Routes>
   {/*<Profile name="PRABHA" age={20} skills={["HTML","CSS","JS","JAVA","PYTHON"]} />
   <Parent />
   <State/>
   <Form />*/}
   </>
  )
}

export default App