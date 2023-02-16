import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getcustomervehicles } from "../Redux/AppReducer/action";
import Button from "react-bootstrap/Button";
import styles from "../CSS/Vehicle.module.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import Badge from "react-bootstrap/Badge";
import TopNavbar from "../components/TopNavbar";

/////////Getting data of vehicles assign to particular customer
const Vehicle = () => {
  const dispatch = useDispatch();
  const [vehicleData, setVehicleData] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    dispatch(getcustomervehicles(user_id))
      .then((res) => setVehicleData(res.payload.VehiData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.maindiv}>
      <TopNavbar />
      {/* /////////////////////////piyush ui///////////////////////////// */}
      <Container>
        <div className={styles.topdiv}>
          <div>
            <h1>Vehicles</h1>
          </div>
          <div className={styles.toprightdiv}>
            <div style={{ fontSize: "21px" }}> Total: {vehicleData.length}</div>
            <div>
              <Link to="/addvehicle">
                <Button variant="dark">ADD NEW</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.tablediv}>
          <Table striped>
            <thead>
              <tr>
                <th>SR.NO</th>
                <th>vehicle_name</th>
                <th>vehicle_registration</th>
                <th>ECU</th>
                <th>IoT</th>
                <th>Featureset</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {vehicleData?.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.vehicle_name}</td>
                    <td>{el.vehicle_registration}</td>
                    <td>{el.ecu}</td>
                    <td>{el.iot}</td>
                    <td>{el.featureset}</td>
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
                          <Link to={`/editvehicle/${el.vehicle_id}`}>
                            Edit <AiFillEdit size={18} />{" "}
                          </Link>
                          |
                          <Link to={`/vehiclecard/${el.vehicle_id}`}>
                            {" "}
                            View
                          </Link>
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

export default Vehicle;
