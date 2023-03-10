import React, { useState } from 'react';

function SalespersonForm() {
  const [formData, setFormData] = useState({
    name: '',
    employee_number: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formData;", formData);
    const url = 'http://localhost:8090/api/salespeople/';

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
        employee_number: '',
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
          <h1>Create New Salesperson</h1>
          <form onSubmit={handleSubmit} id="create-salesperson-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="first_name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.employee_number} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
              <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalespersonForm;
