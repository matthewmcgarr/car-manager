import React, { useState, useEffect } from "react";

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8100/api/manufacturers/")
      .then(response => response.json())
      .then(data => setManufacturers(data.manufacturers))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Manufacturers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map(manufacturer => (
            <tr key={manufacturer.id}>
              <td>{manufacturer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManufacturerList;

