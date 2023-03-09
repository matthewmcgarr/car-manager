import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceHistory = () => {
  const [services, setServices] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const getData = async () => {
    const resp = await fetch("http://localhost:8080/api/services/");
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      setServices(data.services);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  const handleFilterCategory = (e) => {
    setFilterCategory(e.target.value);
  };

  const getServicesFiltered = () => {
    if (filterCategory === "") {
      return services;
    }

    if (filterCategory === "vip") {
      return services.filter(
        (service) =>
          service[filterCategory] === (filterTerm.toLowerCase() === "yes")
      );
    }
    return services.filter((service) =>
      service[filterCategory].toLowerCase().includes(filterTerm.toLowerCase())
    );
  };

  const handleDelete = async (e) => {
    const url = `http://localhost:8080/api/services/${e.target.id}`;
    const fetchConfig = {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch(url, fetchConfig);
    const data = await resp.json();

    setServices(
      services.filter((service) => String(service.id) !== e.target.id)
    );
  };

  const handleComplete = async (e) => {
    const url = `http://localhost:8080/api/services/${e.target.id}`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify({ completed: true }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const resp = await fetch(url, fetchConfig);
    const data = await resp.json();

    setServices(
      services.map((service) =>
        String(service.id) === e.target.id
          ? { ...service, completed: true }
          : service
      )
    );
  };

  return (
    <>
      <hr></hr>
      <div class="input-group mb-3">
        <select onChange={handleFilterCategory}>
          <option value="vin">Vin</option>
          <option value="customer_name">Customer</option>
          <option value="reason">Reason</option>
          <option value="vip">VIP</option>
        </select>
        <input
          onChange={handleFilterChange}
          class="form-control"
          placeholder="search"
        />
      </div>
      <hr></hr>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Tech</th>
            <th>Appointment Date</th>
            <th>Reason</th>
            <th>VIP</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {getServicesFiltered().map((service) => {
            console.log(service);
            return (
              <tr key={service.id}>
                <td>
                  <Link to={`/services/${service.id}`}>{service.id}</Link>
                </td>
                <td>{service.vin}</td>
                <td>{service.customer_name}</td>
                <td>{service.technician.name}</td>
                <td>{service.date}</td>
                <td>{service.reason}</td>
                <td>{service.vip ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ServiceHistory;
