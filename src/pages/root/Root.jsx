import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../../components/Header";

function Root({ isLoggedIn }) {
    if (!isLoggedIn) return <Navigate to='/login' />;
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Root;