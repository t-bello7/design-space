import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import ChartComponent from './components/molecules/ChartComponent';
import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chart-component" element={<ChartComponent />} />
    </Routes>
  )
}

export default App
