import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { getCustomer } from "../Redux/AppReducer/action";
import { AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styles from "../CSS/Customer.module.css";
import Badge from "react-bootstrap/Badge";
import TopNavbar from "../components/TopNavbar";

///Display customer list

const Customer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState([]);

  const handleAdd = () => {
    navigate("/customeradd");
  };

  useEffect(() => {
    dispatch(getCustomer())
      .then((res) => setCustomerData(res.payload.getData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <TopNavbar />
      <Container>
        <div className={styles.topdiv}>
          <div>
            <h1>Customers</h1>
          </div>
          <div className={styles.topright}>
            <div style={{ fontSize: "21px" }}>Total:{customerData.length}</div>
            <div>
              <Button onClick={handleAdd} variant="dark">
                Add Customer
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>SR.No</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>username</th>
                <th>Email</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {customerData?.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.first_name}</td>
                    <td>{el.last_name}</td>
                    <td>{el.username}</td>
                    <td>{el.email}</td>
                    <td>
                      {el.status == "1" ? (
                        <Badge bg="success">Active</Badge>
                      ) : (
                        <Badge bg="danger">Deactive</Badge>
                      )}
                    </td>
                    <td>
                      <span>
                        <small>
                          <Link to={`/customeredit/${el.user_id}`}>
                            Edit <AiFillEdit size={18} />
                          </Link>{" "}
                          |<Link to={`/customercard/${el.user_id}`}> View</Link>
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

export default Customer;
