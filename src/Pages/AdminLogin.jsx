import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../CSS/Adminlogin.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

//Login for customer or Admin

const AdminLogin = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkIsAdmin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email && data.password) {
      dispatch(login(data))
        .then((res) => {
          let user_type = localStorage.getItem("user_type") || "";
          if (res.type === "LOGIN_SUCCESS") {
            alert("Login Successfull");
            checkIsAdmin();
            if (user_type == "1") {
              navigate("/admin-dashboard");
            } else {
              navigate("/customer-dashboard");
            }
          } else {
            alert("Wrong Details");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill the details");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className={styles.maindiv}>
      <div className={styles.logindiv}>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h1>LOGIN</h1>
            </div>
            <div>
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div>
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div>
              <Button className={styles.btn} type="submit" variant="primary">
                Submit
              </Button>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
