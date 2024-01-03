import React, { useEffect } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { LoginPage } from '../auth/'
import { AuthRouter } from '../auth/routes/AuthRouter';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CalendarPage } from '../calendar/'
import { CalendarRouter } from '../calendar/routes/CalendarRouter';
import { CalendarRoutes } from '../calendar/routes/CalendarRoutes';
import { useAuthStore } from '../hooks';


const router = createBrowserRouter([
    {
        path: 'auth/*',
        element: <AuthRouter/>,
        children: AuthRoutes,
    },
    {
        path:'/*',
        element: <CalendarRouter/>,
        children: CalendarRoutes,
    },
    {
        path:'*',
        element: <Navigate to={'/'}/>
    },
])


export const AppRouter = () => {

    const {status,checkAuthToken} = useAuthStore();

    useEffect(() => {
      checkAuthToken();
    }, [])
    
    if(status === 'checking'){
        return(
            <h3>Cargando....</h3>
        )
    }
//     const {status} = useCheckAuth();

//   if(status === 'checking'){
//     return <CheckingAuth/>
//   }

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
