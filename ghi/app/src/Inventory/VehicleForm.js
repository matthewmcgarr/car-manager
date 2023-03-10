import React, { useState, useEffect } from 'react';

const VehicleModelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    picture_url: '',
    manufacturer: '',
  });
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8100/api/manufacturers/')
      .then((response) => response.json())
      .then((data) => {
        setManufacturers(data.manufacturers);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make the API call to create the vehicle model here
    fetch('http://localhost:8100/api/models/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setFormData({ name: '', picture_url: '', manufacturer: '' });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="card p-4 mt-4 shadow">
          <h1 className="mb-4">Add A New Vehicle Model</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="url"
                placeholder="Enter picture URL"
                name="picture_url"
                value={formData.picture_url}
                onChange={handleChange}
                className="form-control"
                required
              />
              <label htmlFor="picture_url">Picture URL</label>
            </div>

            <div className="form-floating mb-3">
              <select
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select a manufacturer</option>
                {manufacturers.map((manufacturer) => (
                  <option key={manufacturer.id} value={manufacturer.id}>
                    {manufacturer.name}
                  </option>
                ))}
              </select>
              <label htmlFor="manufacturer">Manufacturer</label>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleModelForm;
