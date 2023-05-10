import React from 'react'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const isLoggedIn  = localStorage.getItem("user") === "null";
    return isLoggedIn ?  <Navigate to="Account/SignIn" replace />: children 
}

export default RequireAuth