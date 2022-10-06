import Modal from "react-bootstrap/Modal";
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth,db} from "../firebase";
import {useState,useEffect} from 'react';
import {doc,setDoc} from 'firebase/firestore';
import "../styles/Login.css";


function Register({regShow,setRegShow,handleRegClose,regAndLogClose,handleChange,email,handleShow,setLogin,isLoggedIn}) {
  const [error,setError] = useState(false);





  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const address = e.target[3].value;
    const phone = e.target[4].value;
    const password = e.target[5].value;
    const displayName = firstName + ' ' + lastName;
    console.log(firstName,lastName,email,address,phone,password,displayName);
    

try  {

  const res = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db,'users',res.user.uid),{
    uid:res.user.uid,
    displayName,
    firstName,
    lastName,
    email,
    address,
    phone,
    password,
  });
  setLogin(true);
  setRegShow(false);
  regAndLogClose();

  await updateProfile(res.user, {
    displayName
   
  });


  await setDoc(doc(db,'userChats', res.user.uid),{});
  
} catch(err){
  setError(true);
  setLogin(false);
};

  }

  
  
  

  return (
    <>
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
              <form className="Auth-form" onSubmit={handleSubmit}>
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
                      // onChange={handleChange}
                      // value={email}
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Enter address"
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
                      type='submit'
                      className="registerButton"
                   
                  
                    >
                      Register
                    </button>
                  </div>
                  {error && <span className='regError'>Something went wrong! Try again</span>}
                  

                  <div className="d-grid gap-2 mt-3"></div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>

    </>
  );
}


export default Register;
