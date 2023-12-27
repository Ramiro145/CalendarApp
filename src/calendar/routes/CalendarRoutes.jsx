import { Navigate } from "react-router-dom";
import { CalendarPage } from "../pages/CalendarPage";



export const CalendarRoutes = [
    {
        index: true,
        path: '/*',
        element: <CalendarPage/>
    },
    {
        path: '*',
        element: <Navigate to={'/'}/>
    }
];