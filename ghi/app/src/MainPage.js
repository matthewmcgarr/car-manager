import React from "react";

function MainPage() {
  return (
    <div className="container-fluid bg-dark vh-100 d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-2 text-white mb-5">CarCar</h1>
          <p className="lead text-white mb-5">
            The premiere solution for automobile dealership management!
          </p>
          <button className="btn btn-lg btn-outline-light">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
