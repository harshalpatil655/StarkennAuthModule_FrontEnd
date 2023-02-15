import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { BsTruck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getByIdVehicle } from "../Redux/AppReducer/action";
import Button from "react-bootstrap/Button";
import styles from "../CSS/Vehiclecard.module.css";

const Vehiclecard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [idData, setIdData] = useState(["starkenn"]);

  useEffect(() => {
    dispatch(getByIdVehicle(id))
      .then((res) => setIdData(res.payload.data.IdData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div>
        <Link to="/vehicle">Vehicle</Link>
      </div>
      <div className={styles.maindiv}>
        <div>
          <BsTruck size={50} />
        </div>
        <div className={styles.flexdiv}>
          <h5>{idData[0].vehicle_name}</h5>
          <p>
            <strong>Registration Number: </strong>
            {idData[0].vehicle_registration}
          </p>
          <p>
            <strong>ECU:</strong> {idData[0].ecu} | <strong>IoT:</strong>{" "}
            {idData[0].iot}
          </p>
          <Button variant="info">Feature set</Button>{" "}
        </div>
      </div>
    </Container>
  );
};

export default Vehiclecard;
