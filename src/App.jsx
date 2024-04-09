import './styels/main.css'


import { Route, Routes } from 'react-router-dom';

import { Loyout } from './layouts/Loyout';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { NotFound } from './pages/notFound/NotFound';
import { Services } from './pages/services/Services';
import { Delivery } from './pages/delivery/Delivery';
import { Payment } from './pages/payment/Payment';
import { Projects } from './pages/projects/Projects';
import { Contact } from './pages/contact/Contact';
import { Stock } from './pages/stock/Stock';
import { BigOrder } from './pages/bigOrder/BigOrder';
import { Articles } from './pages/articles/Articles';
import { Vacancies } from './pages/vacancies/Vacancies';
import { ManagerOffice } from './pages/vacancies/pages/Manager';
import { ManagerStock } from './pages/vacancies/pages/Manager';
import { ServicesPage1, ServicesPage2, ServicesPage3, ServicesPage4 } from './pages/services/servicesPages/ServicesPages';
import { Article } from './pages/articles/article/Article';
import { Products } from './pages/products/Products';
import { Product } from './pages/product/Product'
import { Cart } from './pages/cart/Cart';
import { Favorite } from './pages/favorite/Favorite';
import { Search } from './pages/search/Search';


function App() {
  return (
    <>
      <Routes>
        {/* 1 Route для Loyout */}
        <Route path='/' element={<Loyout />}>
          {/* Для первого маршрута index будет работать по - "/" */}
          <Route index element={<Home />} />
          <Route path='products/:category' element={<Products />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='services/service-1' element={<ServicesPage1 />} />
          <Route path='services/service-2' element={<ServicesPage2 />} />
          <Route path='services/service-3' element={<ServicesPage3 />} />
          <Route path='services/service-4' element={<ServicesPage4 />} />
          <Route path='cart' element={<Cart />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='services' element={<Services />} />
          <Route path='delivery' element={<Delivery />} />
          <Route path='payment' element={<Payment />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='stock' element={<Stock />} />
          <Route path='big-order' element={<BigOrder />} />
          <Route path='articles' element={<Articles />} />
          <Route path='articles/:id' element={<Article />} />
          <Route path='vacancies/' element={<Vacancies />} />
          <Route path='vacancies/manager-office' element={<ManagerOffice />} />
          <Route path='vacancies/manager-stock' element={<ManagerStock />} />
          <Route path='search/:searchValue' element={<Search />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
