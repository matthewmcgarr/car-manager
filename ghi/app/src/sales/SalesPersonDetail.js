import React, { useState, useEffect } from 'react';

function SalesPersonDetail() {
  const [sales, setSales] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [availableFilters, setAvailableFilters] = useState([]);

  const getData = async () => {
    const resp = await fetch("http://localhost:8090/api/sales/");
    if (resp.ok) {
      const data = await resp.json();
      setSales(data.sales);
      const filters = getAvailableFilters(data.sales);
      setAvailableFilters(filters);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  const getAvailableFilters = (salesData) => {
    const filters = new Set();
    salesData.forEach((sale) => {
      filters.add(sale.sales_person.name);
    });
    return Array.from(filters);
  };

  const filterSales = () => {
    let filteredSales = sales;
    if (filterTerm !== "") {
      filteredSales = sales.filter(
        (sale) => sale.sales_person.name === filterTerm
      );
    }
    return filteredSales;
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8090/api/sales/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      setSales(sales.filter((sale) => sale.id !== id));
    }
  };

  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1 col-md-12">
        <div className="shadow p-4 mt-4">
          <h1>Sales History</h1>
          <div className="form-group">
            <label htmlFor="filterSelect">Filter by Salesperson:</label>
            <select
              className="form-control"
              id="filterSelect"
              value={filterTerm}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              {availableFilters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2>History:</h2>
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Sales Id</th>
                  <th>Sales Person</th>
                  <th>Customer Name</th>
                  <th>Vin</th>
                  <th>Sale Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filterSales().map((sale) => {
                  return (
                    <tr key={sale.id}>
                      <td>{sale.id}</td>
                      <td>{sale.sales_person.name}</td>
                      <td>{sale.customer.name}</td>
                      <td>{sale.automobile.vin}</td>
                      <td>{sale.price}</td>
                      <td>
                        <button onClick={() => handleDelete(sale.id)} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPersonDetail;
