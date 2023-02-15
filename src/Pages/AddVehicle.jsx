import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import styles from "../CSS/AddVehicle.module.css";
import Button from "react-bootstrap/Button";
import {
  AddVehicleData,
  getECUData,
  getIotData,
} from "../Redux/AppReducer/action";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

//Adding Vehicle

const AddVehicle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [iotData, setIotData] = useState([]);
  const [ecuData, setEcuData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const user_id = localStorage.getItem("user_id");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(AddVehicleData(data, user_id))
      .then((res) => {
        alert("Data Added");
        navigate("/vehicle");
      })
      .catch((err) => {
        alert("Error");
      });
  };

  useEffect(() => {
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
              <Link to="/vehicle">Vehicles</Link>
            </div>
            <div>
              <h3>Add Vehicle</h3>
            </div>
            <div className={styles.griddiv}>
              <div>
                <p>Vehicle_Name</p>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="VEHICLE_NAME"
                    name="vehicle_name"
                    onChange={handleChange}
                  />
                </InputGroup>
              </div>
              <div>
                <p>Registration Number</p>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="VEHICLE_REGISTRATION"
                    name="vehicle_registration"
                    onChange={handleChange}
                  />
                </InputGroup>
              </div>
              <div>
                <p>Select ECU</p>
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
                <p>Select IoT</p>

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
                    placeholder="FEATURESET"
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
            <div>
              <Button
                style={{ width: "600px", marginTop: "2rem" }}
                type="submit"
                variant="primary"
              >
                SUBMIT
              </Button>{" "}
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddVehicle;
