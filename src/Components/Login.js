import React from 'react'
import '../Components/NavStyle.css'

function Login() {
  return (
    <section class="w-100 d-flex justify-content-center bg-light ">
      <div className='login-display'>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-link" role="presentation">
            <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
              aria-controls="pills-login" aria-selected="true">Login</a>
          </li>
          <li className="nav-link" role="presentation">
            <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="/Register" role="tab"
              aria-controls="pills-login" aria-selected="true">Register</a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
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
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" for="loginName">Email or username</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" for="loginPassword">Password</label>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                    <label className="form-check-label" for="loginCheck"> Remember me </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <a type="submit" href="/" className="btn btn-primary btn-block mb-4">Sign in</a>

              <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>

  )
}

export default Login