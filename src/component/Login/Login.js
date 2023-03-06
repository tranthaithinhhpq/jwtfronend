import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login-container mt-3">
      <div className="container">
        <div className="row">
          <div className="content-left col-7">
            <div className="brand">Hoi Quang Thai</div>
            <div className="detail">
              Co gi kho cu hoi quang thai la moi thu se okela con de
            </div>
          </div>
          <div className="content-right col-5 d-flex flex-column gap-3 py-3">
            <input className="form-control" type="text" placeholder="dien vao email" />
            <input className="form-control" type="text" placeholder="dien vao password" />
            <button className="btn btn-primary">log in</button>
            <span className="text-center">forget password ?</span>
            <hr />
            <button className="btn btn-success">Create account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
