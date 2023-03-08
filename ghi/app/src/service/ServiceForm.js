import React, { useEffect, useState } from "react";

function ServiceForm() {
  const [technicians, setTechnicians] = useState([]);

  const [formData, setFormData] = useState({
    vin: "",
    customer_name: "",
    appointment_time: "",
    reason: "",
    technician: "",
  });

  const fetchData = async () => {
    const url = `http://localhost:8080/api/technicians/`;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setTechnicians(data.technicians);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const url = "http://localhost:8080/api/services/";

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    console.log(response);

    if (response.ok) {
      setFormData({
        vin: "",
        customer_name: "",
        appointment_time: "",
        reason: "",
        technician: "",
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
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new Service Appointment!</h1>
          <form onSubmit={handleSubmit} id="create-service-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                value={formData.vin}
                placeholder="Vin"
                required
                type="text"
                name="vin"
                id="namvine"
                className="form-control"
              />
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                value={formData.customer_name}
                placeholder="Customer"
                required
                type="text"
                name="customer_name"
                id="customer_name"
                className="form-control"
              />
              <label htmlFor="customer_name">Customer Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                value={formData.appointment_time}
                placeholder="Date"
                required
                type="date"
                name="appointment_time"
                id="appointment_time"
                className="form-control"
              />
              <label htmlFor="appointment_time">Appointment Date</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                value={formData.reason}
                placeholder="Reason"
                required
                type="text"
                name="reason"
                id="reason"
                className="form-control"
              />
              <label htmlFor="reason">Appointment Reason</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleFormChange}
                value={formData.technician}
                required
                name="technician"
                id="technician"
                className="form-select"
              >
                <option value="">Assign a Tech</option>
                {technicians.map((technician) => {
                  return (
                    <option key={technician.id} value={technician.id}>
                      {technician.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceForm;
