import { Routes, Route } from "react-router-dom";
import ChartComponent from './components/molecules/ChartComponent';
import {
  Scroll,
  Home,
  LoyalBase,
  LearningFramerMotion
} from './pages'
import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chart-component" element={<ChartComponent />} />
      <Route path="/loyal-base" element={<LoyalBase />} />
      <Route path="/scroll-animate" element={<Scroll />} />
      <Route path="/learing-framer-motion" element={<LearningFramerMotion />} />
    </Routes>
  )
}

export default App
