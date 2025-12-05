import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import AdiYuvanDashboard from './dashboard'
// import Overview from './Overview'
import Overview from './Overview'
import Navbar from './Navbar'
 import { Routes, Route } from 'react-router-dom'
 import Donate from './Donate'
function App() {

  return (
    <>
     {/* <h1 className='bg-red-50' > This is a Ngo website Dashboard </h1> */}
        <Navbar/>
      <Routes>
        <Route path='/' element = { <AdiYuvanDashboard/> } />
        <Route path='/about' element = { <Overview/> } />
        <Route path='/events' element = { <Overview/> } />
        <Route path='/donate' element = { <Donate/> } />
        <Route path='/centers' element = { <AdiYuvanDashboard/> } />

      </Routes>
    

    </>
  )
}

export default App
