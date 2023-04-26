import React from 'react';
import { Outlet, Routes, Navigate} from 'react-router-dom';

const PrivateRoutes = () => {
    return (
        localStorage.getItem('token')? <Outlet/> : <Navigate to="/login"/>
    )
    // if(localStorage.getItem('token')){
    //     <Outlet/>
    // } else {
    //     <Navigate to="/login"/>
    // }
    // <Route {...rest} render ={(props) => {
    //     if(localStorage.getItem('token')) {
    //         return(<Outlet {...props}/>)
    //     } else {
    //         return <Navigate path="/login"/>
    //     }
    // }}/>
}

export default PrivateRoutes;