import React from 'react'
import { Navigate } from 'react-router-dom';

const CheckUser = ({children}) => {
    const isLoggedIn  = localStorage.getItem("user")  === "null";
    return isLoggedIn ?  children : <Navigate to="/" replace />
}

export default CheckUser