import React, { useState, useEffect } from 'react';

function CreateSaleRecord() {
const [vin, setVin] = useState([]);
const [salesperson, setSalesperson] = useState([]);
const [customers, setCustomers] = useState([]);
const [formData, setFormData] = useState({
  automobile: '',
  sales_person: '',
  customer: '',
  price: ''
});


const getVin = async () => {
  const response = await fetch('http://localhost:8100/api/automobiles/');
  if (response.ok) {
    const data = await response.json();
    console.log("autos;", data)
    setVin(data.vin);
  }
}


const getSalesperson = async () => {
  const response = await fetch('http://localhost:8090/api/salespeople/');
  if (response.ok) {
    const data = await response.json();
    console.log("salespeople;", data)
    setSalesperson(data.salesperson);
  }
}


const getCustomers = async () => {
  const response = await fetch('http://localhost:8090/api/customers/');
  if (response.ok) {
    const data = await response.json();
    console.log("customers;", data)
    setCustomers(data.customers);
  }
}


useEffect(() => {
  getVin();
  getSalesperson();
  getCustomers();
}, []);




const handleSubmit = async (event) => {
  event.preventDefault();
  const response = await fetch('http://localhost:8090/api/sales/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  if (response.ok) {
    setFormData({
      automobile: '',
      salesperson: '',
      customer: '',
      price: ''
    });
  }
}




const handleFormChange = (event) => {
  const inputName = event.target.name;
  const value = event.target.value;
  console.log("this is inputname/value", inputName, value)
  setFormData({
    ...formData,
    [inputName]: value
  });
}


return (
  <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Create a Sale Record</h1>
        <form onSubmit={handleSubmit} id="create-sale-record-form">
          <div className="form-group">
            <label htmlFor="automobile">Automobile:</label>
            <select
              className="form-control"
              id="vin"
              required
              name="vin"
              value={formData.automobile}
              onChange={handleFormChange}
            >
              <option value="">Select automobile...</option>
              {vin && vin.map(autos => {
                return (
                  <option key={autos.id} value={autos.id}> {autos.vin} </option>
                )
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="salesperson">Sales Person:</label>
            <select
              className="form-control"
              id="sales_person"
              required
              name="sales_person"
              value={formData.sales_person}
              onChange={handleFormChange}
            >
              <option value="">Select sales person...</option>
              {salesperson.map(salesperson => {
                return (
                  <option key={salesperson.id} value={salesperson.id}> {salesperson.name} </option>
                )
              })}
            </select>
          </div>
          <div className="form-group">
            <label
        htmlFor="customer">Customer:</label>
        <select
          className="form-control"
          id="customer"
          required
          name="customer"
          value={formData.customer}
          onChange={handleFormChange}
        >
          <option value="">Select customers...</option>
          {customers.map(customer => {
            return (
              <option key={customer.id} value={customer.name}> {customer.address} {customer.phone_number} </option>
            )
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          className="form-control"
          id="price"
          required
          name="price"
          value={formData.price}
          onChange={handleFormChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Sale Record</button>
    </form>
  </div>
</div>
</div>

  );
}

export default CreateSaleRecord;
