import './App.css';
import TopNav from './TopNav.js'
import Home from './Home.js'
import Cart from './Cart.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import DetailPage from './DetailPage';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkInput, setCheckInput] = useState([])


  // 천단위 숫자구분
  const addComma = (price) => {
    return (price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }


  return (
    <>
      <BrowserRouter>
        <TopNav cart={cart} />
        <Routes>
          <Route path='/' element={<Home products={products} setProducts={setProducts} addComma={addComma} />} />
          <Route path='/Product/:id' element={<DetailPage addComma={addComma} cart={cart} setCart={setCart} />} />
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} addComma={addComma}
                              checkInput={checkInput} setCheckInput={setCheckInput}/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
