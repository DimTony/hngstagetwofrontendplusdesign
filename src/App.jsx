import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import Navbar from './components/Navbar';
import ViewCart from './pages/ViewCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:id" element={<ViewCart />} />
          <Route path="/cart" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
