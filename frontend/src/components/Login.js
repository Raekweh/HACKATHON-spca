import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/Login.css";


function Login({isLoggedIn, setIsLoggedIn}) {
  const [show, setShow] = useState(false);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(isLoggedIn);


  return (
    <>
      <Button id={("login-button")} variant="primary" onClick={() => {
        (isLoggedIn ? setIsLoggedIn(false) : handleShow())
        

      }}
        
      >
        {(isLoggedIn ? <a style={{textDecoration:'none',color:'inherit'}} href="/">Sign Out</a> : "Sign In")}
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
                {/* <div className="d-grid gap-2 mt-3">
                  <button
                    id="modal-login"
                    type="submit"
                    className="btn btn-success"
                  >
                    Login
                  </button>
                </div> */}
                <div>
                <p className="forgot-password text-right mt-2 text-center">
                  No Account? Sign up <a href="#">here</a>
                </p>
                
                </div>

                <div className="d-grid gap-2 mt-3">
                  <button className="loginButton" onClick={(e) => {
                    e.preventDefault();
                    setIsLoggedIn(true);
                    console.log(isLoggedIn);
                    handleClose();
                  }}>Login</button>
                  {/* <button
                    id="modal-login"
                    type="submit"
                    className="btn btn-success"
                  >
                    Login
                  </button> */}
                </div>

              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
