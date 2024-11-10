import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChartComponent from './components/molecules/ChartComponent';
import {
  Scroll,
  Home,
  LoyalBase,
  LearningFramerMotion,
  Button,
  DigitalLanding,
} from './pages'
import './main.scss'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart-component" element={<ChartComponent />} />
        <Route path="/loyal-base" element={<LoyalBase />} />
        <Route path="/scroll-animate" element={<Scroll />} />
        <Route path="/learing-framer-motion" element={<LearningFramerMotion />} />
        <Route path="/button" element={<Button />} />
        <Route path="/digital-page" element={<DigitalLanding />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
