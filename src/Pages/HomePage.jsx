import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleadmin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "5rem",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>HomePage</h1>
      <div>
        <Button onClick={handleadmin} variant="primary">
          LOGIN
        </Button>{" "}
      </div>
    </div>
  );
};

export default HomePage;
