import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addDevice } from "../Redux/AppReducer/action";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../CSS/AddDevices.module.css";

///Adding Device to Data

const AddDevice = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.device_id &&
      data.device_type &&
      data.user_id &&
      data.sim_number &&
      data.status
    ) {
      dispatch(addDevice(data))
        .then((res) => {
          alert("Device added Successfully");
          navigate("/devices");
        })
        .catch((err) => {
          alert("Error in Adding Device");
        });
    } else {
      alert("Fill all the credentials");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Container>
      <div className={styles.formdiv}>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <Link to="/devices">Devices</Link>
            </div>
            <div>
              <h3>Add Device</h3>
            </div>
          </div>
          <div className={styles.griddiv}>
            <div>
              <p>Device_Id</p>
              <InputGroup onChange={handleChange}>
                <Form.Control placeholder="Device_id" name="device_id" />
              </InputGroup>
            </div>
            <div>
              <p>Device_type</p>
              <Form.Select onChange={handleChange} name="device_type">
                <option>-Select Device_type-</option>
                <option value="ECU">ECU</option>
                <option value="IoT">IoT</option>
              </Form.Select>
            </div>
            <div>
              <p>User_Id</p>
              <InputGroup onChange={handleChange}>
                <Form.Control placeholder="User_id" name="user_id" />
              </InputGroup>
            </div>
            <div>
              <p>Sim_Number</p>
              <InputGroup onChange={handleChange}>
                <Form.Control
                  placeholder="Sim_Number"
                  name="sim_number"
                  maxLength={10}
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
    </Container>
  );
};

export default AddDevice;
