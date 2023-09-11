import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes/routes";

const MasterLayout = () => {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
        </div>
        <div id="layoutSidenav_content">
          <main className="bg-warning p-2">
            <Routes>
              {routes.map((route, idx) => {
                return route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={route.element} // Pass the route.element as-is
                  />
                );
              })}
              <Route path="admin" element={<Navigate to="/admin/dashboard" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
