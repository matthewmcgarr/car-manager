import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const { id } = useParams();

  const getData = async () => {
    const resp = await fetch(`http://localhost:8080/api/services/${id}`);
    console.log(resp);
    if (resp.ok) {
      const data = await resp.json();
      console.log("data:", data);
      setService(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async () => {
    const url = `http://localhost:8080/api/services/${id}`;

    const fetchConfig = {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch(url, fetchConfig);
    const data = await resp.json();
  };
  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Appointment Details</h1>
            <h4>
              Customer: <span>{service.customer_name}</span>
            </h4>
            <h4>
              Reason: <span>{service.reason}</span>
            </h4>
            <h4>
              Status:{" "}
              <span>{service.completed ? "Completed" : "Not Completed"}</span>
            </h4>
            <h4>
              Appointment Time: <span>{service.appointment_time}</span>
            </h4>

            <h4>
              Technician:{" "}
              <span>
                {service.technician ? service.technician.name : "Loading..."}
              </span>
            </h4>
            <h4>
              VIP: <span>{service.vip ? "Yes" : "No"}</span>
            </h4>
            <Link to="/services" className="btn btn-primary">
              Return to Service List
            </Link>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
