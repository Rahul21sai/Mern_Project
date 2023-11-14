import React from "react";
import {useDispatch} from "react-redux";
import AuthForm from "../Auth/AuthForm";
import { adminActions } from "../../store";
import { sendAdminAuthRequest } from "../../api.helpers/api-helpers";
const Admin = () =>{
    const dispatch = useDispatch();
    const onResRecieved = (data) => {
        console.log(data);
        dispatch(adminActions.login());
        localStorage.setItem("adminId",data.id);
        localStorage.setItem("token",data.token);
    }
    const getData = (data) =>{
        console.log("Admin", data);
        sendAdminAuthRequest(data.inputs)
        .then(onResRecieved)
        .catch((err)=>console.log(err));
    };
    return <div><AuthForm onSubmit={getData} isAdmin={true}/></div>;
};
export default Admin;