import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
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
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/Salesperson/New"
              >
                Sales Person
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/Potentialcustomer/New"
              >
                Potential Customer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/SaleRecord/New"
              >
                Sale Record
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/AllSales/New"
              >
                All Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/salespeople/history/New"
              >
                Sales Person's History
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
