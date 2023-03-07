import React, { useState, useEffect } from 'react';

function SalesPersonSales() {
  const [salespeople, setSalespeople] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState('');
  const [sales, setSales] = useState([]);

  const getSalespeople = async () => {
    const response = await fetch('http://localhost:8200/api/salespeople/');
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  }

  useEffect(() => {
    getSalespeople();
  }, []);

  const handleSalespersonChange = async (event) => {
    const selectedSalespersonId = event.target.value;
    setSelectedSalesperson(selectedSalespersonId);
    const response = await fetch(`http://localhost:8400/api/sales/?salesperson=${selectedSalespersonId}`);
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
              id="salesperson"
              required
              name="salesperson"
              value={selectedSalesperson}
              onChange={handleSalespersonChange}
            >
              <option value="">Select salesperson...</option>
              {salespeople.map(sp => {
                return (
                  <option key={sp.id} value={sp.id}>{`${sp.first_name} ${sp.last_name}`}</option>
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
