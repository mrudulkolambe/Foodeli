import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/Signup';
import Products from './pages/Products';
import { ProductContextProvider } from './context/Home';
import { AuthContextProvider } from './context/Auth';
import Alert from './components/Alert';
import { useState } from 'react';
import { CartContextProvider } from './context/Cart';

function App() {
  const [message, setMessage] = useState("");

  const commonProps = {
    Alert: message,
    setAlert: setMessage,
  }
  return (
    <>
      <Alert message={message} setMessage={setMessage} />
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home props={commonProps} />} />
                <Route path='/login' element={<Signin props={commonProps} />} />
                <Route path='/signup' element={<Signup props={commonProps} />} />
                <Route path='/product/:slug' element={<ProductDetails props={commonProps} />} />
                <Route path='/products' element={<Products props={commonProps} />} />
              </Routes>
            </Router>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
