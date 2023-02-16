import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  editVehicle,
  getByIdVehicle,
  getECUData,
  getIotData,
} from "../Redux/AppReducer/action";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import styles from "../CSS/VehicleEdit.module.css";
import { Container } from "react-bootstrap";

/////////Editing the details of vehicle
const VehicleEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [idData, setIdData] = useState(["starkenn"]);
  const [data, setData] = useState([]);
  const [iotData, setIotData] = useState([]);
  const [ecuData, setEcuData] = useState([]);
  const user_id = localStorage.getItem("user_id");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editVehicle(data, user_id, id))
      .then((res) => {
        alert("Edited Successfull ");
        navigate("/vehicle");
      })
      .catch((err) => {
        alert("Error in Editing");
      });
  };

  //////On Input setting data to the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  ////////Getting the old data of that particular vehicle and displaying it in form
  useEffect(() => {
    dispatch(getByIdVehicle(id))
      .then((res) => setIdData(res.payload.data.IdData))
      .catch((err) => console.log(err));

    dispatch(getIotData())
      .then((res) => setIotData(res.payload.IotData))
      .catch((err) => console.log(err));

    dispatch(getECUData())
      .then((res) => {
        setEcuData(res.payload.ECUData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div>
        <div className={styles.formdiv}>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <Link to="/vehicle">Vehicle</Link>
              </div>
              <div>
                <h3>Edit Vehicle</h3>
              </div>
            </div>
            <div>
              <div className={styles.griddiv}>
                <div>
                  <p>Vehicle_Name</p>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder={`${idData[0].vehicle_name}`}
                      name="vehicle_name"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>Vehicle_registration</p>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder={`${idData[0].vehicle_registration}`}
                      name="vehicle_registration"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </div>
                <div>
                  <p>ECU</p>
                  <Form.Select name="ecu" onChange={handleChange}>
                    <option>-Select ECU-</option>
                    {ecuData?.map((el) => {
                      return (
                        <option key={el.id} value={`${el.device_id}`}>
                          {el.device_id}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
                <div>
                  <p>IoT</p>
                  <Form.Select name="iot" onChange={handleChange}>
                    <option>-Select IoT-</option>
                    {iotData?.map((el) => {
                      return (
                        <option key={el.id} value={`${el.device_id}`}>
                          {el.device_id}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
                <div>
                  <p>Featureset</p>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder={`${idData[0].featureset}`}
                      name="featureset"
                      onChange={handleChange}
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
            </div>
            <div>
              {" "}
              <Button
                style={{ width: "600px" }}
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

export default VehicleEdit;
