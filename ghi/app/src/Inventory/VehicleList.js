import React, { useState, useEffect } from 'react';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8100/api/models/')
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data.models);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8100/api/models/${id}/`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>Vehicle List</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Vehicle Name</th>
            <th>Picture</th>
            <th>Manufacturer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr
              key={vehicle.id}
              className="table-row"
              onMouseEnter={(e) => e.target.parentNode.classList.add("table-row-hover")}
              onMouseLeave={(e) => e.target.parentNode.classList.remove("table-row-hover")}
            >
              <td style={{ fontSize: '20px' }}>{vehicle.name}</td>
              <td>
                <img src={vehicle.picture_url} alt={vehicle.name} style={{ width: '100px' }} />
              </td>
              <td style={{ fontSize: '16px' }}>{vehicle.manufacturer.name}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(vehicle.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
