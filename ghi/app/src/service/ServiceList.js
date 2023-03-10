import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  const [services, setServices] = useState([]);

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

  const handleDelete = async (e) => {
    const url = `http://localhost:8080/api/services/${e.target.id}/`;
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
    const url = `http://localhost:8080/api/services/${e.target.id}/`;
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
      <figure class="text-center">
        <h1>Ongoing Services</h1>
      </figure>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Tech</th>
            <th>Service Date</th>
            <th>Service Time</th>
            <th>Reason</th>
            <th>VIP</th>
            <th>Completed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => {
            if (!service.completed)
              return (
                <tr key={service.id}>
                  <td>
                    <Link to={`/services/${service.id}`}>{service.id}</Link>
                  </td>
                  <td>{service.vin}</td>
                  <td>{service.customer_name}</td>
                  <td>{service.technician.name}</td>
                  <td>{service.date.date}</td>
                  <td>{service.time.time}</td>
                  <td>{service.reason}</td>
                  <td>{service.vip ? "Yes" : "No"}</td>
                  <td>
                    <button
                      onClick={handleComplete}
                      id={service.id}
                      className="btn btn-success"
                    >
                      {service.completed
                        ? "Mark as Not Completed"
                        : "Mark as Completed"}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={handleDelete}
                      id={service.id}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete Appointment
                    </button>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ServiceList;
