import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="login-container mt-3">
      <div className="container">
        <div className="row">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">Hoi Quang Thai</div>
            <div className="detail">
              Co gi kho cu hoi quang thai la moi thu se okela con de
            </div>
          </div>
          <div className="content-right col-11 mx-auto d-flex flex-column gap-3 py-3 col-sm-5">
            <div>
              <label>Email:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label>User Name:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label>Re-enter password:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Re-enter password"
              />
            </div>
            <button className="btn btn-primary">Register</button>

            <hr />
            <Link to="/login" className="btn btn-success">
              Already've an account. Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
