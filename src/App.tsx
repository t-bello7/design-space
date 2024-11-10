import { Routes, Route } from "react-router-dom";
import ChartComponent from './components/molecules/ChartComponent';
import {
  Scroll,
  Home,
  LoyalBase,
  LearningFramerMotion,
  Button
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
      <Route path="/button" element={<Button />} />
    </Routes>
  )
}

export default App
