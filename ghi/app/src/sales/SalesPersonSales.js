import React, { useState, useEffect } from 'react';

function SalesPersonSales() {
  // const [salesperson, setSalesperson] = useState([]);
  // const [selectedSalesperson, setSelectedSalesperson] = useState('');
  const [sales, setSales] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  // const getSalesperson = async () => {
  //   const response = await fetch('http://localhost:8090/api/salespeople/');
  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log("data;", data)
  //     setSalesperson(data.salesperson);
  //   }
  // }
  const getData = async () => {
    const resp = await fetch("http://localhost:8090/api/sales/");
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      setSales(data.sales);
    }
  };


  useEffect(() => {
    getData();
  }, []);

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  // const handleSalespersonChange = async (event) => {
  //   const selectedSalespersonId = event.target.value;
  //   setSelectedSalesperson(selectedSalespersonId);
  //   const response = await fetch(`http://localhost:8090/api/sales/${selectedSalespersonId}`);
  //   if (response.ok) {
  //     const data = await response.json();
  //     setSales(data.sales);
  //   }
  // }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Sales History</h1>
          <input
          onChange={handleFilterChange}
          class="form-control"
          placeholder="search"
        />
          <div className="form-group">
            {/* <label htmlFor="salesperson">Select a sales person:</label>
            <select
              className="form-control"
              id="sales_person"
              required
              name="sales_person"
              value={selectedSalesperson} */}
              {/* // onChange={handleSalespersonChange} */}
            {/* > */}
              {/* <option value="">Select sales person...</option>
              {salesperson.map(sp => {
                return (
                  <option key={sp.id} value={sp.id}>{sp.name}</option> */}
                {/* )
              })} */}
            {/* </select> */}
          </div>
          <div>
            <h2>Sales History:</h2>
            <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales Id</th>
            <th>Sales Person</th>
            <th>Customer Name</th>
            <th>Vin</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
        {sales.map(sale => {
            return (
              <tr key={sale.id}>
                <td>
                    {sale.id}
                </td>
                <td>{sale.sales_person.name}</td>
                <td>{sale.customer.name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
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

export default SalesPersonSales;
