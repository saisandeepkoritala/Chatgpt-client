import React from 'react';
import queryString from 'query-string';
import { useLocation ,useNavigate} from 'react-router-dom';
import { useState,useEffect } from "react";
import {useDispatch} from "react-redux";
import { setisUser,setuserData } from '../slices/UserSlice';
import "../styles/login.css";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const queryParams = queryString.parse(location.search);
        if (queryParams.userData) {
            const decodedUserData = JSON.parse(decodeURIComponent(queryParams.userData));
            setUserData(decodedUserData);
            dispatch(setuserData(decodedUserData))

            // console.log(decodedUserData);
            if(decodedUserData){
                dispatch(setisUser(true))
                navigate("/");
            }
        }
    }, [dispatch,navigate,location.search]);
    return (
        <div className='login'>
            <a href="https://chatgpt-server-9fup.onrender.com/api/v1/user/auth/google">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"></img>
                    <span>Login with Google</span>
                </a>
        </div>
    )
}

export default Login;
