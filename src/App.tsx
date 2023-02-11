import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoyalBase from './pages/LoyalBase';
import ChartComponent from './components/molecules/ChartComponent';
import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chart-component" element={<ChartComponent />} />
      <Route path="/loyal-base" element={<LoyalBase />} />
    </Routes>
  )
}

export default App
