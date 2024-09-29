import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Products } from './Pages/ProductList/Products';
import { ProductDisplay } from './Pages/ProductDisplay/ProductDisplay';
import { Navigation } from './Components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<Products/>}/>
        <Route path="/:product" element={<ProductDisplay/>}/>
      </Routes>
    </>
  );
}

export default App;
