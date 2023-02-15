import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../CSS/Devices.module.css";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/AppReducer/action";
import { AiFillEdit } from "react-icons/ai";
import Badge from "react-bootstrap/Badge";
import TopNavbar from "../components/TopNavbar";

const Devices = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deviceData, setDeviceData] = useState([]);

  const handleAdd = () => {
    navigate("/deviceadd");
  };

  useEffect(() => {
    dispatch(getData())
      .then((res) => setDeviceData(res.payload.AllData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <TopNavbar />
      <Container>
        <div className={styles.topdiv}>
          <div>
            <h1>Devices</h1>
          </div>
          <div className={styles.topright}>
            <div style={{ fontSize: "21px" }}>Total: {deviceData.length}</div>
            <div>
              <Button onClick={handleAdd} variant="dark">
                Add Device
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>SR.No</th>
                <th>Device_id</th>
                <th>Device_type</th>
                <th>User_id</th>
                <th>Sim_Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {deviceData?.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.device_id}</td>
                    <td>{el.device_type}</td>
                    <td>{el.user_id}</td>
                    <td>{el.sim_number}</td>
                    <td>
                      {" "}
                      {el.status == "1" ? (
                        <Badge bg="success">Active</Badge>
                      ) : (
                        <Badge bg="danger">Deactive</Badge>
                      )}
                    </td>
                    <td>
                      <span>
                        <small>
                          <Link to={`/deviceupdate/${el.id}`}>
                            Edit <AiFillEdit size={18} />
                          </Link>{" "}
                          |<Link to={`/devicecard/${el.id}`}> View</Link>
                        </small>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Devices;
