import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const HandleRegister = () => {
    // if (username == "" || password == "") {
    //   alert("Please Enter Your Account Details");
    //   return false;
    // } else {
    //   fetch("https://fakestoreapi.com/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       username: username,
    //       password: password,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((json) => alert(json))
    //     .catch((err) => alert(err));
    // }
  };
  return (
    <>
      <section className="hero_banner">
        <div className="container">
          <h1 className="hero_banner_title">Create Your Account</h1>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2>Register with us !</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="form-block">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control form-block-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-5">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        className="form-control form-block-control"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-5">
                      <button
                        type="button"
                        className="btn btn-primary form-block-btn"
                        onClick={HandleRegister}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="row mb-4">
                <div className="col-md-12">
                  <h2>Already have account !</h2>
                  <p className="mt-3 col-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-5">
                    <Link to="/login">
                      <button
                        type="button"
                        className="btn btn-primary form-block-btn"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
