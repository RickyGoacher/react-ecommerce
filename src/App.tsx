import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/HomePage/Home';
import { Products } from './Pages/ProductList/Products';
import { ProductDisplay } from './Pages/ProductDisplay/ProductDisplay';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { BasketContextProvider } from './Context/BasketContext/BasketContext';

function App() {
  return (
    <>
      <BasketContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:category" element={<Products/>}/>
          <Route path="/:product" element={<ProductDisplay/>}/>
        </Routes>
        <Footer />
      </BasketContextProvider>
    </>
  );
}

export default App;
