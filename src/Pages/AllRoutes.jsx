import React from "react";
import AdminLogin from "./AdminLogin";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import HomePage from "./HomePage";
import AddDevice from "./AddDevice";
import UpdateDevice from "./UpdateDevice";
import Vehicle from "./Vehicle";
import AddVehicle from "./AddVehicle";
import VehicleEdit from "./VehicleEdit";
import Devices from "./Devices";
import AddCustomer from "./AddCustomer";
import DeviceCard from "./DeviceCard";
import CustomerCard from "./CustomerCard";
import EditCustomer from "./EditCustomer";
import Customer from "./Customer";
import CustomerDashboard from "./CustomerDashboard";
import Vehiclecard from "./Vehiclecard";
import AdminProtected from "../AuthRoute/AdminProtected";
import CustomerProtected from "../AuthRoute/CustomerProtected";
import CustomerDevices from "./CustomerDevices";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AdminLogin />} />

        <Route
          path="/admin-dashboard"
          element={
            <AdminProtected>
              <AdminDashboard />
            </AdminProtected>
          }
        />
        <Route
          path="/devices"
          element={
            <AdminProtected>
              <Devices />
            </AdminProtected>
          }
        />
        <Route
          path="/deviceadd"
          element={
            <AdminProtected>
              <AddDevice />
            </AdminProtected>
          }
        />
        <Route
          path="/deviceupdate/:id"
          element={
            <AdminProtected>
              <UpdateDevice />
            </AdminProtected>
          }
        />
        <Route
          path="/devicecard/:id"
          element={
            <AdminProtected>
              <DeviceCard />
            </AdminProtected>
          }
        />
        <Route
          path="/customer"
          element={
            <AdminProtected>
              <Customer />
            </AdminProtected>
          }
        />
        <Route
          path="/customeradd"
          element={
            <AdminProtected>
              <AddCustomer />
            </AdminProtected>
          }
        />
        <Route
          path="/customeredit/:id"
          element={
            <AdminProtected>
              <EditCustomer />
            </AdminProtected>
          }
        />
        <Route
          path="customercard/:id"
          element={
            <AdminProtected>
              <CustomerCard />
            </AdminProtected>
          }
        />
        <Route
          path="/customer-devices"
          element={
            <CustomerProtected>
              <CustomerDevices />
            </CustomerProtected>
          }
        />

        <Route
          path="/customer-dashboard"
          element={
            <CustomerProtected>
              <CustomerDashboard />
            </CustomerProtected>
          }
        />

        <Route
          path="/vehicle"
          element={
            <CustomerProtected>
              <Vehicle />
            </CustomerProtected>
          }
        />
        <Route
          path="/addvehicle"
          element={
            <CustomerProtected>
              <AddVehicle />
            </CustomerProtected>
          }
        />
        <Route
          path="/editvehicle/:id"
          element={
            <CustomerProtected>
              {" "}
              <VehicleEdit />
            </CustomerProtected>
          }
        />

        <Route
          path="/vehiclecard/:id"
          element={
            <CustomerProtected>
              <Vehiclecard />{" "}
            </CustomerProtected>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
