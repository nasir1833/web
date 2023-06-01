import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Login from '../pages/Login'

export default function PrivateRoute({Component}) {
    const {authenticated}=useContext(AuthContext)
    if(authenticated===200)  return  <Component/>;
    return <Login loginerr="text-danger"/>;
  
}
