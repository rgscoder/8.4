import './App.css';
import { Route, Routes } from "react-router-dom"
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import AllStocks from './pages/AllStocks';
import Page from './pages/Page';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<AllStocks />} />
        <Route path="/stocks/:symbol" element={<Page />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;