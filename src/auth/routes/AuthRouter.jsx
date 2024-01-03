import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const AuthRouter = () => {
  const {status, checkAuthToken} = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if(status === 'authenticated'){
    return <Navigate to={'/'}/>
  }
  return <Outlet/>
}
