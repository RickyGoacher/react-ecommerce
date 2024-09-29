import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Products } from './Pages/Products';
import './App.css';
import { ProductDisplay } from './Pages/ProductDisplay';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product" element={<ProductDisplay/>}/>
      </Routes>
    </>
  );
}

export default App;
