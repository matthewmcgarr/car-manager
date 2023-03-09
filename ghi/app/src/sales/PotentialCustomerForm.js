import React, { useState } from 'react';

function AddPotentialCustomerForm() {
const [formData, setFormData] = useState({
  name: '',
  address: '',
  phone_number: '',
});

  const handleSubmit = async (event) => {
   event.preventDefault();
   console.log("formData;", formData);
   const url = 'http://localhost:8090/api/customers/';


  const fetchConfig = {
    method: "post",
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, fetchConfig);
  console.log("response;", response);
  if (response.ok) {
    setFormData({
      name: '',
      address: '',
      phone_number: '',
    });
  }
};


const handleFormChange = (e) => {
  const value = e.target.value;
  const inputName = e.target.name;
  setFormData({
    ...formData,
    [inputName]: value
  });
};

return (
  <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Add A New Customer</h1>
        <form onSubmit={handleSubmit} id="add-potential-customer-form">
          <div className="form-floating mb-3">
            <input onChange={handleFormChange} value={formData.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleFormChange} value={formData.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
            <label htmlFor="address">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleFormChange} value={formData.phone_number} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
            <label htmlFor="phone_number">Phone Number</label>
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>Add New Customer</button>
        </form>
      </div>
    </div>
  </div>
);
}

export default AddPotentialCustomerForm;
