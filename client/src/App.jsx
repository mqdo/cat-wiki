import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Home, Wiki, Top, Error, Footer } from './components'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/breed/:id' element={<Wiki />} />
        <Route path='/top' element={<Top />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App