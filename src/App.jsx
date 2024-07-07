import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
