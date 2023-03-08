import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SalesPersonForm from './sales/SalesPersonForm';
import MainPage from './MainPage';
import Nav from './Nav';
import AddPotentialCustomerForm from './sales/PotentialCustomerForm';
import CreateSaleRecord from './sales/CreateSalesRecordForm';
import ListSales from './sales/ListAllSales';
import SalesPersonSales from './sales/SalesPersonSales';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="salespeople/history/New" element={< SalesPersonSales />} />
          <Route path="AllSales/New" element={< ListSales />} />
          <Route path="SaleRecord/New" element={< CreateSaleRecord />} />
          <Route path="Potentialcustomer/New" element={< AddPotentialCustomerForm />} />
          <Route path="SalesPerson/New" element={<SalesPersonForm />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
