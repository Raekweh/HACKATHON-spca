import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";
import "../styles/Login.css";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from "../firebase";
import {doc,setDoc} from 'firebase/firestore';
import {signInWithEmailAndPassword } from "firebase/auth";





function Login({ isLoggedIn, setLogin }) {
  const [show, setShow] = useState(false);
  const [regShow, setRegShow] = useState(false);
  const [user, getUser] = useState([]);
  const [email, setEmail] = useState('');
  const [error,setError] = useState(false);
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

  // useEffect(() => {
  //   getAllLogins();
  //   console.log(user);
  // }, []);

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

  const handleRegClose = () => setRegShow(false);

  const handleChange = (event) => {
    console.log(event);
    setEmail(event.target.value);
  }


const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    

try  {
  await signInWithEmailAndPassword(auth, email, password)
  setLogin(true);
  
  
} catch(err){
  setError(true);
  setLogin(false);
};

}


  if (!isLoggedIn) {
    return (
      <>
        <Button id="login-button" variant="primary" onClick={handleShow}>
          Sign In
        </Button>

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
              <form onSubmit={handleSubmit} className="Auth-form">
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
                      type='submit'
                      className="loginButton"
                    
                    >
                      Login
                    </button>
                  </div>
                  {error && <span className='regError'>Something went wrong! Try again</span>}
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>

        <Register
         regShow={regShow}
         setRegShow={setRegShow}
          handleRegClose={handleRegClose}
           regAndLogClose={regAndLogClose}
           handleChange={handleChange}
           email={email}
           handleShow={handleShow}
           isLoggedIn={isLoggedIn}
           setLogin={setLogin}
           />
      </>
    );
  }
}

export default Login;
