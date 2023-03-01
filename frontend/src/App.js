import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/main' element={<ProductDetails />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
