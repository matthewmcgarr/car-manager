import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddSalesPersonForm from './AddSalesPersonForm';
import AddSalesPerson from './AddSalesPersonForm';
import MainPage from './MainPage';
import Nav from './Nav';
import AddPotentialCustomerForm from './PotentialCustomerForm';
import CreateSaleRecord from './CreateSalesRecordForm';
import ListSales from './ListAllSales';
import SalesPersonSales from './SalesPersonSales';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="salespeople/history" element={< SalesPersonSales />} />
          <Route path="AllSales" element={< ListSales />} />
          <Route path="SaleRecord" element={< CreateSaleRecord />} />
          <Route path="Potentialcustomer" element={< AddPotentialCustomerForm />} />
          <Route path="AddSalesPerson" element={<AddSalesPerson />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
