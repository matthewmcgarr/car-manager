import React, { useState, useEffect } from 'react';

function SalesPersonSales() {
  const [salesperson, setSalesperson] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState('');
  const [sales, setSales] = useState([]);

  const getSalesperson = async () => {
    const response = await fetch('http://localhost:8090/api/salespeople/');
    if (response.ok) {
      const data = await response.json();
      setSalesperson(data.sales_person);
    }
  }

  useEffect(() => {
    getSalesperson();
  }, []);

  const handleSalespersonChange = async (event) => {
    const selectedSalespersonId = event.target.value;
    setSelectedSalesperson(selectedSalespersonId);
    const response = await fetch(`http://localhost:8090/api/sales/${selectedSalespersonId}`);
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Sales History</h1>
          <div className="form-group">
            <label htmlFor="salesperson">Select a sales person:</label>
            <select
              className="form-control"
              id="sales_person"
              required
              name="sales_person"
              value={selectedSalesperson}
              onChange={handleSalespersonChange}
            >
              <option value="">Select sales_person...</option>
              {salesperson.map(sp => {
                return (
                  <option key={sp.id} value={sp.id}>{`${sp.name}`}</option>
                )
              })}
            </select>
          </div>
          <div>
            <h2>Sales History:</h2>
            {sales.map(sale => {
              return (
                <div key={sale.id}>
                  <p>Sales Person: {`${sale.salesperson.first_name} ${sale.salesperson.last_name}`}</p>
                  <p>Customer: {`${sale.customer.first_name} ${sale.customer.last_name}`}</p>
                  <p>Automobile VIN: {sale.automobile.vin}</p>
                  <p>Price: {sale.price}</p>
                  <hr />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPersonSales;
