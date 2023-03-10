import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CustomerForm from "./sales/CustomerForm";
import CreateSaleRecord from "./sales/SaleRecord";
import SalesList from "./sales/SaleList";
import SalesPersonDetail from "./sales/SalesPersonDetail";
import ServiceList from "./service/ServiceList";
import ServiceForm from "./service/ServiceForm";
import ServiceHistory from "./service/ServiceHistory";
import TechnicianForm from "./service/TechnicianForm";
import TechnicianList from "./service/TechnicianList";
import ServiceDetail from "./service/ServiceDetail";
import SalesPersonForm from "./sales/SalesPersonForm";
import ManufacturerList from "./Inventory/ManufacturerList";
import VehicleForm from "./Inventory/VehicleForm";
import VehicleList from "./Inventory/VehicleList";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="SalesPersonDetail/New" element={<SalesPersonDetail />} />
          <Route path="SaleList/New" element={<SalesList />} />
          <Route path="SaleRecord/New" element={<CreateSaleRecord />} />
          <Route path="Customer/New" element={<CustomerForm />} />
          <Route path="Salesperson/New" element={<SalesPersonForm />} />

          <Route path="Inventory/" element={<ManufacturerList />} />
          <Route path="Inventory/Vehicle" element={<VehicleForm />} />
          <Route path="Inventory/Vehiclelist" element={<VehicleList />} />

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
