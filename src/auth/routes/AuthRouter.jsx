import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const AuthRouter = () => {
  const authStatus = 'authenticated';

  if(authStatus === 'authenticated'){
    return <Navigate to={'/'}/>
  }
  return <Outlet/>
}
