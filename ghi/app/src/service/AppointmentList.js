import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  const getData = async () => {
    const resp = await fetch("http://localhost:8080/api/services/");
    if (resp.ok) {
      const data = await resp.json();
      setAppointments(data.setAppointments);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (e) => {
    const url = "";
    const fetchConfig = {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch(url, fetchConfig);
    const data = await resp.json();

    setAppointments(
      appointments.filter(
        (appointment) => String(appointment.id) !== e.target.id
      )
    );
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Appointment ID</th>
          <th>Customer Name</th>
          <th>Tech</th>
          <th>Appointment Time</th>
          <th>Reason</th>
          <th>Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => {
          return (
            <tr key={appointment.id}>
              <td>
                <Link to={`/appointments/${appointment.id}`}>
                  {appointment.id}
                </Link>
              </td>
              <td>{appointment.customer_name}</td>
              <td>{appointment.tech}</td>
              <td>{appointment.appointment_time}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.completed}</td>
              <td>
                <button
                  onClick={handleDelete}
                  id={appointment.id}
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
  );
};
