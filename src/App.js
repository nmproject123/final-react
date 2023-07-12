import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Products from './components/Products';
import Customers from './components/Customers';
import Purchases from './components/Purchases';
import DataPurchases from './components/DataPurchases';
import EditCustomer from './components/EditCustomer';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/" >Menu</Link>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='Products' element={<Products />} />
          <Route path='Customers' element={<Customers />} />
          <Route path='Purchases' element={<Purchases />} />
          <Route path='EditProduct' element={<EditProduct />} />
          <Route path='EditCustomer' element={<EditCustomer />} />
          <Route path='DataParchases' element={<DataPurchases />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
