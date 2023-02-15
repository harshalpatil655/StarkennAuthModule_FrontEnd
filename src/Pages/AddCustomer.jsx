import { useState } from "react";
import { Button, Container, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCustomer } from "../Redux/AppReducer/action";
import Form from "react-bootstrap/Form";
import styles from "../CSS/AddCustomer.module.css";

//Customer Add Component

const AddCustomer = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password.length > 6) {
      alert("Password Should be of length 6");
    } else {
      if (
        data.first_name &&
        data.last_name &&
        data.username &&
        data.email &&
        data.password &&
        data.status
      ) {
        dispatch(addCustomer(data))
          .then((res) => {
            alert("Customer Added Successfully");
            navigate("/customer");
          })
          .catch((err) => {
            alert("Error in Adding Customer");
          });
      } else {
        alert("Fill all the Credentials");
      }
    }
  };

  return (
    <Container>
      <div className={styles.formdiv}>
        <div>
          <Link to="/customer">Customers</Link>
        </div>
        <div>
          <h3>Add Customers</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles.griddiv}>
              <div>
                <p>First_Name</p>
                <InputGroup onChange={handleChange}>
                  <Form.Control
                    placeholder="first_name"
                    name="first_name"
                    type="text"
                  />
                </InputGroup>
              </div>
              <div>
                <p>Last_Name</p>
                <InputGroup onChange={handleChange}>
                  <Form.Control
                    placeholder="Last_name"
                    name="last_name"
                    type="text"
                  />
                </InputGroup>
              </div>
              <div>
                <p>Username</p>
                <InputGroup onChange={handleChange}>
                  <Form.Control
                    placeholder="username"
                    name="username"
                    type="text"
                  />
                </InputGroup>
              </div>

              <div>
                <p>Email</p>
                <InputGroup onChange={handleChange}>
                  <Form.Control type="email" placeholder="Email" name="email" />
                </InputGroup>
              </div>
              <div>
                <p>Password</p>
                <InputGroup onChange={handleChange}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </InputGroup>
              </div>
              <div>
                <p>User_type</p>
                <InputGroup onChange={handleChange}>
                  <Form.Control
                    placeholder="User_type"
                    name="user_type"
                    type="text"
                  />
                </InputGroup>
              </div>
              <div>
                <p>Status</p>
                <Form.Select onChange={handleChange} name="status">
                  <option>-Select Status-</option>
                  <option value="1">Active</option>
                  <option value="2">Deactive</option>
                </Form.Select>
              </div>
            </div>
            <div>
              {" "}
              <Button
                className={styles.submitbtn}
                type="submit"
                variant="primary"
              >
                Submit
              </Button>{" "}
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddCustomer;
