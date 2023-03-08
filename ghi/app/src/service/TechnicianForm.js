import React, { useEffect, useState } from "react";

function TechnicianForm() {
  const [formData, setFormData] = useState({
    name: "",
    employee_number: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = `http://localhost:8080/api/technicians/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      setFormData({
        name: "",
        employee_number: "",
      });
    }
  };

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new Technician</h1>
            <form onSubmit={handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleFormChange}
                  value={formData.name}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleFormChange}
                  value={formData.employee_number}
                  placeholder="Employee Number"
                  required
                  type="text"
                  name="employee_number"
                  id="employee_number"
                  className="form-control"
                />
                <label htmlFor="employee number">Employee Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicianForm;
