import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSalesPersonForm from "./AddSalesPersonForm";
import AddSalesPerson from "./AddSalesPersonForm";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AddPotentialCustomerForm from "./PotentialCustomerForm";
import CreateSaleRecord from "./CreateSalesRecordForm";
import ListSales from "./ListAllSales";
import SalesPersonSales from "./SalesPersonSales";
import ServiceList from "./service/ServiceList";
import ServiceForm from "./service/ServiceForm";
import ServiceHistory from "./service/ServiceHistory";
import TechnicianForm from "./service/TechnicianForm";
import TechnicianList from "./service/TechnicianList";
import ServiceDetail from "./service/ServiceDetail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="salespeople/history" element={<SalesPersonSales />} />
          <Route path="AllSales" element={<ListSales />} />
          <Route path="SaleRecord" element={<CreateSaleRecord />} />
          <Route
            path="Potentialcustomer"
            element={<AddPotentialCustomerForm />}
          />
          <Route path="AddSalesPerson" element={<AddSalesPerson />} />
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
