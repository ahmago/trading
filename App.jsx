
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/footer/Footer';
import ProductsLaptop from './component/pages/page-laptop/ProductsLaptop';
import CategoriesProducts from './component/pages/categoriesproducts/CategoriesProducts';
import ProductsMobile from './component/pages/page-mobile/ProductsMobile';
import ProductsHeadPhone from './component/pages/page-headphone/ProductsHeadPhone';
import ProductSingleMobile from './component/productsingle/ProductSingleMobile';
import Cart from './component/pages/Cart/Cart';
import ProductSingleLaptop from './component/productsingle/ProductSingleLaptop';
import ProductSingleHeadPhone from './component/productsingle/ProductSingleHeadPhone';
import ProductSingleSmartwatch from './component/productsingle/ProductSingleSmartwatch';
import ProductSingleMonitorgaming from './component/productsingle/ProductSingleMonitorgaming';
import Login from './component/userlogin/Login';
import Register from './component/userlogin/Register';
import SmartWatch from './component/pages/pagesmartwatch/SmartWatch';
import Monintor from './component/pages/monitor/Monintor';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mobile' element={<ProductsMobile />} />
          <Route path='/laptop' element={<ProductsLaptop />} />
          <Route path='/headphone' element={<ProductsHeadPhone />} />
          <Route path='/smartwatch' element={<SmartWatch />} />
          <Route path='/monitorgaming' element={<Monintor />} />
          <Route path='/mobile/:id' element={<ProductSingleMobile />} />
          <Route path='/laptop/:id' element={<ProductSingleLaptop />} />
          <Route path='/headphone/:id' element={<ProductSingleHeadPhone />} />
          <Route path='/smartwatch/:id' element={<ProductSingleSmartwatch />} />
          <Route path='/monitorgaming/:id' element={<ProductSingleMonitorgaming />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
