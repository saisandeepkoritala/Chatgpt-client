import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setisUser } from '../slices/UserSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Account = () => {
    const {userData} = useSelector((store)=>store.user);
    const dispatch = useDispatch();
    console.log(userData)

    useEffect(()=>{
        toast.success("Login Success!", {
            position: "top-right",
            style: { background: 'rgba(0, 0, 0, 1)', color: "white", fontWeight: 'bold' }, 
            className: 'custom-toast'
        });
    },[])
    const handleLogout=()=>{
        dispatch(setisUser(false))
        toast.success("Logout Success!", {
            position: "top-right",
            style: { background: 'rgba(0, 0, 0, 1)', color: "white", fontWeight: 'bold' }, 
            className: 'custom-toast'
        });
    }
    return (
    <>
        <li><img src={userData?.picture} alt="" width="50px"/></li>
        <li><p>{userData.displayName}</p></li>
        <li onClick={handleLogout}>Logout</li>
    </>
    
    )
}

export default Account