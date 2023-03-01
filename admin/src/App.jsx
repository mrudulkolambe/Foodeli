import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ProductContextProvider } from './context/ProductContext';
import Category from './pages/Category';
import Home from './pages/Home';
import ParentProduct from './pages/ParentProduct';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Router>
        <ProductContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product-category" element={<ParentProduct />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </ProductContextProvider>
      </Router>
    </>
  );
}

export default App;
