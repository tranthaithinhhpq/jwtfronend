import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
const Login = () => {
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
              <label>Password:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter password"
              />
            </div>

            <button className="btn btn-primary">log in</button>
            <a className="text-center" href="#">
              forget password ?
            </a>
            <hr />
            <Link to="/register" className="btn btn-success">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
