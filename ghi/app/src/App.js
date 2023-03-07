import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddSalesPerson from './AddSalesPersonForm';
import MainPage from './MainPage';
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="AddSalesPerson" element={<AddSalesPerson />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
