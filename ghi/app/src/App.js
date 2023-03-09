import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AddPotentialCustomerForm from "./sales/PotentialCustomerForm";
import CreateSaleRecord from "./sales/CreateSalesRecordForm";
import ListSales from "./sales/ListAllSales";
import SalesPersonSales from "./sales/SalesPersonSales";
import ServiceList from "./service/ServiceList";
import ServiceForm from "./service/ServiceForm";
import ServiceHistory from "./service/ServiceHistory";
import TechnicianForm from "./service/TechnicianForm";
import TechnicianList from "./service/TechnicianList";
import ServiceDetail from "./service/ServiceDetail";
import SalesPersonForm from "./sales/SalesPersonForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="salespeople/history/New" element={<SalesPersonSales />} />
          <Route path="AllSales/New" element={<ListSales />} />
          <Route path="SaleRecord/New" element={<CreateSaleRecord />} />
          <Route path="Potentialcustomer/New" element={<AddPotentialCustomerForm />} />
          <Route path="Salesperson/New" element={<SalesPersonForm />} />

          <Route path="/" element={<MainPage />} />
          <Route path="services">
            <Route index element={<ServiceList />} />
            <Route path="new" element={<ServiceForm />} />
            <Route path="history" element={<ServiceHistory />} />
            <Route path=":id" element={<ServiceDetail />} />
          </Route>

          <Route path="technicians">
            <Route index element={<TechnicianList />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
