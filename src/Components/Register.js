import React from 'react'
import '../Components/NavStyle.css'

function Register() {
  return (
    <section className="w-100 d-flex justify-content-center bg-light ">
      <div className='login-display'>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-link" role="presentation">
            <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="/Login" role="tab"
              aria-controls="pills-login" aria-selected="true">Login</a>
          </li>
        </ul>
        <div className="tab-pane " id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi bi-facebook m-1"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi bi-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi bi-twitter"></i>
              </button>
            </div>

            <p className="text-center">or:</p>


            <div className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label" for="registerName">Name</label>
            </div>


            <div className="form-outline mb-4">
              <input type="text" id="registerUsername" className="form-control" />
              <label className="form-label" for="registerUsername">Username</label>
            </div>


            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" for="registerEmail">Email</label>
            </div>


            <div className="form-outline mb-4">
              <input type="password" id="registerPassword" className="form-control" />
              <label className="form-label" for="registerPassword">Password</label>
            </div>


            <div className="form-outline mb-4">
              <input type="password" id="registerRepeatPassword" className="form-control" />
              <label className="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>


            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                aria-describedby="registerCheckHelpText" />
              <label className="form-check-label" for="registerCheck">
                I have read and agree to the terms
              </label>
            </div>


            <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register