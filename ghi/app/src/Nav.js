import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/services"
                  >
                    Current Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/services/new"
                  >
                    New Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/technicians/new"
                  >
                    New Technician
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/services/history"
                  >
                    Service History
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Salesperson/New">
                Sales Person
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Potentialcustomer/New">
                Potential Customer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/SaleRecord/New">
                Sale Record
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AllSales/New">
                All Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/history/New">
                Sales Person's History
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/automobiles"
                  >
                    Automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/automobiles/new"
                  >
                    New Automobile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/manufacturers"
                  >
                    Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/manufacturers/new"
                  >
                    New Manufacturer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/vehicles"
                  >
                    Vehicles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/vehicles/new"
                  >
                    New Vehicle
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
