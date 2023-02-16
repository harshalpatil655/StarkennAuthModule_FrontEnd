import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCustomerId } from "../Redux/AppReducer/action";
import styles from "../CSS/Customercard.module.css";

/////////////Displaying customer card
const CustomerCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [custoData, setCustoData] = useState(["Starkenn"]);

  useEffect(() => {
    dispatch(getCustomerId(id))
      .then((res) => {
        setCustoData(res.payload.IdData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <div>
        <Link to="/customer">Customer</Link>
      </div>
      <div className={styles.maindiv}>
        <div>
          <span>
            <FaUser size={50} />
          </span>
        </div>
        <div>
          <h5>{custoData[0].username}</h5>
          <p>
            <strong>First Name:</strong>
            {custoData[0].first_name}
          </p>
          <p>
            <strong>Last Name:</strong>
            {custoData[0].last_name}
          </p>
          <p>
            <strong>Email:</strong>
            {custoData[0].email}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CustomerCard;
