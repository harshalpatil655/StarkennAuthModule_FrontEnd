import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";

///////getting devices Data
const CustomerDevices = () => {
  const [devicesData, setDevicesData] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  const getDevicesData = () => {
    axios
      .get(`http://localhost:8080/devices/getcustoid/${user_id}`, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => setDevicesData(res.data.idData))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDevicesData();
  }, []);

  return (
    <div>
      <TopNavbar />
      <Container>
        <Link to="/customer-dashboard">Customer Dashboard</Link>
        <h1>Customer Devices</h1>
        <Table>
          <thead>
            <tr>
              <th>SR.No</th>
              <th>Device_id</th>
              <th>Device_type</th>
              <th>Sim_Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {devicesData?.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.device_id}</td>
                  <td>{el.device_type}</td>
                  <td>{el.sim_number}</td>
                  <td>
                    {" "}
                    {el.status == "1" ? (
                      <Badge bg="success">Active</Badge>
                    ) : (
                      <Badge bg="danger">Deactive</Badge>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CustomerDevices;
