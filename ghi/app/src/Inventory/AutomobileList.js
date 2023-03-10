import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AutomobileList = () => {
  const [autos, setAutos] = useState([]);

  const getData = async () => {
    const resp = await fetch("http://localhost:8100/api/automobiles/");
    if (resp.ok) {
      const data = await resp.json();
      setAutos(data.autos);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Automobile ID</th>
          <th>Color</th>
          <th>Year</th>
          <th>VIN</th>
          <th>Model Name</th>
          <th>Manufacturer</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {autos.map((automobile) => {
          return (
            <tr key={automobile.id}>
              <td>{automobile.id}</td>
              <td>{automobile.color}</td>
              <td>{automobile.year}</td>
              <td>{automobile.vin}</td>
              <td>{automobile.model.name}</td>
              <td>{automobile.model.manufacturer.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AutomobileList;
