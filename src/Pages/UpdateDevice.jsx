import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getById, updateDevice } from "../Redux/AppReducer/action";
import styles from "../CSS/UpdateDevice.module.css";

const UpdateDevice = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [idData, setIdData] = useState(["Starkenn"]);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    if (
      data.device_id &&
      data.device_type &&
      data.user_id &&
      data.sim_number &&
      data.status
    ) {
      dispatch(updateDevice(data, id));
      alert("Data Updated Successfully");
      navigate("/devices");
    } else {
      alert("Fill all Credentials");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    dispatch(getById(id))
      .then((res) => setIdData(res.payload.data.idData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className={styles.formdiv}>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <Link to="/devices">Devices</Link>
            </div>
            <div>Edit Device</div>
          </div>
          <div className={styles.griddiv}>
            <div>
              <p>Device_Id</p>
              <InputGroup onChange={handleChange}>
                <Form.Control
                  placeholder={idData[0].device_id}
                  name="device_id"
                />
              </InputGroup>
            </div>
            <div>
              <p>Device_type</p>
              <Form.Select name="device_type" onChange={handleChange}>
                <option>-Select device_type-</option>
                <option value="ECU">ECU</option>
                <option value="IoT">IoT</option>
              </Form.Select>
            </div>
            <div>
              <p>User_Id</p>
              <InputGroup onChange={handleChange}>
                <Form.Control placeholder={idData[0].user_id} name="user_id" />
              </InputGroup>
            </div>
            <div>
              <p>Sim_number</p>
              <InputGroup onChange={handleChange}>
                <Form.Control
                  placeholder={idData[0].sim_number}
                  name="sim_number"
                  maxLength={10}
                />
              </InputGroup>
            </div>
            <div>
              <p>Status</p>
              <Form.Select name="status" onChange={handleChange}>
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

export default UpdateDevice;
