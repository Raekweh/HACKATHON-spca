import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/Login.css";



function Login({ isLoggedIn, setLogin }) {
  const [show, setShow] = useState(false);
  const [regShow, setRegShow] = useState(false);
  const [user, getUser] = useState([]);
  const [email, setEmail] = useState('');


  const emailRef = useRef();

  const loginURL = "http://localhost:8082/api/logins/getLogins";

  const getAllLogins = () => {
    axios.get(`${loginURL}`)
      .then((response) => {
        const user = response.data;
        getUser(user);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getAllLogins();
    console.log(user);
  }, []);

  const handleClose = () => {
    setShow(false);
    setRegShow(true);
  };
  const handleShow = () => {
    setShow(true);
    setRegShow(false);
  };

  const regAndLogClose = () => {
    setShow(false);
    setRegShow(false);
  };

  const handleChange = (event) => {
    console.log(event);
    setEmail(event.target.value);
  }

  const handleRegClose = () => setRegShow(false);
  // const handleRegShow = () => setRegShow(true);

  if (!isLoggedIn) {
    return (
      <>
        <Button id="login-button" variant="primary" onClick={handleShow}>
          Sign In
        </Button>

        <Modal id="modal-container" show={regShow} onHide={handleRegClose}>
          <Modal.Header>
            <Modal.Title>
              <h3 className="Auth-form-title">Register</h3>
            </Modal.Title>
            <button className="login-close-btn" onClick={regAndLogClose}>
              X
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <div className="form-group mt-3">
                    <label>First name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Last name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      onChange={handleChange}
                      value={email}
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Enter phone number"
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

                  <div>
                    <p className="forgot-password text-right mt-2 text-center">
                      Already registered? Login
                      <a className="register-link" onClick={handleShow}>
                        here
                      </a>
                    </p>
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button
                      className="registerButton"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Register
                    </button>
                  </div>

                  <div className="d-grid gap-2 mt-3"></div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>

        <Modal id="modal-container" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              <h3 className="Auth-form-title">Log In</h3>
            </Modal.Title>
            <button className="login-close-btn" onClick={regAndLogClose}>
              X
            </button>
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
                  <div>
                    <p className="forgot-password text-right mt-2 text-center">
                      No Account? Sign up
                      <a className="register-link" onClick={handleClose}>
                        here
                      </a>
                    </p>
                  </div>

                  <div className="d-grid gap-2 mt-3">
                    <button
                      className="loginButton"
                      onClick={(e) => {
                        e.preventDefault();
                        setEmail(emailRef.current.value);

                        // if (user != null) {


                        //   user.forEach((element) => {
                        //     // if (element['email'] == ) {

                        //     // }
                        //   });

                        // }
                        // else if (user == null) {
                        //   console.log('null');

                        // }

                        console.log(email);
                      }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Login;
