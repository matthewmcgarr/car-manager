import React, { useState, useEffect } from 'react';

function ListSales() {
  const [sales, setSales] = useState([]);

  const fetchSales = async () => {
    const response = await fetch('http://localhost:8400/api/sales/');
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div className="container">
      <h1>All Sales</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Sales Person Name</th>
            <th>Employee Number</th>
            <th>Purchaser Name</th>
            <th>Automobile VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{`${sale.salesperson.first_name} ${sale.salesperson.last_name}`}</td>
              <td>{sale.salesperson.employee_number}</td>
              <td>{`${sale.customer.first_name} ${sale.customer.last_name}`}</td>
              <td>{sale.automobile.vin}</td>
              <td>{`$${sale.price}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSales;
