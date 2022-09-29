import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/Login.css";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="login-button" variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal id="modal-container" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="Auth-form-title">Log In</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button
                    id="modal-login"
                    type="submit"
                    className="btn btn-success"
                  >
                    Login
                  </button>
                </div>
                <p className="forgot-password text-right mt-2">
                  Register <a href="#">here</a>
                </p>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
