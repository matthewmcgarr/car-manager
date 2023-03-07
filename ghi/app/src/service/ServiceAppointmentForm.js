import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ServiceAppointment = () => {
  const [appointment, setAppointment] = useState({});
  const { id } = useParams();

  const getData = async () => {
    const resp = await fetch(`http://localhost:8080/api/services/${id}`);
    if (resp.ok) {
      const data = await resp.json();
      setAppointment(data);
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
              Customer: <span>{appointment.customer_name}</span>
            </h4>
            <h4>
              Technician: <span>{appointment.tech}</span>
            </h4>
            <h4>
              Reason: <span>{appointment.reason}</span>
            </h4>
            <h4>
              Status: <span>{appointment.completed}</span>
            </h4>
            <h4>
              Appointment Time: <span>{appointment.appointment_time}</span>
            </h4>

            <Link to="/appoiintments" className="btn btn-primary">
              Return to Appointment List
            </Link>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete Shoe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
