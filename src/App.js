import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Component/Header';
import Home from './Component/Home';
import Coins from './Component/Coins';
import Exchanges from './Component/Exchanges';
import CoinDetails from './Component/CoinDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coin/:id' element={<CoinDetails />} />





      </Routes>
    </Router>
  );
}

export default App;
