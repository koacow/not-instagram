import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../../components/Header";
import {ROUTES} from '../../app/routes'

function Root({ isLoggedIn }) {
    if (!isLoggedIn) return <Navigate to={ROUTES.LOGIN} />;
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Root;