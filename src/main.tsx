import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import ChartComponent from './components/molecules/ChartComponent';
import {
  Scroll,
  Home,
  LoyalBase,
  LearningFramerMotion,
  Button,
  DigitalLanding,
  YasmenPageTransistion,
  AboutYasmen
} from './pages'
import './main.scss'

const RoutePath = () => {
  const location = useLocation()
  return (
    // <AnimatePresence initial={false} mode='wait'>
    <AnimatePresence>

      <Routes key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/chart-component" element={<ChartComponent />} />
        <Route path="/loyal-base" element={<LoyalBase />} />
        <Route path="/scroll-animate" element={<Scroll />} />
        <Route path="/learing-framer-motion" element={<LearningFramerMotion />} />
        <Route path="/button" element={<Button />} />
        <Route path="/digital-page" element={<DigitalLanding />} />
        <Route path="/about-yasmen" element={<AboutYasmen />} />
        <Route path="/yasmen" element={<YasmenPageTransistion />} />
      </Routes>
    </AnimatePresence>
  )
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutePath />
    </BrowserRouter>
  </React.StrictMode>
)
