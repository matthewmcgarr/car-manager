import React, { useState } from 'react';

function AddSalesPersonForm() {
  const [formData, setFormData] = useState({
    name: '',
    employeeNumber: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: value
    });
  };

  const handleAddSalesPerson = () => {
    console.log('Add sales person');
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a sales person</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.employeeNumber} placeholder="Employee Number" required type="text" name="employeeNumber" id="employeeNumber" className="form-control" />
              <label htmlFor="employeeNumber">Employee Number</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleAddSalesPerson}>Add Sales Person</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSalesPersonForm;

