import React, { useEffect, useState } from "react";

function TechnicianForm() {
  const [formData, setFormData] = useState({
    name: "",
    employee_number: "",
  });

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
                  value={formData.name}
                  placeholder="Employee Number"
                  required
                  type="text"
                  name="employee-number"
                  id="employee-number"
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
