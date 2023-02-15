import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, useParams } from "react-router-dom";
import styles from "../CSS/Devicescard.module.css";
import { FcMultipleDevices } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { getById } from "../Redux/AppReducer/action";

const DeviceCard = () => {
  const dispatch = useDispatch();
  const [idData, setIdData] = useState(["starkenn"]);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getById(id))
      .then((res) => setIdData(res.payload.data.idData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div>
        <Link to="/devices">Devices</Link>
      </div>
      <div className={styles.maindiv}>
        <div>
          <FcMultipleDevices size={50} />
        </div>
        <div className={styles.flexdiv}>
          <h5></h5>
          <p>
            <strong>Sim Number: </strong>
            {idData[0].sim_number}
          </p>
          <p>
            <strong>Device_type: </strong> {idData[0].device_type} |{" "}
            <strong>Device_id: </strong>
            {idData[0].device_id}
          </p>
          <Button variant="info">Feature set</Button>{" "}
        </div>
      </div>
    </Container>
  );
};

export default DeviceCard;
