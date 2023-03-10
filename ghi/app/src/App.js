import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

import SalesPersonForm from "./sales/SalesPersonForm";
import CreateSaleRecord from "./sales/CreateSalesRecordForm";
import CustomerForm from "./sales/CustomerForm";
import CreateSaleRecord from "./sales/SaleRecord";
import SalesList from "./sales/SaleList";

import ServiceDetail from "./service/ServiceDetail";
import ServiceList from "./service/ServiceList";
import ServiceForm from "./service/ServiceForm";
import ServiceHistory from "./service/ServiceHistory";
import TechnicianForm from "./service/TechnicianForm";
import TechnicianList from "./service/TechnicianList";
import ServiceDetail from "./service/ServiceDetail";

import AutomobileList from "./Inventory/AutomobileList";
import AutomobileForm from "./Inventory/AutomobileForm";
import ManufacturerForm from "./Inventory/ManufacturerForm";
import ManufacturerList from "./Inventory/ManufacturerList";
import VehicleForm from "./Inventory/VehicleForm";
import VehicleList from "./Inventory/VehicleList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="SalesPersonDetail/New" element={<SalesPersonDetail />} />
          <Route path="SaleList/New" element={<SalesList />} />
          <Route path="SaleRecord/New" element={<CreateSaleRecord />} />
          <Route path="Customer/New" element={<CustomerForm />} />
          <Route path="Salesperson/New" element={<SalesPersonForm />} />

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

          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>

          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>

          <Route path="vehicles">
            <Route index element={<VehicleList />} />
            <Route path="new" element={<VehicleForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
