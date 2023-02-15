import React, { useContext, useEffect, useState } from "react";
import styles from "./TopNavbar.module.css";
import {
  Navbar,
  NavDropdown,
  Container,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  BsFillGrid3X3GapFill,
  BsFillBellFill,
  BsFillHouseFill,
  BsFillCpuFill,
  BsTruck,
  BsPersonFill,
  BsColumnsGap,
  BsArrowLeftCircle,
} from "react-icons/bs";
import { AuthContext } from "../Context/AuthContext";

//Navbar

const TopNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isAdmin, checkIsAdmin } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    checkIsAdmin();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("user_id");
    navigate("/");
  };

  const handleNotification = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="topnav">
        <Container fluid>
          <div className={styles.maindiv}>
            <div className={styles.nav1}>
              <Navbar.Brand>
                {isAdmin ? (
                  <Link to="/admin-dashboard">
                    <span>
                      <img
                        className={styles.logoimg}
                        src="https://starkenn-admin.app.redbytes.in/static/media/logo_dashboard.7d91b8801cb0911d502a81eea2c22a09.svg"
                        alt="Starkenn"
                      />
                    </span>
                  </Link>
                ) : (
                  <Link to="/customer-dashboard">
                    <span>
                      <img
                        className={styles.logoimg}
                        src="https://starkenn-admin.app.redbytes.in/static/media/logo_dashboard.7d91b8801cb0911d502a81eea2c22a09.svg"
                        alt="Starkenn"
                      />
                    </span>
                  </Link>
                )}
              </Navbar.Brand>
            </div>
            <div className={styles.nav2}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link to="#">
                    <span>
                      <BsFillHouseFill size={25} color="black" />
                    </span>
                  </Nav.Link>
                  <Nav.Link to="#">
                    <span>
                      <BsFillBellFill
                        onClick={handleNotification}
                        size={25}
                        color="black"
                      />
                    </span>
                  </Nav.Link>

                  <Nav.Link href="#">
                    <span>
                      <BsFillGrid3X3GapFill
                        onClick={handleShow}
                        color="black"
                        size={25}
                      />
                    </span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Body className={styles.canvasbody}>
          {isAdmin === true ? (
            <div className={styles.griddiv}>
              <div>
                <span>
                  <BsColumnsGap
                    onClick={() => navigate("/admin-dashboard")}
                    size={35}
                  />
                </span>
                <p>Admin Dash</p>
              </div>
              <div>
                <span>
                  <BsFillCpuFill
                    onClick={() => navigate("/devices")}
                    size={35}
                  />
                </span>
                <p>Devices</p>
              </div>
              <div>
                <span>
                  <BsPersonFill
                    onClick={() => navigate("/customer")}
                    size={35}
                  />
                </span>
                <p>Customers</p>
              </div>
              <div>
                <BsArrowLeftCircle onClick={handleLogout} size={35} />
                <p>Logout</p>
              </div>
            </div>
          ) : (
            <div className={styles.griddiv}>
              <div>
                <span>
                  <BsColumnsGap
                    onClick={() => navigate("/customer-dashboard")}
                    size={35}
                  />
                </span>
                <p>Customer Dash</p>
              </div>
              <div>
                <span>
                  <BsTruck onClick={() => navigate("/vehicle")} size={35} />
                </span>
                <p>Vehicles</p>
              </div>
              <div>
                <BsArrowLeftCircle onClick={handleLogout} size={35} />
                <p>Logout</p>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      {open ? (
        <div onClick={handleNotification} className={styles.clickdiv}></div>
      ) : (
        ""
      )}
      {open ? (
        <div className={styles.notificationdiv}>
          <div>
            <h1 className="my-3 border mx-4 py-3 rounded-2 shadow ">
              Notification
            </h1>
          </div>

          <div className="d-flex flex-column gap-3 p-2 ">
            <div className="d-flex justify-content-around border rounded-2 p-3 mx-3 shadow  ">
              <div className="border rounded-4">
                <h1 className="p-2">NA</h1>
              </div>
              <div>
                <p>You have Notification about vehicle Added</p>
              </div>
            </div>
            <div className="d-flex justify-content-around border rounded-2 p-3 mx-3 shadow  ">
              <div className="border rounded-4">
                <h1 className="p-2">NA</h1>
              </div>
              <div>
                <p>You have Notification about vehicle Added</p>
              </div>
            </div>
            <div className="d-flex justify-content-around border rounded-2 p-3 mx-3 shadow  ">
              <div className="border rounded-4">
                <h1 className="p-2">NA</h1>
              </div>
              <div>
                <p>You have Notification about vehicle Added</p>
              </div>
            </div>
            <div className="d-flex justify-content-around border rounded-2 p-3 mx-3 shadow  ">
              <div className="border rounded-4">
                <h1 className="p-2">NA</h1>
              </div>
              <div>
                <p>You have Notification about vehicle Added</p>
              </div>
            </div>
            <div className="d-flex justify-content-around border rounded-2 p-3 mx-3 shadow  ">
              <div className="border rounded-4">
                <h1 className="p-2">NA</h1>
              </div>
              <div>
                <p>You have Notification about vehicle Added</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopNavbar;
