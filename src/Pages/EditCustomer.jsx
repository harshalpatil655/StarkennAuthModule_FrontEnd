import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../CSS/EditCustomer.module.css";
import { useDispatch } from "react-redux";
import {
  addmastercustomer,
  editCustomer,
  editmastercustomer,
  getCustomerId,
  getmastercustomerById,
} from "../Redux/AppReducer/action";

const EditCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [idData, setIdData] = useState(["Starkenn"]);
  const [master_customer, setMaster_customer] = useState(["Master_customer"]);
  const [isData, setIsData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handlemasterChange = (e) => {
    const { name, value } = e.target;
    setMaster_customer({ ...master_customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password.length > 6) {
      alert("Password should be of length 6");
    } else {
      if (
        data.first_name &&
        data.last_name &&
        data.username &&
        data.email &&
        data.password &&
        data.status
      ) {
        dispatch(editCustomer(data, id))
          .then((res) => {
            alert("Customer Details Edited Successfully");
            navigate("/customer");
          })
          .catch((err) => console.log(err));
      } else {
        alert("Fill All the Credentials");
        console.log("Error in Editing the Data");
      }
    }
  };

  ///Master Customer

  const handleMasterSubmit = (e) => {
    e.preventDefault();

    if (
      master_customer.company_name &&
      master_customer.address &&
      master_customer.state &&
      master_customer.city &&
      master_customer.pincode &&
      master_customer.phone &&
      master_customer.status
    ) {
      if (isData) {
        dispatch(
          editmastercustomer(
            master_customer,
            id,
            master_customer[0].customer_id
          )
        )
          .then((res) => {
            console.log(res);
            alert("Data Added Successfully");
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(addmastercustomer(master_customer, id))
          .then((res) => {
            console.log(res);
            alert("Data Added Successfully");
          })
          .then((err) => console.log(err));
      }
    } else {
      alert("Fill All Credentials");
    }
  };

  useEffect(() => {
    dispatch(getCustomerId(id))
      .then((res) => {
        setIdData(res.payload.IdData);
      })
      .catch((err) => console.log(err));

    dispatch(getmastercustomerById(id))
      .then((res) => {
        setMaster_customer(res.payload.getData);
        if (res.payload.getData.length > 0) {
          setIsData(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className={styles.flexdiv}>
        <div className={styles.formdiv}>
          <div>
            <Link to="/customer">Customers</Link>
          </div>
          <div>
            <h3>Edit Customers</h3>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.griddiv}>
                <div>
                  <p>First Name</p>
                  <InputGroup onChange={handleChange}>
                    <Form.Control
                      placeholder={idData[0].first_name}
                      name="first_name"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Last Name</p>
                  <InputGroup onChange={handleChange}>
                    <Form.Control
                      placeholder={idData[0].last_name}
                      name="last_name"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Username</p>
                  <InputGroup onChange={handleChange}>
                    <Form.Control
                      placeholder={idData[0].username}
                      name="username"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Email</p>
                  <InputGroup onChange={handleChange}>
                    <Form.Control
                      placeholder={idData[0].email}
                      name="email"
                      type="email"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Password</p>
                  <InputGroup onChange={handleChange}>
                    <Form.Control
                      placeholder="Password"
                      name="password"
                      type="password"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>User_type</p>
                  <InputGroup onChange={handleChange}>
                    <Form.Control
                      placeholder={idData[0].user_type}
                      name="user_name"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Status</p>
                  <Form.Select onChange={handleChange} name="status">
                    <option>-Select Status-</option>
                    <option value="0">Deleted</option>
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
        {/* //////////////////////////////////////Master Customer/////////////////// */}
        <div className={styles.formdiv}>
          <div>
            <Link to="/customer">Customers</Link>
          </div>
          <div>
            <h3>EDIT Master_Customers</h3>
          </div>
          <div>
            <form onSubmit={handleMasterSubmit}>
              <div className={styles.griddiv}>
                <div>
                  <p>Company Name</p>
                  <InputGroup onChange={handlemasterChange}>
                    <Form.Control
                      placeholder={
                        master_customer.length > 0
                          ? master_customer[0].company_name
                          : ""
                      }
                      name="company_name"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Address</p>
                  <InputGroup onChange={handlemasterChange}>
                    <Form.Control
                      placeholder={
                        master_customer.length > 0
                          ? master_customer[0].address
                          : ""
                      }
                      name="address"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>State</p>
                  <InputGroup onChange={handlemasterChange}>
                    <Form.Control
                      placeholder={
                        master_customer.length > 0
                          ? master_customer[0].state
                          : ""
                      }
                      name="state"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>City</p>
                  <InputGroup onChange={handlemasterChange}>
                    <Form.Control
                      placeholder={
                        master_customer.length > 0
                          ? master_customer[0].city
                          : ""
                      }
                      name="city"
                      type="text"
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Pincode</p>
                  <InputGroup onChange={handlemasterChange}>
                    <Form.Control
                      placeholder={
                        master_customer.length > 0
                          ? master_customer[0].pincode
                          : ""
                      }
                      name="pincode"
                      maxLength={6}
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Phone</p>
                  <InputGroup onChange={handlemasterChange}>
                    <Form.Control
                      placeholder={
                        master_customer.length > 0
                          ? master_customer[0].phone
                          : ""
                      }
                      name="phone"
                      maxLength={10}
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Status</p>
                  <Form.Select onChange={handlemasterChange} name="status">
                    <option>-Select Status-</option>
                    <option value="0">Deleted</option>
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
      </div>
    </Container>
  );
};

export default EditCustomer;
