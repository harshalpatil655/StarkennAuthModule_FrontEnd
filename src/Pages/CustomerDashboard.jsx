import TopNavbar from "../components/TopNavbar";
import {
  BsFillCpuFill,
  BsRecycle,
  BsFillCheckSquareFill,
  BsTruck,
} from "react-icons/bs";

import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/////Customer Dashboard
const CustomerDashboard = () => {
  let user_id = localStorage.getItem("user_id");
  let token = localStorage.getItem("token");
  let [vehicleData, setVehicleData] = useState([]);
  let [devicesData, setDevicesData] = useState([]);
  const navigate = useNavigate();

  const getVehicleData = () => {
    axios
      .get(`http://localhost:8080/vehicles/getcustomervehicle/${user_id}`, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => {
        setVehicleData(res.data.VehiData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDevicesData = () => {
    axios
      .get(`http://localhost:8080/devices/getcustoid/${user_id}`, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => setDevicesData(res.data.idData))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVehicleData();
    getDevicesData();
  }, []);

  return (
    <div>
      <TopNavbar />
      <Container className="mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card border-0 shadow">
              <div className="card-body">
                <BsTruck
                  onClick={() => navigate("/vehicle")}
                  className="h1 display-4 my-2"
                />
                <h1 className="display-4">{vehicleData.length}</h1>
                <h5>Vehicle</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow">
              <div className="card-body">
                <BsRecycle className="h1 display-4 my-2" />
                <h1 className="display-4">25</h1>
                <h5>Ongoing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow">
              <div className="card-body">
                <BsFillCheckSquareFill className="h1 display-4 my-2" />
                <h1 className="display-4">12</h1>
                <h5>Completed</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow">
              <div className="card-body">
                <BsFillCpuFill
                  onClick={() => navigate("/customer-devices")}
                  className="h1 display-4 my-2"
                />
                <h1 className="display-4">{devicesData.length}</h1>
                <h5>Devices</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerDashboard;
